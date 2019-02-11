import React, {useState} from 'react'
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
import {makeStyles} from '@material-ui/styles'

function BulkCalc() {
    const classes = useStyles()
    const [unitPrice, setUnitPrice] = useState(defaultState.unitPrice)
    const [normalSales, setNormalSales] = useState(defaultState.normalSales)
    const [gardenSales, setGardenSales] = useState(defaultState.gardenSales)
    const [marketingBonuses, setMarketingBonuses] = useState(defaultState.marketingBonuses)
    const [cfo, setCfo] = useState(defaultState.cfo)

    const cfoMultiplier = cfo ? 1.5 : 1
    const normalProfit = normalSales * unitPrice
    const gardenProfit = gardenSales * unitPrice * 2
    const marketingProfit = (marketingBonuses * 5)
    const profit = Math.ceil(cfoMultiplier * (normalProfit + gardenProfit + marketingProfit))

    const reset = () => {
        setUnitPrice(defaultState.unitPrice)
        setNormalSales(defaultState.normalSales)
        setGardenSales(defaultState.gardenSales)
        setMarketingBonuses(defaultState.marketingBonuses)
        setCfo(defaultState.cfo)
    }

    return (
        <Card className={classes.card}>
            <CardHeader title="Bulk Sale Calculator"/>
            <CardContent>
                <FormGroup>
                    {/* Unit Price */}
                    <UnitPrices
                        className={classes.field}
                        value={unitPrice}
                        onChange={event => setUnitPrice(event.target.value)}
                    />

                    {/* Normal Sales */}
                    <TextField
                        className={classes.field}
                        name="normalSales"
                        label="Normal Sales"
                        value={normalSales}
                        type="number"
                        onChange={event => setNormalSales(event.target.value)}
                    />

                    {/* Garden Sales */}
                    <TextField
                        className={classes.field}
                        name="gardenSales"
                        label="Garden Sales"
                        value={gardenSales}
                        type="number"
                        onChange={event => setGardenSales(event.target.value)}
                    />

                    {/* Marketing Bonuses */}
                    <TextField
                        className={classes.field}
                        name="marketingBonuses"
                        label="Marketing Bonuses"
                        value={marketingBonuses}
                        type="number"
                        onChange={event => setMarketingBonuses(event.target.value)}
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
    unitPrice: 10,
    normalSales: 0,
    gardenSales: 0,
    marketingBonuses: 0,
    cfo: false
}

const useStyles = makeStyles({
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
})

export default BulkCalc
