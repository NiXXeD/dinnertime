import React from 'react'
import Select from 'material-ui/Select'
import {MenuItem} from 'material-ui/Menu'
import {FormControl} from 'material-ui/Form'
import Input, {InputLabel} from 'material-ui/Input'

class UnitPrices extends React.Component {
    render() {
        const {className, onChange, value} = this.props

        return (
            <FormControl className={className}>
                <InputLabel htmlFor="unitPrice">Unit Price</InputLabel>
                <Select
                    value={value}
                    onChange={onChange}
                    input={<Input id="unitPrice"/>}
                >
                    {[...new Array(26)].map((v, i) => i - 5).map(unitPrice =>
                        <MenuItem key={unitPrice} value={unitPrice}>{`$${unitPrice}`}</MenuItem>)
                    }
                </Select>
            </FormControl>
        )
    }
}

export default UnitPrices
