import React from 'react'
import {Card} from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox'
import FlatButton from 'material-ui/FlatButton'
import Subheader from 'material-ui/Subheader'
import TextField from 'material-ui/TextField'
import UnitPrices from './UnitPrices'

class BulkCalc extends React.Component {
    state = defaultState

    unitPriceChanged = (event, index, unitPrice) => this.setState({unitPrice})
    normalSalesChanged = (event, normalSales) => this.setState({normalSales})
    gardenSalesChanged = (event, gardenSales) => this.setState({gardenSales})
    marketingBonusesChanged = (event, marketingBonuses) => this.setState({marketingBonuses})
    cfoChanged = (event, cfo) => this.setState({cfo})
    resetClicked = () => this.setState(defaultState)

    render() {
        let {unitPrice, cfo, normalSales, gardenSales, marketingBonuses} = this.state
        let cfoMultiplier = cfo ? 1.5 : 1
        let normalProfit = normalSales * unitPrice
        let gardenProfit = gardenSales * unitPrice * 2
        let marketingProfit = (marketingBonuses * 5)
        let profit = cfoMultiplier * (normalProfit + gardenProfit + marketingProfit)

        return (
            <Card style={cardStyle}>
                <Subheader style={{paddingLeft: 0}}>Bulk Sale Calculator</Subheader>

                {/* Unit Price */}
                <UnitPrices value={this.state.unitPrice} onChange={this.unitPriceChanged}/>

                {/* Normal Sales */}
                <TextField
                    type="number"
                    floatingLabelText="Normal Sales"
                    value={this.state.normalSales}
                    onChange={this.normalSalesChanged}
                />

                {/* Garden Sales */}
                <TextField
                    type="number"
                    floatingLabelText="Garden Sales"
                    value={this.state.gardenSales}
                    onChange={this.gardenSalesChanged}
                />

                {/* Marketing Bonuses */}
                <TextField
                    type="number"
                    floatingLabelText="Marketing Bonuses"
                    value={this.state.marketingBonuses}
                    onChange={this.marketingBonusesChanged}
                />

                {/* CFO Bonus */}
                <Checkbox
                    label="CFO Bonus"
                    style={{marginTop: 8}}
                    checked={this.state.cfo}
                    onCheck={this.cfoChanged}
                />

                {/* Reset Button */}
                <FlatButton
                    style={resetButtonStyle}
                    label="Reset"
                    secondary={true}
                    onClick={this.resetClicked}
                />

                {/* Profit */}
                <div style={profitStyle}>
                    <div style={profitSubheaderStyle}>Profit</div>
                    <div style={profitDollarsStyle}>{`$${profit}`}</div>
                </div>
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

const cardStyle = {
    margin: '16px',
    padding: '16px',
    maxWidth: '290px'
}

const resetButtonStyle = {
    display: 'inline-block',
    bottom: '12px',
    left: 0
}

const profitStyle = {
    width: 'calc(100% - 100px)',
    display: 'inline-block',
    right: 0
}

const profitSubheaderStyle = {
    marginTop: '16px',
    textAlign: 'right',
    color: 'rgba(255, 255, 255, 0.54)'
}

const profitDollarsStyle = {
    fontSize: '38px',
    fontWeight: 'bold',
    color: 'darkgreen',
    textAlign: 'right'
}

export default BulkCalc
