import { Box } from '@mui/system'
import style from './main.style'
import { Button, Typography } from '@mui/material'
import { CssTextField } from '../../../documents/Reusiable/Modal/Login/CssTextField/CssTextField'
import { PERSONAL_DATA } from './config'
import { Form } from 'react-final-form'
import React from 'react'

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
                                <Typography className={classes.sub}>{PERSONAL_DATA.firstName.label}</Typography>
                                <CssTextField {...PERSONAL_DATA.firstName} placeholder="Ismingiz"
                                              type="text"/>
                            </Box>
                            <Box>
                                <Typography className={classes.sub}>{PERSONAL_DATA.lastName.label}</Typography>
                                <CssTextField {...PERSONAL_DATA.lastName} placeholder="Familiyangiz"/>
                            </Box>
                        </Box>
                        <Box className={classes.mainData}>
                            <Box className={classes.singleField}>
                                <Typography className={classes.sub}>{PERSONAL_DATA.email.label}</Typography>
                                <CssTextField {...PERSONAL_DATA.email} placeholder="E mailingiz"
                                              type="text"/>
                            </Box>
                        </Box>
                        <Typography className={classes.subTitle}>Parolni tangilash</Typography>
                        <Box className={classes.mainData}>
                            <Box className={classes.singleField}>
                                <Typography className={classes.sub}>{PERSONAL_DATA.new_password.label}</Typography>
                                <CssTextField {...PERSONAL_DATA.new_password} placeholder="Yangi parol"
                                              type="password"/>
                            </Box>
                            <Box className={classes.additionalBox}>
                                <Box className={classes.shortField}>
                                    <Typography className={classes.sub}>{PERSONAL_DATA.code.label}</Typography>
                                    <CssTextField {...PERSONAL_DATA.code} placeholder="Sms-code"
                                                  type="text"/>
                                </Box>
                                <Button className={classes.button}>SMS kodga so&apos;ro&apos;v</Button>
                            </Box>
                        </Box>
                    </form>
                )}
            />
        </Box>
    )
}
export default Dumb;