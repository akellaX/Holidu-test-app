import React from "react";
import { TableBody as MaterialTableBody } from "@mui/material";
import { TableRow, RowType } from "./TableRow";
import { TableInstance } from "react-table";
import { TableColumnsType } from "../types";

type BodyType = {
    tableInstance: TableInstance<TableColumnsType>
}

export const TableBody = ({tableInstance}: BodyType) => {
    const {
        getTableBodyProps,
        rows,
        prepareRow,
    } = tableInstance;

    return (
        <MaterialTableBody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row);
                return (
                    <TableRow element={row} type={RowType.ROW} />
                );
            })}
        </MaterialTableBody>
    )
}
