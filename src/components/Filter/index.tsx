import React, { useState } from "react";
import { FilterButton } from "../FilterButton";
import { Modal } from "../Modal";
import { FiltersType } from "../../types";
import { Grid } from "@mui/material";

type FilterType = {
    setFilters: (filter: FiltersType) => void,
}

export const Filter = ({ setFilters }: FilterType) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Grid item alignSelf="flex-end">
            <FilterButton handleOpen={handleOpen}/>
            <Modal setFilters={setFilters} open={open} handleClose={handleClose}/>
        </Grid>
    )
}
