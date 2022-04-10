import React from "react";
import { FilterButton } from "./FilterButton";
import { Modal } from "./Modal";
import { FilterSetters } from "../types";

type FilterType = {
    filterSetters: FilterSetters,
}

export const Filter = ({filterSetters}: FilterType) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <FilterButton handleOpen={handleOpen} />
            <Modal filterSetters={filterSetters} open={open} handleClose={handleClose} />
        </div>
    )
}
