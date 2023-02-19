import { Box } from '@mui/system';
import { CssSelectField, CssTextField } from '../Modal/Login/CssTextField/CssTextField';
import { SALES_FORM } from './form.config';
import { Form } from 'react-final-form';
import React from 'react';
import { MenuItem, Typography } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { validate } from './Validation'


export type SaleFormType = {
    handleForm: any
    classess: any
    handleSendData: (e: any) => void
    region: any
}
const SaleForm: React.FC<SaleFormType> = ({handleForm, classess, handleSendData, region}) => (
    <Box className={classess.saleWrapper}>
        <Box className={classess.header}>
            <Box onClick={handleForm.handleForm}><KeyboardArrowLeftIcon className={classess.leftIcon}/></Box>
            <Typography className={classess.headerTitle}>Ma’lumotlarni to‘ldiring</Typography>
        </Box>
        <Form
            onSubmit={handleSendData}
            validate={validate}
            render={({handleSubmit}) => (
                <form style={{width: '100%'}} onSubmit={handleSubmit} id="myForm">
                    <Box className={classess.forms}>
                        <Box className={classess.fieldContainer}>
                            <Typography className={classess.label}>{SALES_FORM.fullName.text}</Typography>
                            <CssTextField {...SALES_FORM.fullName} placeholder="Abdulaziz To‘laganov"/>
                        </Box>
                        <Box className={classess.fieldContainer}>
                            <Typography className={classess.label}>{SALES_FORM.number.text}</Typography>
                            <CssTextField {...SALES_FORM.number} placeholder="+998 9* *** ** **"/>
                        </Box>
                        <Box className={classess.fieldContainer}>
                            <Typography className={classess.label}>{SALES_FORM.passport.text}</Typography>
                            <CssTextField {...SALES_FORM.passport} placeholder="AB123456"/>
                        </Box>
                        <Box className={classess.fieldContainer}>
                            <Typography className={classess.label}>{SALES_FORM.areas.text}</Typography>
                            <CssSelectField
                                {...SALES_FORM.areas}
                                placeholder="Misol: Andijon"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select">
                                {region.map(({name, id}: { name: string, id: number }) =>
                                    <MenuItem value={id} key={id}>{name}</MenuItem>
                                )}
                            </CssSelectField>
                        </Box>
                    </Box>
                    <Typography className={classess.comment}>Buyurtma uchun qisqa izoh</Typography>
                    <Box className={classess.field}>
                        <Typography className={classess.label}>{SALES_FORM.textArea.text}</Typography>
                        <TextareaAutosize
                            minRows={2}
                            aria-label="empty textarea"
                            {...SALES_FORM.textArea}
                            className={classess.textArea}
                            placeholder="Misol uchun: kechki payti 18:00 gacha yetkazilsin"
                        />
                    </Box>
                </form>
            )}
        />
    </Box>
)
export default SaleForm
