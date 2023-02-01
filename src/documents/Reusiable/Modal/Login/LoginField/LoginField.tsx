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
import axios from "axios";
import {apiAddress} from "../../../../../../config";
import {LoginFieldType} from "../../../../../../types/types";
import {validateLogin} from "../../../../../redux/CartSlice";
import {useDispatch} from "react-redux";

const schema = Yup.object().shape({
    username: Yup.string().required(`${LOGIN_FORM_VALUES.username.label}. majburiy.`),
    password: Yup.string().required(`${LOGIN_FORM_VALUES.password.label} majburiy.`),
});
const validate = makeValidate(schema);

const LoginField: React.FC<LoginFieldType> = ({handleClose}) => {
    const classes = Style();
    const [open, setOpen] = useState(false);
    const handleOpenForget = () => setOpen(true)
    const handleCloseForget = () => setOpen(false)

    const [visible, setVisible] = useState(false)
    const handleVisible = () => setVisible(!visible);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const changeValidate = () => {
        // @ts-ignore
        dispatch(validateLogin(true))
        return
    }
    const login = (values: any) => {
        setLoading(true)
        axios.post(`${apiAddress}/auth/login`, {
            username: values.username,
            password: values.password
        }, {headers: {'Content-Type': 'application/json'}}).then((data) => {
            if (data?.data?.id_token) {
                console.log('here', data?.data?.id_token)
                localStorage.setItem("tokenKey", data?.data?.id_token)
                if(localStorage.getItem('tokenKey')){
                    changeValidate()
                }
            }
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false)
        })
    }

    return(
        <Box className={classes.fieldWrapper}>
            <CloseIcon className={classes.closeIcon} onClick={handleClose}/>
            <Typography className={classes.title} onClick={changeValidate}>Telefon raqam orqali kirish</Typography>
            <Form
                onSubmit={login}
                validate={validate}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit} noValidate style={{width: '100%'}}>
                        <Box className={classes.itemsContainer}>
                            <Box className={classes.fieldContainer}>
                                <CssTextField {...LOGIN_FORM_VALUES.username} placeholder='E-mailingizni kiriting' type="text"/>
                            </Box>
                            <Box className={classes.fieldContainer}>
                                <label className={classes.seePassword} onClick={handleVisible}>
                                    {visible ? <VisibilityOffIcon className={classes.icon} /> : <VisibilityIcon className={classes.icon} />}
                                </label>
                                <CssTextField {...LOGIN_FORM_VALUES.password} placeholder='Parol' type={visible ? 'text' : 'password'}/>
                            </Box>
                            <Box className={classes.submit}>
                                <SubmitButton loading={loading} buttonText='Kirish'/>
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
