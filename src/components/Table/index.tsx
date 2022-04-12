import { CircularProgress, Grid, Table as MaterialTable, TableContainer } from "@mui/material";
import React from "react";
import { useTable } from "react-table";
import Paper from "@mui/material/Paper";
import { TableBody } from "../TableBody";
import { TableHead } from "../TableHead";
import { HeaderType, TableResponseType } from "../../types";
import { styled } from "@mui/material/styles";

export const Table = ({ data, columns }: {
    data: TableResponseType,
    columns: HeaderType,
}) => {

    // @ts-ignore
    const tableInstance = useTable({ columns, data });
    const { getTableProps } = tableInstance;

    const StyledTable = styled(MaterialTable)(() => ({
        borderCollapse: 'separate',
    }))

    if (data.length === 0) {
        return (
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                height="100vh"
            >
                <CircularProgress/>
            </Grid>
        )
    }

    return (
        <Grid container justifyContent="center">
            <TableContainer component={Paper}>
                <StyledTable
                    sx={{ minWidth: 650 }}
                    aria-label="simple table"
                    {...getTableProps()}
                >
                    <TableHead tableInstance={tableInstance}/>
                    <TableBody tableInstance={tableInstance}/>
                </StyledTable>
            </TableContainer>
        </Grid>

    );
};
