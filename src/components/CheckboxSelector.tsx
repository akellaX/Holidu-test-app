import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, FormLabel } from "@mui/material";

type CheckboxSelectorType = {
    items: string[],
    label: string,
    selected: string[],
    onChange: (s: string[]) => void,
}

export const CheckboxSelector= ({items, label, selected, onChange}: CheckboxSelectorType) => {
    const list = items.map(item => (<FormControlLabel key={item} control={<Checkbox />} label={item} />))

    return (
        <div>
            <FormLabel>{label}</FormLabel>
            <FormGroup>
                {list}
            </FormGroup>
        </div>
    )
}
