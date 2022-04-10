import React from 'react'
import { Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const buttonStyle = {
    color: '#000',
    background: '#fff'
}

export const FilterButton = ({ handleOpen }: { handleOpen: () => void }) => (
    <Button
        onClick={handleOpen}
        style={buttonStyle}
        className="filter-button"
        variant="contained"
        startIcon={
            <FilterListIcon style={{ color: '#000' }}/>
        }>
        Filter
    </Button>
)
