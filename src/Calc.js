import React from 'react'
import {withStyles} from 'material-ui/styles'
import Card, {CardActions, CardContent, CardHeader} from 'material-ui/Card'
import {FormGroup, FormControl, FormControlLabel, FormHelperText} from 'material-ui/Form'
import Select from 'material-ui/Select'
import Input, {InputLabel} from 'material-ui/Input'
import Switch from 'material-ui/Switch'
import Button from 'material-ui/Button'
import {MenuItem} from 'material-ui/Menu'
import UnitPrices from './UnitPrices'
import Profit from './Profit'

class Calc extends React.Component {
    state = {...defaultState}

    handleChange = name => event => this.setState({[name]: event.target.value})
    handleCheckChange = name => event => this.setState({[name]: event.target.checked})
    handleReset = () => this.setState({...defaultState})

    get profit() {
        const unit = this.state.unitPrice * this.state.sales
        const bonus = this.state.bonus * 5
        const garden = this.state.garden ? 2 : 1
        const cfo = this.state.cfo ? 1.5 : 1
        return Math.ceil(((unit * garden) + bonus) * cfo)
    }

    render() {
        const {classes} = this.props
        const {bonus, cfo, garden, sales, unitPrice} = this.state
        const salesError = !this.state.garden && this.state.sales > 3
        const bonusError = this.state.bonus > this.state.sales

        return (
            <Card className={classes.card}>
                <CardHeader title="Dinnertime Calculator"/>
                <CardContent>
                    <FormGroup>
                        {/*Unit Price */}
                        <UnitPrices
                            className={classes.select}
                            value={unitPrice}
                            onChange={this.handleChange('unitPrice')}
                        />

                        {/* Items Sold */}
                        <FormControl className={classes.select} error={salesError}>
                            <InputLabel htmlFor="sales">Items Sold</InputLabel>
                            <Select
                                value={sales}
                                onChange={this.handleChange('sales')}
                                input={<Input id="sales"/>}
                            >
                                {[1, 2, 3, 4, 5].map(count =>
                                    <MenuItem key={count} value={count}>{`${count} item(s) sold`}</MenuItem>)
                                }
                            </Select>
                            {salesError && <FormHelperText>Items sold must be at most 3 for regular house.</FormHelperText>}
                        </FormControl>

                        {/* Bonus Sales */}
                        <FormControl className={classes.select} error={bonusError}>
                            <InputLabel htmlFor="bonus">Marketing Bonuses</InputLabel>
                            <Select
                                value={bonus}
                                onChange={this.handleChange('bonus')}
                                input={<Input id="bonus"/>}
                            >
                                {[0, 1, 2, 3, 4, 5].map(count =>
                                    <MenuItem key={count} value={count}>{`${count} bonus(es)`}</MenuItem>)
                                }
                            </Select>
                            {bonusError && <FormHelperText>Marketing bonuses may not exceed items sold.</FormHelperText>}
                        </FormControl>

                        {/* Garden House */}
                        <FormControlLabel
                            className={classes.switch}
                            control={<Switch checked={garden} onChange={this.handleCheckChange('garden')}/>}
                            label="Garden House"
                        />

                        {/* CFO Bonus */}
                        <FormControlLabel
                            className={classes.switch}
                            control={<Switch checked={cfo} onChange={this.handleCheckChange('cfo')}/>}
                            label="CFO Bonus"
                        />
                    </FormGroup>
                </CardContent>
                <CardActions>
                    <Button color="accent" onClick={this.handleReset}>Reset</Button>
                    <Profit value={this.profit}/>
                </CardActions>
            </Card>
        )
    }
}

const defaultState = {
    bonus: 0,
    cfo: false,
    garden: false,
    sales: 1,
    unitPrice: 10
}

const styles = theme => ({
    card: {
        margin: 16,
        maxWidth: 275
    },
    select: {
        marginBottom: 24
    },
    switch: {
        marginTop: -6
    }
})

export default withStyles(styles)(Calc)
