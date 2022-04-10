import React from "react";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { TableCell as MaterialTableCell } from "@mui/material";
import { Cell, HeaderGroup } from "react-table";
import { TableColumnsType } from "../types";
import { StatusCell } from "./StatusCell";
import { PaymentCell } from "./PaymentCell";

export const enum CellType {
    HEADER = 'Header',
    CELL = 'Cell',
}


type CellProps = {
    element: HeaderGroup<TableColumnsType> | Cell<TableColumnsType>,
    type: CellType,
}

export const TableCell = ({ element, type }: CellProps) => {
    const StyledTableCell = styled(MaterialTableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.common.black,
            fontWeight: 'bold',
        },
        [`&.${tableCellClasses.body}`]: {
            border: 0,
            borderTop: '1px solid #f2f2f2',
            fontSize: 14,
        },
    }));

    // TODO поправить типы
    const props = type === CellType.CELL ? (element as any).getCellProps() : (element as any).getHeaderProps();
    if (type === CellType.CELL) {
        const cell = element as Cell<TableColumnsType>;
        if (cell.column.id === 'status') {
            return (
                <StyledTableCell {...props}>
                    <StatusCell status={cell.value}>
                        {element.render(type)}
                    </StatusCell>
                </StyledTableCell>
            )
        }
        if (cell.column.id === 'paymentModes') {
            return (
                <StyledTableCell {...props}>
                    <PaymentCell payments={cell.value}/>
                </StyledTableCell>
            )
        }
    }

    return (
        <StyledTableCell {...props}>
            {element.render(type)}
        </StyledTableCell>
    )
};
