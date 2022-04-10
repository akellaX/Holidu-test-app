import React, { ChangeEvent, useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, FormLabel } from "@mui/material";

type CheckboxSelectorType = {
    items: string[],
    label: string,
    selected: string[],
    onChange: (s: string[]) => void,
}

export const CheckboxSelector = ({ items, label, selected, onChange }: CheckboxSelectorType) => {
    const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            onChange([...selected, e.target.value]);
        } else {
            onChange(selected.filter(el => (el !== e.target.value)))
        }
    }
    const list = items.map(item => (
            <FormControlLabel
                key={item}
                control={<Checkbox value={item} onChange={onCheckboxChange}/>}
                label={item}/>
        )
    )
    return (
        <div>
            <FormLabel>{label}</FormLabel>
            <FormGroup>
                {list}
            </FormGroup>
        </div>
    )
}
