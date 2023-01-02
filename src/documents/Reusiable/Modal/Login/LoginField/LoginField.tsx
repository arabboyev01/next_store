import {Box} from "@mui/system";
import Style from "./field.style"
import * as Yup from 'yup'
import { makeValidate } from 'mui-rff'
import { Form } from 'react-final-form'
import {CssTextField} from "../CssTextField/CssTextField";
import {LOGIN_FORM_VALUES} from "../config.login";
import CloseIcon from "@mui/icons-material/Close";
import React, {useState} from "react";
import {Typography} from "@mui/material";
import SubmitButton from "../../../SubmitButton/SubmitButton";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const schema = Yup.object().shape({
    number: Yup.string().required(`${LOGIN_FORM_VALUES.number.label} is a required field.`),
    password: Yup.string().required(`${LOGIN_FORM_VALUES.password.label} is a required field.`),
});
const validate = makeValidate(schema);

export type LoginFieldType = {
    handleClose?: (e: any) => void
}
const LoginField: React.FC<LoginFieldType> = ({handleClose}) => {
    const classes = Style();
    const [open, setOpen] = useState(false);
    const handleOpenForget = () => setOpen(true)
    const handleCloseForget = () => setOpen(false)

    const [visible, setVisible] = useState(false)
    const handleVisible = () => setVisible(!visible)
    return(
        <Box className={classes.fieldWrapper}>
            <CloseIcon className={classes.closeIcon} onClick={handleClose}/>
            <Typography className={classes.title}>Telefon raqam orqali kirish</Typography>
            <Form
                onSubmit={() => console.log('hi')}
                validate={validate}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit} noValidate style={{width: '100%'}}>
                        <Box className={classes.itemsContainer}>
                            <Box className={classes.fieldContainer}>
                                <CssTextField {...LOGIN_FORM_VALUES.number} placeholder='Tel Raqam' type="text"/>
                            </Box>
                            <Box className={classes.fieldContainer}>
                                <label className={classes.seePassword} onClick={handleVisible}>
                                    {visible ? <VisibilityOffIcon className={classes.icon} /> : <VisibilityIcon className={classes.icon} />}
                                </label>
                                <CssTextField {...LOGIN_FORM_VALUES.password} placeholder='Parol' type={visible ? 'text' : 'password'}/>
                            </Box>
                            <Box className={classes.submit}>
                                <SubmitButton loading={false} buttonText='Kirish'/>
                            </Box>
                        </Box>
                    </form>
                )}
            />
            <Typography className={classes.forgot} onClick={handleOpenForget}>Parolni unutdingizmi ?</Typography>
            <ForgotPassword handleCloseForget={handleCloseForget} open={open}/>
        </Box>
    )
}
export default LoginField;
