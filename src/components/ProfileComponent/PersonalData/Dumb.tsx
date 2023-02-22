import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'
import { CssTextField } from '../../../documents/Reusiable/Modal/Login/CssTextField/CssTextField'
import { PERSONAL_DATA } from './config'
import { Form } from 'react-final-form'
import React from 'react'
import PrimaryButton from '../../../documents/Reusiable/PrimaryButton/PrimaryButton'
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Dumb = ({classes, uploadNewPersonalData, ResendSmsCode, countDown, success}: any) => (
    <Box className={classes.mainWrapper}>

        {success ? (<Box className={classes.success}>
            Sizning ma&apos;lumotlarinigz o&apos;zgartirildi
               <CheckBoxIcon style={{color: 'fff', fontSize: '25px',}}/>
         </Box>) : (<Typography className={classes.title}>Shaxsiy ma&apos;lumotlar</Typography>)
        }

        <Form
            onSubmit={uploadNewPersonalData}
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
                            {countDown ?
                                <Button className={classes.button}
                                        style={{color: 'green'}}
                                >yuborildi {' '} <CheckBoxIcon style={{color: 'green'}}/> </Button>
                                :
                                <Button className={classes.button} onClick={ResendSmsCode}>SMS kodni yuborish</Button>
                            }
                        </Box>
                    </Box>
                    <Box className={classes.saveButton}>
                        <PrimaryButton text="O'zgarishlarni saqlash"/>
                    </Box>

                </form>
            )}
        />
    </Box>
)
export default Dumb;
