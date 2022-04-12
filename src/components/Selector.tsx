import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
type SelectorType = {
    label: string,
    items: string[],
    selected: string,
    onChange: (s: string) => void,
}

export const Selector = ({ label, items, onChange, selected }: SelectorType) => {
    const list = items.map(item => (<MenuItem key={item} value={item}>{item}</MenuItem>))

    return (
        <FormControl fullWidth>
            <InputLabel id="simple-select-label">{label}</InputLabel>
            <Select
                labelId="select-label"
                data-testid="filter-by-status"
                value={selected}
                label={label}
                onChange={(e => {
                        const newVal = e.target.value === '-' ? '' : e.target.value;
                        onChange(newVal)
                    }
                )}
            >
                {list}
            </Select>
        </FormControl>
    )
}
