import React, { useEffect, useState } from 'react';
import './App.css';
import { Table } from './components/Table';
import { CircularProgress, CssBaseline, Grid, Typography } from "@mui/material";
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
    const [isLoaded, setIsLoaded] = useState(false);

    const renderTable = () => {
        if (!isLoaded) {
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
        if (data.length === 0) {
            return (
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    height="100vh"
                >
                    <Typography variant="h2">
                        Table is Empty
                    </Typography>
                </Grid>
            )
        }
        return  <Table data={data} columns={columns}/>
    }

    useEffect(() => {
        const getResponse = async () => {
            const response = await axios.get('./data-200.json');
            if (response.status === 200 && response.data) {
                const preparedData = prepareTableData(response.data);
                setColumns(preparedData.header);
                setData(preparedData.body);
                initialData = preparedData.body;
                setIsLoaded(true)
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
        <Grid
            container
            paddingTop="30px"
            bgcolor={theme.palette.grey["100"]}
        >
            <CssBaseline/>
            <Grid container justifyContent="center">
                <Grid item xs={10} md={8}>
                    <Grid
                        container
                        justifyContent="center"
                        paddingBottom="20px"
                    >
                        <Grid container justifyContent="space-between">
                            <Typography variant="h3">
                                Table
                            </Typography>
                            <Filter filterSetter={setFilters}/>
                        </Grid>
                    </Grid>
                    <Grid>
                        {renderTable()}
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );
}

export default App;
