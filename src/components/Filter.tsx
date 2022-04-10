import React from "react";
import { FilterButton } from "./FilterButton";
import { Modal } from "./Modal";
import { FiltersType } from "../types";

type FilterType = {
    filterSetter: (filter: FiltersType) => void,
}

export const Filter = ({ filterSetter }: FilterType) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <FilterButton handleOpen={handleOpen}/>
            <Modal filterSetter={filterSetter} open={open} handleClose={handleClose}/>
        </div>
    )
}
