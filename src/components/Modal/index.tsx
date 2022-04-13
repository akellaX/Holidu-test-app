import React, { useState } from 'react';
import {
    Box,
    Button, Grid,
    Modal as MaterialModal,
    TextField
} from "@mui/material";
import { Selector } from "../Selector";
import { CheckboxSelector } from "../CheckboxSelector";
import { FiltersType, PaymentMethodsType } from "../../types";
import { styled } from "@mui/material/styles";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const selectorStatuses  = ['-', 'New', 'Live', 'Offline'];
const paymentMethods: PaymentMethodsType[] = ['CREDIT_CARD', 'BANK_TRANSFER', 'PAYPAL'];

export const Modal = ({ open, handleClose, setFilters }: {
    open: boolean,
    handleClose: () => void,
    setFilters: (filter: FiltersType) => void,
}) => {
    const [name, setName] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [payments, setPayments] = useState<string[]>([]);

    const StyledGrid = styled(Grid)(() => ({
        paddingBottom: '10px',
    }));

    const acceptFilter = () => {
        setFilters({
            byName: name,
            byStatus: status,
            byPayments: payments
        })
        handleClose();
    }

    const clearFilters = () => {
        setName('');
        setStatus('');
        setPayments([]);
    }

    return (
        <MaterialModal
            data-testid="modal"
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                    <TextField
                        sx={{paddingBottom: '10px'}}
                        onChange={e => setName(e.target.value)}
                        data-testid="filter-by-name"
                        label="Search by Name"
                        variant="outlined"
                        value={name}
                    />
                <StyledGrid item>
                    <Selector
                        label={'Status'}
                        selected={status}
                        items={selectorStatuses}
                        onChange={setStatus}
                    />
                </StyledGrid>
                <StyledGrid item>
                    <CheckboxSelector
                        selected={payments}
                        onChange={setPayments}
                        label={'Payment Methods'}
                        items={paymentMethods}
                    />
                </StyledGrid>
                <Grid
                    sx={{paddingTop: '10px'}}
                    container
                    direction="row"
                    justifyContent="space-between"
                >
                    <Button onClick={() => acceptFilter()} data-testid="accept-filter" variant="contained">Filter</Button>
                    <Button onClick={() => clearFilters()} variant="outlined">Clear Filters</Button>
                </Grid>
            </Box>
        </MaterialModal>
    )

}
