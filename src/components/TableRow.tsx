import React from "react";
import { TableCell, CellType } from "./TableCell";
import { styled } from "@mui/material/styles";
import { TableRow as MaterialRow } from "@mui/material";
import { HeaderGroup, Row } from "react-table";
import { TableColumnsType } from "../types";

export const enum RowType {
    ROW = 'Row',
    HEADER = 'Header'
}

type RowProps = {
    element: Row<TableColumnsType> | HeaderGroup<TableColumnsType>,
    type: RowType,
}

export const TableRow = ({ element, type }: RowProps) => {
    const StyledTableRow = styled(MaterialRow)(() => ({
        borderCollapse: 'separate',
    }));

    // TODO нормальная типизация
    if (type === RowType.ROW) {
        const row = element as Row<TableColumnsType>;
        return (
            <StyledTableRow {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                    return (
                        <TableCell key={i} element={cell} type={CellType.CELL}/>
                    );
                })}
            </StyledTableRow>
        )
    }

    if (type === RowType.HEADER) {
        const header = element as HeaderGroup<TableColumnsType>;
        return (
            <StyledTableRow {...header.getHeaderGroupProps()}>
                {header.headers.map((column, i) => (
                    <TableCell key={i} element={column} type={CellType.HEADER}/>
                ))}
            </StyledTableRow>
        )
    }

    return null;
}
