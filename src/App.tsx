import React, { useEffect, useState } from 'react';
import './App.css';
import { Table } from './components/Table';
import { CssBaseline, Grid } from "@mui/material";
import { theme } from "./utils/theme";
import { Filter } from "./components/Filter";
import axios from "axios";
import { prepareTableData } from "./utils/prepareTableData";
import { FiltersType, HeaderType, TableColumnsType, TableResponseType } from "./types";
import { filterDataByArray, filterDataByString } from "./utils/filterData";

let initialData: TableColumnsType[] = [];

function App() {
    const [filters, setFilters] = useState<FiltersType>({
        filterByName: '',
        filterByStatus: '',
        filterByPayments: [],
    })
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
                initialData = preparedData.body;
            }
        }
        getResponse();

    }, [])

    useEffect(() => {
        const { filterByName, filterByStatus, filterByPayments } = filters;
        let newData;
        newData = filterDataByString(initialData, 'name', filterByName);
        newData = filterDataByString(newData, 'status', filterByStatus);
        if (filterByPayments.length > 0) {
            newData = filterDataByArray(newData, 'paymentModes', filterByPayments);
        }
        setData(newData);
    }, [filters, setData])

    return (
        <div>
            <CssBaseline/>
            <Grid
                container
                justifyContent="center"
                bgcolor={theme.palette.grey["100"]}
            >
                <Grid
                    container
                    justifyContent="center"
                >
                    <Grid item xs={8}>
                        <Filter filterSetter={setFilters}/>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Table data={data} columns={columns}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
