import React from "react";
import { Grid } from "@mui/material";
import { PaymentMethodsType } from "../../types"
import { paymentsMap } from "./constants";

export const PaymentCell = ({ payments }: { payments: PaymentMethodsType[] }) => {

    const list = payments.sort().map(el => {
        const Icon = paymentsMap[el].icon;
        return (
            <Grid alignContent="center" direction="row" container key={el}>
                <Icon data-testid={''} style={{paddingBottom: '4px'}} />
                <Grid item>{paymentsMap[el].name}</Grid>
            </Grid>
        )
    })

    return (
        <Grid alignContent="center" container direction="column">
            {list}
        </Grid>
    )
}
