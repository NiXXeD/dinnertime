import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import UnitPrices from './UnitPrices'
import Profit from './Profit'

class BulkCalc extends React.Component {
    state = {...defaultState}

    handleChange = name => event => this.setState({[name]: event.target.value})
    handleCheckChange = name => event => this.setState({[name]: event.target.checked})
    handleReset = () => this.setState({...defaultState})

    get profit() {
        const {unitPrice, cfo, normalSales, gardenSales, marketingBonuses} = this.state
        const cfoMultiplier = cfo ? 1.5 : 1
        const normalProfit = normalSales * unitPrice
        const gardenProfit = gardenSales * unitPrice * 2
        const marketingProfit = (marketingBonuses * 5)
        return Math.ceil(cfoMultiplier * (normalProfit + gardenProfit + marketingProfit))
    }

    render() {
        const {classes} = this.props
        const {unitPrice, cfo, normalSales, gardenSales, marketingBonuses} = this.state

        return (
            <Card className={classes.card}>
                <CardHeader title="Bulk Sale Calculator"/>
                <CardContent>
                    <FormGroup>
                        {/* Unit Price */}
                        <UnitPrices
                            className={classes.field}
                            value={unitPrice}
                            onChange={this.handleChange('unitPrice')}
                        />

                        {/* Normal Sales */}
                        <TextField
                            className={classes.field}
                            name="normalSales"
                            label="Normal Sales"
                            value={normalSales}
                            type="number"
                            onChange={this.handleChange('normalSales')}
                        />

                        {/* Garden Sales */}
                        <TextField
                            className={classes.field}
                            name="gardenSales"
                            label="Garden Sales"
                            value={gardenSales}
                            type="number"
                            onChange={this.handleChange('gardenSales')}
                        />

                        {/* Marketing Bonuses */}
                        <TextField
                            className={classes.field}
                            name="marketingBonuses"
                            label="Marketing Bonuses"
                            value={marketingBonuses}
                            type="number"
                            onChange={this.handleChange('marketingBonuses')}
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
                    <Button color="secondary" onClick={this.handleReset}>Reset</Button>
                    <Profit value={this.profit}/>
                </CardActions>
            </Card>
        )
    }
}

const defaultState = {
    unitPrice: 10,
    normalSales: 0,
    gardenSales: 0,
    marketingBonuses: 0,
    cfo: false
}

const styles = {
    card: {
        margin: 16,
        maxWidth: 275
    },
    field: {
        marginBottom: 24
    },
    switch: {
        marginTop: -6
    }
}

export default withStyles(styles)(BulkCalc)
