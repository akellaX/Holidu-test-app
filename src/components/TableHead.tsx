import React from "react";
import { TableRow, RowType } from "./TableRow";
import { TableHead as MaterialTableHead } from "@mui/material";
import { TableInstance } from "react-table";
import { TableColumnsType } from "../types";

type TableHeadType = {
    tableInstance: TableInstance<TableColumnsType>
}

export const TableHead = ({ tableInstance }: TableHeadType) => {
    const { headerGroups } = tableInstance;
    return (
        <MaterialTableHead>
            {headerGroups.map((headerGroup, i) => (
                <TableRow key={i} element={headerGroup} type={RowType.HEADER}/>
            ))}
        </MaterialTableHead>
    )
}
