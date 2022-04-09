import { PreparedTableData, TableResponseType } from "../types";

export const prepareTableData = (response: TableResponseType): PreparedTableData => {
    const header = [
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Status',
            accessor: 'status',
        },
        {
            Header: 'Payment Modes',
            accessor: 'paymentModes',
        },
    ];

    return {
        header,
        body: response,
    }
}
