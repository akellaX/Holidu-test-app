import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { PaypalIcon } from "../../icons/PaypalIcon";

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
