import React from 'react';
import { render, screen } from '@testing-library/react';
import { PaymentCell } from "./index";
import { PaymentMethodsType } from "../../types";
import { paymentsMap } from "./constants";

describe('PaymentCell', () => {
    const payments = ['CREDIT_CARD', 'BANK_TRANSFER', 'PAYPAL'];

    test.each(payments)('Render only one payment: ', (payment) => {
        render(
            <PaymentCell payments={[payment] as PaymentMethodsType[]}/>
        )
        const cell = screen.getByText(paymentsMap[payment].name);
        const notExistingElements = payments.filter(el => el !== payment)

        expect(cell).toBeInTheDocument();
        notExistingElements.forEach(el => {
            const notExistingElement = screen.queryByText(paymentsMap[el].name);
            expect(notExistingElement).not.toBeInTheDocument();
        })
    })

    test('Render all payments', () => {
        render(
            <PaymentCell payments={payments as PaymentMethodsType[]}/>
        )

        payments.forEach(payment => {
            const cell = screen.getByText(paymentsMap[payment].name);
            expect(cell).toBeInTheDocument();
        })
    })
})
