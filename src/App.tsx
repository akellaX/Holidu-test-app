import React from 'react';
import './App.css';
import { Table } from './components/Table';
import { CssBaseline, Grid } from "@mui/material";
import { theme } from "./utils/theme";

function App() {
    return (
        <div>
            <CssBaseline/>
            <Grid
                container
                justifyContent="center"
                bgcolor={theme.palette.grey["100"]}
            >
                <Grid item xs={8}>
                    <Table/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
