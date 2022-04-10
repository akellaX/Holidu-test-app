import React, { useState } from 'react';
import {
    Box,
    Button,
    Modal as MaterialModal,
    TextField
} from "@mui/material";
import { Selector } from "./Selector";
import { CheckboxSelector } from "./CheckboxSelector";
import { FilterSetters } from "../types";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

// TODO пункт для очистки фильтра
const selectorStatuses = ['', 'New', 'Live', 'Offline'];
const paymentMethods = ['Credit Card', 'Bank Transfer', 'PayPal'];

export const Modal = ({ open, handleClose, filterSetters }: {
    open: boolean,
    handleClose: () => void,
    filterSetters: FilterSetters,
}) => {
    const [name, setName] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [payments, setPayments] = useState<string[]>([]);

    const acceptFilter = () => {
        const { filterByName, filterByStatus, filterByPayments } = filterSetters;
        filterByName(name);
        filterByPayments(payments);
        filterByStatus(status);
    }

    return (
        <MaterialModal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <TextField
                    onChange={e => setName(e.target.value)}
                    id="outlined-basic"
                    label="Search by Name"
                    variant="outlined"
                    value={name}
                />
                <Selector
                    label={'Status'}
                    selected={status}
                    items={selectorStatuses}
                    onChange={setStatus}
                />
                <CheckboxSelector
                    selected={payments}
                    onChange={setPayments}
                    label={'Payment Methods'}
                    items={paymentMethods}
                />
                <Button onClick={() => acceptFilter()} variant="contained">Filter</Button>
            </Box>
        </MaterialModal>
    )

}
