import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class UnitPrices extends React.Component {
    render() {
        return (
            <SelectField
                floatingLabelText="Unit Price"
                value={this.props.value}
                maxHeight={250}
                onChange={this.props.onChange}
            >
                {unitPrices}
            </SelectField>
        )
    }
}

const unitPrices = [...Array(26)].map((v, i) => i - 5)
    .map(unitPrice => <MenuItem key={unitPrice} value={unitPrice} primaryText={`$${unitPrice}`}/>)

export default UnitPrices
