import { Table as MateriaTable, TableContainer } from "@mui/material";
import React from "react";
import { useTable } from "react-table";
import Paper from "@mui/material/Paper";
import { TableRow, RowType } from "./TableRow";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";

export const Table = () => {
    const data = React.useMemo(
        () => [
            {
                col1: "Hello",
                col2: "World",
            },
            {
                col1: "react-table",
                col2: "rocks",
            },
            {
                col1: "whatever",
                col2: "you want",
            },
        ],
        []
    );

    const columns = React.useMemo(
        () =>
            [
                {
                    Header: "Column 1",
                    accessor: "col1",
                },
                {
                    Header: "Column 2",
                    accessor: "col2",
                },
            ] as any,
        []
    );

    const tableInstance = useTable({ columns, data });

    const { getTableProps } = tableInstance;

    return (
        <TableContainer component={Paper}>
            <MateriaTable
                sx={{ minWidth: 650 }}
                aria-label="simple table"
                {...getTableProps()}
            >
                <TableHead tableInstance={tableInstance}/>
                <TableBody tableInstance={tableInstance}/>
            </MateriaTable>
        </TableContainer>
    );
};
