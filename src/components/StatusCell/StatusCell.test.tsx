import React from 'react';
import { render, screen } from '@testing-library/react';
import { StatusCell } from "./index";
import { colors } from "./constants";
import { StatusType } from "../../types";

type ColorType = {text: string, background: string};

describe('StatusCell', () => {
    const statuses = [['LIVE', colors.LIVE], ['NEW', colors.NEW], ['OFFLINE', colors.OFFLINE]];
    test.each(statuses)('Render according color: ', (status, color) => {
        render(
            <StatusCell status={status as StatusType}>{status}</StatusCell>
        )
        const cell = screen.getByText(status as string);
        expect(cell).toHaveStyle(`color: ${(color as ColorType).text}`);
        expect(cell).toHaveStyle(`background: ${(color as ColorType).background}`);
    })

})
