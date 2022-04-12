import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Filter } from "./index";

describe('Filter', () => {
    test('Open modal', () => {
        render(<Filter filterSetter={jest.fn()} />)

        const openModalButton = screen.getByTestId('open-filter-button');
        fireEvent.click(openModalButton);

        const modal = screen.getByTestId('modal');
        expect(modal).toBeInTheDocument();
    });

})
