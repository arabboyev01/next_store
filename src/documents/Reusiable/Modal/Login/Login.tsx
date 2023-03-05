import { Box } from '@mui/system';
// @ts-ignore
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Typography, useMediaQuery } from '@mui/material';
import style, { LoginModalStyle } from './login.style'
import React, { useState } from 'react';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import LoginField from './LoginField/LoginField';
import Link from 'next/link';

export type LoginType = {
    open?: boolean
    handleClose?: (e: any) => void
}


const LoginModal: React.FC<LoginType> = ({open, handleClose}) => {
    const query = useMediaQuery('@media(max-width: 600px)')
    const classes = style();
    const [login, setLogin] = useState(false);
    const onClick = () => setLogin(true)
    return (
        <Box>
            <Rodal
                customStyles={LoginModalStyle}
                animation="slideDown"
                closeOnEsc={true}
                showCloseButton={false}
                visible={open}
                onClose={handleClose}
                width={query ? 350 : 466}
                height={425}
            >
                <>
                    {login ? <LoginField handleClose={handleClose}/> :
                        <Box className={classes.contentWrapper}>
                            <CloseIcon className={classes.closeIcon} onClick={handleClose}/>
                            <Typography className={classes.title}>Hisobga kirish uchun </Typography>
                            <Box className={classes.button}>
                                <PrimaryButton text="Kirish" onClick={onClick}/>
                            </Box>
                            <Typography className={classes.divider}>Yoki</Typography>
                            <Link href="sign-up" className={classes.link}>
                                <Button className={classes.signUp}>Ro&apos;yhatdan o&apos;tish</Button>
                            </Link>
                        </Box>
                    }
                </>
            </Rodal>
        </Box>
    )
}
export default LoginModal;
