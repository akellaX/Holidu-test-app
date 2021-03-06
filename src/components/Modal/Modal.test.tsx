import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from "./index";

const mockFilterSetter = jest.fn();

describe('Modal', () => {
    test('Render according color: ', () => {
        render(<Modal open={true} handleClose={jest.fn()} setFilters={mockFilterSetter} />)

        const filterByName = screen.getByTestId('filter-by-name').getElementsByTagName('input')[0];
        fireEvent.change(filterByName, {target: {value: 'Company Name'}})

        const checkboxCreditCard = screen.getByTestId('filter-by-CREDIT_CARD').getElementsByTagName('input')[0];
        fireEvent.click(checkboxCreditCard);

        const checkboxPaypal = screen.getByTestId('filter-by-PAYPAL').getElementsByTagName('input')[0];
        fireEvent.click(checkboxPaypal);

        const checkboxBankTransfer = screen.getByTestId('filter-by-BANK_TRANSFER').getElementsByTagName('input')[0];
        fireEvent.click(checkboxBankTransfer);

        const acceptButton = screen.getByTestId('accept-filter');
        fireEvent.click(acceptButton);

        expect(mockFilterSetter).toHaveBeenCalledWith({
            byName: 'Company Name',
            byStatus: '',
            byPayments: ['CREDIT_CARD', 'PAYPAL', 'BANK_TRANSFER']
        })
    })

})
