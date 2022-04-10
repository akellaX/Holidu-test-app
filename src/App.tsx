import React, { useEffect, useState } from 'react';
import './App.css';
import { Table } from './components/Table';
import { CssBaseline, Grid } from "@mui/material";
import { theme } from "./utils/theme";
import { Filter } from "./components/Filter";

function App() {
    const [filterByName, setFilterByName] = useState<string>('');
    const [filterByStatus, setFilterByStatus] = useState<string>('');
    const [filterByPayments, setFilterByPayments] = useState<string[]>([]);

    const filtersSetters = {
        filterByName: setFilterByName,
        filterByStatus: setFilterByStatus,
        filterByPayments: setFilterByPayments,
    }

    useEffect(() =>{
        console.log('name', filterByName);
        console.log('status', filterByStatus);
        console.log('payments', filterByPayments);
    }, [filterByPayments, filterByName, filterByStatus])

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
                        <Filter filterSetters={filtersSetters}/>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Table/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
