import {Box} from "@mui/system";
import Style from "./SignUp.style"
import {Typography} from "@mui/material";
import {CssTextField} from "../../documents/Reusiable/Modal/Login/CssTextField/CssTextField";
import {SIGN_UP_FORM_VALUES} from "../../documents/Reusiable/Modal/Login/config.login";
import SubmitButton from "../../documents/Reusiable/SubmitButton/SubmitButton";
import {Form} from "react-final-form";
import React from "react";
import * as Yup from "yup";
import {makeValidate} from "mui-rff";
import {useState} from 'react'
import {signUp} from "./SignUpPost";
import SendNumber from "./SendNumber";

const schema = Yup.object().shape({
    firstname: Yup.string().required(`${SIGN_UP_FORM_VALUES.firstName.label} talab qilinadi.`),
    lastname: Yup.string().required(`${SIGN_UP_FORM_VALUES.lastName.label}talab qilinadi.`),
    email: Yup.string().required(`${SIGN_UP_FORM_VALUES.email.label} talab qilinadi.`),
    password1: Yup.string().required(`${SIGN_UP_FORM_VALUES.password1.label} talab qilinadi.`),
    password2: Yup.string().required(`${SIGN_UP_FORM_VALUES.password2.label} talab qilinadi.`),
    phone: Yup.string().required(`${SIGN_UP_FORM_VALUES.phone.label} talab qilinadi.`),
});
const validate = makeValidate(schema);
const SignUpComponent = () => {
    const classes = Style();
    const [loading, setLoading] = useState(false)
    const [validation, setValidation] = useState(false);
    const [firstUserName, setUserName] = useState('')
    const SignUp = (values: string | any) => signUp(values, setLoading, setValidation, setUserName)

    return (
        <>
            {validation ? <SendNumber username={firstUserName}/> :
                <Box className={classes.signUpWrapper}>
                    <Typography className={classes.title}>Ro&apos;yhatdan o&apos;tish </Typography>
                    <Box className={classes.contentWrapper}>
                        <Form
                            onSubmit={SignUp}
                            validate={validate}
                            render={({handleSubmit}) => (
                                <form onSubmit={handleSubmit} noValidate style={{width: '100%'}}>
                                    <Box className={classes.itemsContainer}>
                                        <Box className={classes.fieldContainer}>
                                            <CssTextField {...SIGN_UP_FORM_VALUES.firstName} placeholder='Ismingiz'
                                                          type="text"/>
                                        </Box>
                                        <Box className={classes.fieldContainer}>
                                            <CssTextField {...SIGN_UP_FORM_VALUES.lastName} placeholder='Familiyangiz'
                                                          type='text'/>
                                        </Box>
                                    </Box>
                                    <Box className={classes.itemsContainer}>
                                        <Box className={classes.fieldContainer}>
                                            <CssTextField {...SIGN_UP_FORM_VALUES.email} placeholder='E-mailingiz'
                                                          type="text"/>
                                        </Box>
                                        <Box className={classes.fieldContainer}>
                                            <CssTextField {...SIGN_UP_FORM_VALUES.phone} placeholder='+9989********'
                                                          type="text"/>
                                        </Box>
                                    </Box>
                                    <Box className={classes.itemsContainer}>
                                        <Box className={classes.fieldContainer}>
                                            <CssTextField {...SIGN_UP_FORM_VALUES.password1} placeholder='Parol'
                                                          type='password'/>
                                        </Box>
                                        <Box className={classes.fieldContainer}>
                                            <CssTextField {...SIGN_UP_FORM_VALUES.password2}
                                                          placeholder='Parolni tasdiqlang'
                                                          type="password"/>
                                        </Box>
                                    </Box>
                                    <Box className={classes.submit}>
                                        <SubmitButton loading={loading} buttonText='Kirish'/>
                                    </Box>
                                </form>
                            )}
                        />
                    </Box>
                </Box>
            }
        </>
    )
}
export default SignUpComponent;
