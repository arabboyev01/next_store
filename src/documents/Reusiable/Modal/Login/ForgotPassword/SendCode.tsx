import {Box} from "@mui/system";
import Style from "../LoginField/field.style"
import * as Yup from 'yup'
import { makeValidate } from 'mui-rff'
import { Form } from 'react-final-form'
import {CssTextField} from "../CssTextField/CssTextField";
import {SEND_CODE_FORM} from "../config.login";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import {Typography} from "@mui/material";
import SubmitButton from "../../../SubmitButton/SubmitButton";

const schema = Yup.object().shape({
    number: Yup.string().required(`${SEND_CODE_FORM.number.label} is a required field.`),
});
const validate = makeValidate(schema);

export type LoginFieldType = {
    handleCloseForget?: (e: any) => void
    onClick?: (e: any) => void
}
const SendCode: React.FC<LoginFieldType> = ({handleCloseForget, onClick}) => {
    const classes = Style();
    return(
        <Box className={classes.fieldWrapper}>
            <CloseIcon className={classes.closeIcon} onClick={handleCloseForget}/>
            <Typography className={classes.title}>Telefon raqamini kiriting</Typography>
            <Form
                onSubmit={() => console.log('hi')}
                validate={validate}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit} noValidate style={{width: '100%'}}>
                        <Box className={classes.itemsContainer}>
                            <Box className={classes.fieldContainer}>
                                <CssTextField {...SEND_CODE_FORM.number} placeholder='+998 9* *** ** **' type="text"/>
                            </Box>
                            <Box className={classes.submit} onClick={onClick}>
                                <SubmitButton loading={false} buttonText='Kodni qabul qilish'/>
                            </Box>
                        </Box>
                    </form>
                )}
            />
        </Box>
    )
}
export default SendCode;
