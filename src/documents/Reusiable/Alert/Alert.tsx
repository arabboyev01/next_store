import {Box} from "@mui/system";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from "react";
import style from "./alert.style"
const AlertComponent = () => {
    const classes = style()
    return (
        <Box className={classes.alert}>
            <Stack spacing={2}>
                <Alert iconMapping={{success: <CheckCircleOutlineIcon fontSize="inherit" style={{ color:" #fff"}}/>,}} style={{ background: "#22BB33", color:" #fff"}}>
                    Mahsulot Savatchaga muvaffaqiyatlik qo&apos;shildi.
                </Alert>
            </Stack>
        </Box>
    )
}
export default AlertComponent;
