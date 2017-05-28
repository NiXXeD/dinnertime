import React from 'react'
import {Card} from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import Subheader from 'material-ui/Subheader'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import './Calc.css'

const minPrice = -5
const maxPrice = 20

class Calc extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            unitPrice: 10,
            garden: false,
            sales: 1,
            bonus: 0
        }
    }

    unitPriceChanged = (event, unitPrice) => {
        this.setState({
            unitPrice: +unitPrice,
            unitPriceError: (unitPrice > maxPrice || unitPrice < minPrice) &&
            `Unit Price must be between ${minPrice} and ${maxPrice}`
        })
    }

    gardenChanged = (event, garden) => {
        this.setState({
            garden,
            sales: this.state.sales > 3 ? 3 : this.state.sales,
            bonus: this.state.bonus > 3 ? 3 : this.state.bonus
        })
    }

    salesChanged = (event, index, sales) => {
        this.setState({
            sales,
            bonus: this.state.bonus > sales ? sales : this.state.bonus
        })
    }

    bonusChanged = (event, index, bonus) => this.setState({bonus})

    render() {
        let unit = this.state.unitPrice * this.state.sales
        let garden = this.state.garden ? 2 : 1
        let bonus = this.state.bonus * 5
        let profit = (unit * garden) + bonus

        return (
            <Card className="Calc">
                <Subheader style={{paddingLeft: 0}}>Dinnertime Calculator</Subheader>

                {/* Unit Price */}
                <TextField
                    floatingLabelText="Unit Price"
                    errorText={this.state.unitPriceError}
                    type="Number"
                    value={this.state.unitPrice}
                    onChange={this.unitPriceChanged}
                    min={minPrice}
                    max={maxPrice}
                />

                {/* Items Sold */}
                <SelectField
                    floatingLabelText="Items Sold"
                    value={this.state.sales}
                    onChange={this.salesChanged}
                >
                    <MenuItem value={1} primaryText="1 item sold"/>
                    <MenuItem value={2} primaryText="2 items sold"/>
                    <MenuItem value={3} primaryText="3 items sold"/>
                    {this.state.garden && <MenuItem value={4} primaryText="4 items sold"/>}
                    {this.state.garden && <MenuItem value={5} primaryText="5 items sold"/>}
                </SelectField>

                {/* Bonus Sales */}
                <SelectField
                    floatingLabelText="Marketing Bonuses"
                    value={this.state.bonus}
                    onChange={this.bonusChanged}
                >
                    <MenuItem value={0} primaryText="0 bonuses"/>
                    <MenuItem value={1} primaryText="1 bonus"/>
                    {this.state.sales > 1 && <MenuItem value={2} primaryText="2 bonuses"/>}
                    {this.state.sales > 2 && <MenuItem value={3} primaryText="3 bonuses"/>}
                    {this.state.garden && this.state.sales > 3 && <MenuItem value={4} primaryText="4 bonuses"/>}
                    {this.state.garden && this.state.sales > 4 && <MenuItem value={5} primaryText="5 bonuses"/>}
                </SelectField>

                {/* Garden House */}
                <Checkbox label="Garden House" style={{marginTop: 8}} onCheck={this.gardenChanged}/>

                {/* Profit */}
                <div className="CalcProfit">
                    <div className="subheader">Profit</div>
                    <div className="dollars">{`$${profit}`}</div>
                </div>
            </Card>
        )
    }
}

export default Calc
