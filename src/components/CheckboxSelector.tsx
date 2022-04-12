import React, { ChangeEvent } from "react";
import { Checkbox, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import { paymentsMap } from "./PaymentCell/constants";

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
                sx={{height: '25px'}}
                key={item}
                control={<Checkbox data-testid={`filter-by-${item}`} value={item} checked={selected.indexOf(item) > -1} onChange={onCheckboxChange}/>}
                label={paymentsMap[item].name}/>
        )
    )
    return (
        <div>
            <FormLabel sx={{
                fontSize: '16px',
                fontWeight: 'bold',
            }}>
                {label}
            </FormLabel>
            <FormGroup sx={{
                paddingTop: '10px',
            }}>
                {list}
            </FormGroup>
        </div>
    )
}
