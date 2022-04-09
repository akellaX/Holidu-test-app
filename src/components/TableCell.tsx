import React from "react";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { TableCell as MaterialTableCell } from "@mui/material";
import { Cell, HeaderGroup } from "react-table";
import { TableColumnsType } from "../types";

export const enum CellType {
    HEADER = 'Header',
    CELL = 'Cell',
}


type CellProps = {
    element: HeaderGroup<TableColumnsType> | Cell<TableColumnsType>,
    type: CellType,
}

export const TableCell = ({element, type}: CellProps) => {
    const StyledTableCell = styled(MaterialTableCell)(({theme}) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    // TODO поправить типы
    const props = type === CellType.CELL ? (element as any).getCellProps() : (element as any).getHeaderProps();

    return (
        <StyledTableCell {...props}>
            {element.render(type)}
        </StyledTableCell>
    )
};
