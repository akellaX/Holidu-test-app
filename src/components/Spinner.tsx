import React from "react";
import { CircularProgress, Grid } from "@mui/material";

export const Spinner = () => (
    <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="100vh"
    >
        <CircularProgress/>
    </Grid>
)
