import { CircularProgress, Grid, Table as MaterialTable, TableContainer } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Column, useTable } from "react-table";
import Paper from "@mui/material/Paper";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import { prepareTableData } from "../utils/prepareTableData";
import axios from "axios";
import { HeaderType, TableResponseType } from "../types";

export const Table = () => {
    const [data, setData] = useState<TableResponseType>([]);
    const [columns, setColumns] = useState<HeaderType>([]);

    useEffect(() => {
        const getResponse = async () => {
            const response = await axios.get('./data-200.json');
            // TODO обработать ошибку
            if (response.status === 200 && response.data) {
                const preparedData = prepareTableData(response.data);
                setColumns(preparedData.header);
                setData(preparedData.body);
            }
        }
        getResponse();

    }, [])

    // @ts-ignore
    const tableInstance = useTable({ columns, data });

    const { getTableProps } = tableInstance;

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
                <MaterialTable
                    sx={{ minWidth: 650 }}
                    aria-label="simple table"
                    {...getTableProps()}
                >
                    <TableHead tableInstance={tableInstance}/>
                    <TableBody tableInstance={tableInstance}/>
                </MaterialTable>
            </TableContainer>
        </Grid>

    );
};
