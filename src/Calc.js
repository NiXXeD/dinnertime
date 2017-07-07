import React from 'react'
import {Card} from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import Subheader from 'material-ui/Subheader'
import MenuItem from 'material-ui/MenuItem'
import UnitPrices from './UnitPrices'

class Calc extends React.Component {
    constructor(props) {
        super(props)
        this.state = defaultState
    }

    gardenChanged = (event, garden) => this.setState({garden})
    salesChanged = (event, index, sales) => this.setState({sales})
    bonusChanged = (event, index, bonus) => this.setState({bonus})
    unitPriceChanged = (event, index, unitPrice) => this.setState({unitPrice})
    cfoChanged = (event, cfo) => this.setState({cfo})
    resetClicked = () => this.setState(defaultState)

    render() {
        let unit = this.state.unitPrice * this.state.sales
        let bonus = this.state.bonus * 5
        let garden = this.state.garden ? 2 : 1
        let cfo = this.state.cfo ? 1.5 : 1
        let profit = Math.ceil(((unit * garden) + bonus) * cfo)

        let salesError
        let bonusError
        if (!this.state.garden && this.state.sales > 3) {
            salesError = 'Items sold must be at most 3 for regular house.'
        }
        if (this.state.bonus > this.state.sales) {
            bonusError = 'Marketing bonuses must not exceed items sold.'
        }

        return (
            <Card style={cardStyle}>
                <Subheader style={{paddingLeft: 0}}>Dinnertime Calculator</Subheader>

                {/* Unit Price */}
                <UnitPrices value={this.state.unitPrice} onChange={this.unitPriceChanged}/>

                {/* Items Sold */}
                <SelectField
                    floatingLabelText="Items Sold"
                    value={this.state.sales}
                    onChange={this.salesChanged}
                    errorText={salesError}
                >
                    <MenuItem value={1} primaryText="1 item sold"/>
                    <MenuItem value={2} primaryText="2 items sold"/>
                    <MenuItem value={3} primaryText="3 items sold"/>
                    <MenuItem value={4} primaryText="4 items sold"/>
                    <MenuItem value={5} primaryText="5 items sold"/>
                </SelectField>

                {/* Bonus Sales */}
                <SelectField
                    floatingLabelText="Marketing Bonuses"
                    value={this.state.bonus}
                    onChange={this.bonusChanged}
                    errorText={bonusError}
                >
                    <MenuItem value={0} primaryText="0 bonuses"/>
                    <MenuItem value={1} primaryText="1 bonus"/>
                    <MenuItem value={2} primaryText="2 bonuses"/>
                    <MenuItem value={3} primaryText="3 bonuses"/>
                    <MenuItem value={4} primaryText="4 bonuses"/>
                    <MenuItem value={5} primaryText="5 bonuses"/>
                </SelectField>

                {/* Garden House */}
                <Checkbox
                    label="Garden House"
                    style={{marginTop: 8}}
                    checked={this.state.garden}
                    onCheck={this.gardenChanged}
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
    bonus: 0,
    cfo: false,
    garden: false,
    sales: 1,
    unitPrice: 10
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

export default Calc
