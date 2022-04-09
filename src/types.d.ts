type TableColumnsType = {
    id: string,
    name: string,
    paymentModes: PaymentMethodsType[],
    status: StatusType
}

type HeaderObjectType = {
    Header: string,
    accessor: string,
}

export type HeaderType = HeaderObjectType[];

export type TableResponseType = TableColumnsType[];

type PaymentMethodsType = 'CREDIT_CARD' | 'BANK_TRANSFER' | 'PAYPAL';
type StatusType = 'NEW' | 'LIVE' | 'OFFLINE';

export type PreparedTableData = {
    header: HeaderType,
    body: TableResponseType,
}
