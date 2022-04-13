import React, { useEffect, useState } from 'react';
import './App.css';
import { Table } from './components/Table';
import { CircularProgress, CssBaseline, Grid, Typography } from "@mui/material";
import { theme } from "./utils/theme";
import { Filter } from "./components/Filter";
import { FiltersType, HeaderType, TableResponseType } from "./types";
import { filterDataByArray, filterDataByString } from "./utils/filterData";
import { useData } from "./hooks/useData";
import { Spinner } from "./components/Spinner";


function App() {
    const [filters, setFilters] = useState<FiltersType>({
        byName: '',
        byStatus: '',
        byPayments: [],
    })
    const [filterData, setFilterData] = useState<TableResponseType>([]);
    const [columns, setColumns] = useState<HeaderType>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const data = useData();

    useEffect(() => {
        if (!data) {
            return;
        }
        setColumns(data.header);
        setFilterData(data.body);
        setIsLoaded(true)
    }, [data])

    useEffect(() => {
        if (!data) {
            return;
        }
        const {byName, byStatus, byPayments} = filters;
        let newData;
        newData = filterDataByString(data.body, 'name', byName);
        newData = filterDataByString(newData, 'status', byStatus);
        if (byPayments.length > 0) {
            newData = filterDataByArray(newData, 'paymentModes', byPayments);
        }
        setFilterData(newData);
    }, [filters, data])

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
                            <Filter setFilters={setFilters}/>
                        </Grid>
                    </Grid>
                    <Grid>
                        {isLoaded ? <Table data={filterData} columns={columns}/> : <Spinner/>}
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );
}

export default App;
