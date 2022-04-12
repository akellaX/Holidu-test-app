import React from 'react';
import { styled } from "@mui/material/styles";
import { StatusType } from "../../types";
import { Grid } from "@mui/material";
import { colors } from "./constants";

export const StatusCell = ({status, children}: {status: StatusType, children: React.ReactNode}) => {
    const StyledStatusCell = styled(Grid)(() => ({
        borderCollapse: 'separate',
        color: colors[status].text,
        background: colors[status].background,
        textAlign: 'center',
        padding: '5px 15px',
        minWidth: '90px',
        maxWidth: '120px',
    }));

    return (
        <StyledStatusCell item sm={6}>{children}</StyledStatusCell>
    )
}
