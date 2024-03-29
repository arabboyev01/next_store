import { Box } from '@mui/system';
import Style from '../LoginField/field.style'
import * as Yup from 'yup'
import { makeValidate } from 'mui-rff'
import { Form } from 'react-final-form'
import { CssTextField } from '../CssTextField/CssTextField';
import { SEND_CODE_FORM } from '../config.login';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { Typography } from '@mui/material';
import SubmitButton from '../../../SubmitButton/SubmitButton';

const schema = Yup.object().shape({
    approve: Yup.string().required(`${SEND_CODE_FORM.approve.label} kirgazishingiz talab qilinadi`),
});
const validate = makeValidate(schema);

export type LoginFieldType = {
    handleCloseForget?: (e: any) => void
    refresh: any
    changePassword: any
}
const SendCode: React.FC<LoginFieldType> = ({handleCloseForget, refresh, changePassword}) => {
    const classes = Style();
    return (
        <Box className={classes.fieldWrapper}>
            <CloseIcon className={classes.closeIcon} onClick={handleCloseForget}/>
            <Typography className={classes.title}>Kodni tasdiqlang</Typography>
            <Form
                onSubmit={changePassword}
                validate={validate}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit} noValidate style={{width: '100%'}}>
                        <Box className={classes.itemsContainer}>
                            <Box className={classes.fieldContainer}>
                                <CssTextField {...SEND_CODE_FORM.approve} placeholder="Bir martalik kodni kiriting"
                                              type="number"/>
                            </Box>
                            <Box className={classes.fieldContainer}>
                                <CssTextField {...SEND_CODE_FORM.new_password} placeholder="Yangi parol"
                                              type="password"/>
                            </Box>
                            <Box className={classes.fieldContainer}>
                                <CssTextField {...SEND_CODE_FORM.re_new_password} placeholder="Yangi parolni qayta kiriting"
                                              type="password"/>
                            </Box>
                            <Box className={classes.submit}>
                                <SubmitButton loading={refresh} buttonText="Kodni qabul qilish"/>
                            </Box>
                        </Box>
                    </form>
                )}
            />
        </Box>
    )
}
export default SendCode;
