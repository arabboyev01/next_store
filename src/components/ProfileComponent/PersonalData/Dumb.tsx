import { Box } from '@mui/system'
import style from './main.style'
import { Button, Typography } from '@mui/material'
import { CssTextField } from '../../../documents/Reusiable/Modal/Login/CssTextField/CssTextField'
import { PERSONAL_DATA } from './config'
import { Form } from 'react-final-form'
import React from 'react'
import PrimaryButton from '../../../documents/Reusiable/PrimaryButton/PrimaryButton'

const Dumb = ({validate}: any) => {
    const classes = style();

    return (
        <Box className={classes.mainWrapper}>
            <Typography className={classes.title}>Shaxsiy ma&apos;lumotlar</Typography>
            <Form
                onSubmit={() => console.log('Hello')}
                validate={validate}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit} noValidate style={{width: '100%'}}>
                        <Box className={classes.mainData}>
                            <Box>
                                <Typography className={classes.sub}>{PERSONAL_DATA.firstName.header}</Typography>
                                <CssTextField {...PERSONAL_DATA.firstName} placeholder="Ismingiz"
                                              type="text"/>
                            </Box>
                            <Box>
                                <Typography className={classes.sub}>{PERSONAL_DATA.lastName.header}</Typography>
                                <CssTextField {...PERSONAL_DATA.lastName} placeholder="Familiyangiz"/>
                            </Box>
                        </Box>
                        <Box className={classes.mainData}>
                            <Box className={classes.singleField}>
                                <Typography className={classes.sub}>{PERSONAL_DATA.email.header}</Typography>
                                <CssTextField {...PERSONAL_DATA.email} placeholder="*****@gmail.com"
                                              type="text"/>
                            </Box>
                        </Box>
                        <Typography className={classes.subTitle}>Parolni yangilash</Typography>
                        <Box className={classes.mainData}>
                            <Box className={classes.singleField}>
                                <Typography className={classes.sub}>{PERSONAL_DATA.new_password.header}</Typography>
                                <CssTextField {...PERSONAL_DATA.new_password} placeholder="Yangi parol"
                                              type="password"/>
                            </Box>
                            <Box className={classes.additionalBox}>
                                <Box className={classes.shortField}>
                                    <Typography className={classes.sub}>{PERSONAL_DATA.code.header}</Typography>
                                    <CssTextField {...PERSONAL_DATA.code} placeholder="Sms-code"
                                                  type="text"/>
                                </Box>
                                <Button className={classes.button}>SMS kodni yuborish</Button>
                            </Box>
                        </Box>
                    </form>
                )}
            />
            <Box className={classes.saveButton}>
                <PrimaryButton text="O'zgarishlarni saqlash"/>
            </Box>
        </Box>
    )
}
export default Dumb;