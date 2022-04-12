import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from "./index";
import { prepareTableData } from "../../utils/prepareTableData";
import { paymentsMap } from "../PaymentCell/constants";

describe('Table', () => {
    const data = prepareTableData([{
        "id": "1",
        "name": "Company 1",
        "status": "LIVE",
        "paymentModes": ["BANK_TRANSFER"]
    }, {
        "id": "2",
        "name": "Company 2",
        "status": "NEW",
        "paymentModes": ["CREDIT_CARD", "PAYPAL"]
    }])
    test('Render table with data and header', () => {
        render(<Table data={data.body} columns={data.header}/>)

        data.header.forEach((header) => {
            expect(screen.getByText(header.Header)).toBeInTheDocument();
        })

        data.body.forEach((cell) => {
            expect(screen.getByText(cell.name)).toBeInTheDocument();
            expect(screen.getByText(cell.status)).toBeInTheDocument();
            cell.paymentModes.forEach((payment) => {
                expect(screen.getByText(paymentsMap[payment].name)).toBeInTheDocument();
            })
        })
    });

})
