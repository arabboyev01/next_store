import { Box } from '@mui/system';
import Login from '../../documents/Reusiable/Modal/Login/Login';
import React from 'react';

export type LoginComponentType = {
    open?: boolean
    handleClose?: (e: any) => void
}
const LoginComponent: React.FC<LoginComponentType> = ({open, handleClose}) => {
    return (
        <Box>
            <Login open={open} handleClose={handleClose} />
        </Box>
    )
}
export default LoginComponent;
