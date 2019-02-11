import React, {useState} from 'react'
import Card from '@material-ui/core/Card/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import UnitPrices from './UnitPrices'
import Profit from './Profit'
import {makeStyles} from '@material-ui/styles'

function Calc() {
    const classes = useStyles()
    const [bonusItemsSold, setBonusItemsSold] = useState(defaultState.bonusItemsSold)
    const [cfo, setCfo] = useState(defaultState.cfo)
    const [garden, setGarden] = useState(defaultState.garden)
    const [itemsSold, setItemsSold] = useState(defaultState.itemsSold)
    const [unitPrice, setUnitPrice] = useState(defaultState.unitPrice)

    const salesError = !garden && itemsSold > 3
    const bonusError = bonusItemsSold > itemsSold

    const salesDollars = unitPrice * itemsSold
    const bonusDollars = bonusItemsSold * 5
    const gardenMultiplier = garden ? 2 : 1
    const cfoMultiplier = cfo ? 1.5 : 1
    const profit = Math.ceil(((salesDollars * gardenMultiplier) + bonusDollars) * cfoMultiplier)

    const reset = () => {
        setBonusItemsSold(defaultState.bonusItemsSold)
        setCfo(defaultState.cfo)
        setGarden(defaultState.garden)
        setItemsSold(defaultState.itemsSold)
        setUnitPrice(defaultState.unitPrice)
    }

    return (
        <Card className={classes.card}>
            <CardHeader title="Dinnertime Calculator"/>
            <CardContent>
                <FormGroup>
                    {/*Unit Price */}
                    <UnitPrices
                        className={classes.select}
                        value={unitPrice}
                        onChange={event => setUnitPrice(event.target.value)}
                    />

                    {/* Items Sold */}
                    <FormControl className={classes.select} error={salesError}>
                        <InputLabel htmlFor="sales">Items Sold</InputLabel>
                        <Select
                            value={itemsSold}
                            onChange={event => setItemsSold(event.target.value)}
                            input={<Input id="sales"/>}
                        >
                            {[1, 2, 3, 4, 5].map(count =>
                                <MenuItem key={count} value={count}>{`${count} item(s) sold`}</MenuItem>)
                            }
                        </Select>
                        {
                            salesError &&
                            <FormHelperText>Items sold must be at most 3 for regular house.</FormHelperText>
                        }
                    </FormControl>

                    {/* Bonus Sales */}
                    <FormControl className={classes.select} error={bonusError}>
                        <InputLabel htmlFor="bonus">Marketing Bonuses</InputLabel>
                        <Select
                            value={bonusItemsSold}
                            onChange={event => setBonusItemsSold(event.target.value)}
                            input={<Input id="bonus"/>}
                        >
                            {[0, 1, 2, 3, 4, 5].map(count =>
                                <MenuItem key={count} value={count}>{`${count} bonus(es)`}</MenuItem>)
                            }
                        </Select>
                        {
                            bonusError &&
                            <FormHelperText>Marketing bonuses may not exceed items sold.</FormHelperText>
                        }
                    </FormControl>

                    {/* Garden House */}
                    <FormControlLabel
                        className={classes.switch}
                        label="Garden House"
                        control={
                            <Switch
                                checked={garden}
                                onChange={event => setGarden(event.target.checked)}
                            />
                        }
                    />

                    {/* CFO Bonus */}
                    <FormControlLabel
                        className={classes.switch}
                        label="CFO Bonus"
                        control={
                            <Switch
                                checked={cfo}
                                onChange={event => setCfo(event.target.checked)}
                            />
                        }
                    />
                </FormGroup>
            </CardContent>
            <CardActions>
                <Button color="secondary" onClick={reset}>Reset</Button>
                <Profit value={profit}/>
            </CardActions>
        </Card>
    )
}

const defaultState = {
    bonusItemsSold: 0,
    cfo: false,
    garden: false,
    itemsSold: 1,
    unitPrice: 10
}

const useStyles = makeStyles({
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

export default Calc
