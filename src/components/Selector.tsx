import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type SelectorType = {
    label: string,
    items: string[],
    selected: string,
    onChange: (s: string) => void,
}

export const Selector = ({label, items, onChange, selected}: SelectorType) => {
    const list = items.map(item => (<MenuItem key={item} value={item}>{item}</MenuItem>))

    return (
        <FormControl fullWidth>
            <InputLabel id="simple-select-label">Age</InputLabel>
            <Select
                labelId="select-label"
                id="simple-select"
                value={selected}
                label={label}
                onChange={(e => onChange(e.target.value))}
            >
                {list}
            </Select>
        </FormControl>
    )
}
