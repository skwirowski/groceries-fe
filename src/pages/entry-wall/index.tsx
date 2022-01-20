import { Box } from '@mui/material';
import Logo from 'components/logo';
import SingUp from 'pages/entry-wall/signup';
import React from 'react';

export default function EntryWall() {
    return (
        <Box>
            <Logo />
            <SingUp />
        </Box>
    )
}