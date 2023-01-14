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


const schema = Yup.object().shape({
    firstName: Yup.string().required(`${SIGN_UP_FORM_VALUES.firstName.label} kirgazishing talab qilinadi.`),
    lastName: Yup.string().required(`${SIGN_UP_FORM_VALUES.lastName.label} kirgazishing talab qilinadi.`),
    telNumber: Yup.string().required(`${SIGN_UP_FORM_VALUES.telNumber.label} kirgazishing talab qilinadi.`),
    password1: Yup.string().required(`${SIGN_UP_FORM_VALUES.password1.label} kirgazishing talab qilinadi.`),
    password2: Yup.string().required(`${SIGN_UP_FORM_VALUES.password2.label} kirgazishing talab qilinadi.`),
});
const validate = makeValidate(schema);
const SignUpComponent = () => {
    const classes = Style();

    return (
        <Box className={classes.signUpWrapper}>
            <Typography className={classes.title}>Ro&apos;yhatdan o&apos;tish </Typography>
            <Box className={classes.contentWrapper}>
                <Form
                    onSubmit={() => console.log('hi')}
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
                                    <CssTextField {...SIGN_UP_FORM_VALUES.telNumber} placeholder='Tel Raqam'
                                                  type="text"/>
                                </Box>
                                <Box className={classes.fieldContainer}>
                                    <CssTextField {...SIGN_UP_FORM_VALUES.password1} placeholder='Parol'
                                                  type='password'/>
                                </Box>
                            </Box>
                            <Box className={classes.itemsContainer}>
                                <Box className={classes.fieldContainer}>
                                    <CssTextField {...SIGN_UP_FORM_VALUES.password2} placeholder='Parolni tasdiqlang'
                                                  type="password"/>
                                </Box>
                                <Box className={classes.submit}>
                                    <SubmitButton loading={false} buttonText='Kirish'/>
                                </Box>
                            </Box>
                        </form>
                    )}
                />
            </Box>
        </Box>
    )
}
export default SignUpComponent;
