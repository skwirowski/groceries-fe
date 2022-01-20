import { AccountCircle } from '@mui/icons-material';
import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { ChangeEvent } from 'react';

interface State {
    email: string;
}

interface Props {
    onEmailChange: (value: string) => void;
}
export default function InputEmail({ onEmailChange }: Props) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => onEmailChange(event.target.value);

    return (
        <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-input-email">Email</InputLabel>
            <OutlinedInput
                id="outlined-input-email"
                type="text"
                onChange={handleChange}
                endAdornment={
                    <InputAdornment position="end">
                        <AccountCircle />
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}
