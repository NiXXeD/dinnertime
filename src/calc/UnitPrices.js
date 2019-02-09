import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'

function UnitPrices({className, onChange, value}) {
    return (
        <FormControl className={className}>
            <InputLabel htmlFor="unitPrice">Unit Price</InputLabel>
            <Select
                value={value}
                onChange={onChange}
                input={<Input id="unitPrice"/>}
                MenuProps={{
                    MenuListProps: {
                        style: {
                            maxHeight: 256
                        }
                    }
                }}
            >
                {[...new Array(26)].map((v, i) => i - 5).map(unitPrice =>
                    <MenuItem key={unitPrice} value={unitPrice}>{`$${unitPrice}`}</MenuItem>)
                }
            </Select>
        </FormControl>
    )
}

export default UnitPrices
