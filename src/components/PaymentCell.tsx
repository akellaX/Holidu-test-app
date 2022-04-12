import React, { ReactNode } from "react";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { PaypalIcon } from "../icons/PaypalIcon";
import { Grid, SvgIcon } from "@mui/material";
import { PaymentMethodsType } from "../types"

export const paymentsMap: Record<string, {
    name: string,
    icon: any
}> = {
    CREDIT_CARD: {
        name: 'Credit Card',
        icon: CreditCardIcon,
    },
    BANK_TRANSFER: {
        name: 'Bank Transfer',
        icon: AccountBalanceIcon,
    },
    PAYPAL: {
        name: 'PayPal',
        icon: PaypalIcon,
    },
}

export const PaymentCell = ({ payments }: { payments: PaymentMethodsType[] }) => {

    const list = payments.sort().map(el => {
        const Icon = paymentsMap[el].icon;
        return (
            <Grid alignContent="center" direction="row" container key={el}>
                <Icon style={{paddingBottom: '4px'}} />
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
