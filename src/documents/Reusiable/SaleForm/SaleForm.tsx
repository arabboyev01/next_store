import {Box} from "@mui/system";
import style from "./sale.style"
import {CssSelectField, CssTextField} from "../Modal/Login/CssTextField/CssTextField";
import {SALES_FORM} from "./form.config";
import {Form} from "react-final-form";
import React from "react";
import * as Yup from "yup";
import {makeValidate} from "mui-rff";
import {MenuItem, Typography} from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const schema = Yup.object().shape({
    name: Yup.string().required(`${SALES_FORM.name.label} kirgazing`),
    number: Yup.string().required(`${SALES_FORM.number.label} kirgazing`),
    passport: Yup.string().required(`${SALES_FORM.passport.label} kirgazing`),
    areas: Yup.string().required(`${SALES_FORM.areas.label} kirgazing`),
});
const validate = makeValidate(schema);

export type SaleFormType = {
    handleForm: any
}
const SaleForm : React.FC <SaleFormType> = (handleForm) => {
    const classes = style();
    return (
        <Box className={classes.saleWrapper}>
            <Box className={classes.header}>
                <Box onClick={handleForm.handleForm}><KeyboardArrowLeftIcon className={classes.leftIcon}/></Box>
                <Typography className={classes.headerTitle}>Ma’lumotlarni to‘ldiring</Typography>
            </Box>
            <Form
                onSubmit={() => console.log('hi')}
                validate={validate}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit} noValidate style={{width: '100%'}}>
                        <Box className={classes.forms}>
                            <Box className={classes.fieldContainer}>
                                <Typography className={classes.label}>{SALES_FORM.name.text}</Typography>
                                <CssTextField {...SALES_FORM.name} placeholder="Abdulaziz To‘laganov"/>
                            </Box>
                            <Box className={classes.fieldContainer}>
                                <Typography className={classes.label}>{SALES_FORM.number.text}</Typography>
                                <CssTextField {...SALES_FORM.number} placeholder='+998 9* *** ** **'/>
                            </Box>
                            <Box className={classes.fieldContainer}>
                                <Typography className={classes.label}>{SALES_FORM.passport.text}</Typography>
                                <CssTextField {...SALES_FORM.passport} placeholder='AB123456'/>
                            </Box>
                            <Box className={classes.fieldContainer}>
                                <Typography className={classes.label}>{SALES_FORM.areas.text}</Typography>
                                <CssSelectField
                                    {...SALES_FORM.areas}
                                    placeholder='Misol: Andijon'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select">
                                    <MenuItem value='andijan'>Andijon</MenuItem>
                                </CssSelectField>
                            </Box>
                        </Box>
                        <Typography className={classes.comment}>Buyurtma uchun qisqa izoh</Typography>
                        <Box className={classes.field}>
                            <Typography className={classes.label}>{SALES_FORM.textArea.text}</Typography>
                            <TextareaAutosize
                                minRows={2}
                                aria-label="empty textarea"
                                {...SALES_FORM.textArea}
                                className={classes.textArea}
                            />
                        </Box>
                    </form>
                )}
            />
        </Box>
    )
}
export default SaleForm
