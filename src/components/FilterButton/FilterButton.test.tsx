import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { FilterButton } from "./index";

const handleOpenMock = jest.fn();

describe('FilterButton', () => {
    test('Handle modal', () => {
        render(<FilterButton handleOpen={handleOpenMock}/>)

        const openModalButton = screen.getByTestId('open-filter-button');
        fireEvent.click(openModalButton);

        expect(handleOpenMock).toBeCalledTimes(1)
    });

})
