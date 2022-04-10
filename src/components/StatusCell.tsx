import React from 'react';
import { styled } from "@mui/material/styles";
import { StatusType } from "../types";
import { Grid } from "@mui/material";

export const StatusCell = ({status, children}: {status: StatusType, children: React.ReactNode}) => {
    const colors = {
        LIVE: {
            text: '#53c852',
            background: '#ebf9eb',
        },
        NEW: {
            text: '#f5c94d',
            background: '#fef8e8',
        },
        OFFLINE: {
            text: '#f04445',
            background: '#fdebeb',
        },
    }
    const StyledStatusCell = styled(Grid)(({ theme }) => ({
        borderCollapse: 'separate',
        color: colors[status].text,
        background: colors[status].background,
        textAlign: 'center',
        padding: '5px 15px',
        minWidth: '90px',
    }));

    return (
        <StyledStatusCell item sm={6}>{children}</StyledStatusCell>
    )
}
