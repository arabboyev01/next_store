import { Box } from '@mui/system'
import style from './main.style'
import { Typography } from '@mui/material'
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

                            <CssTextField {...PERSONAL_DATA.firstName} placeholder="Ismingiz"
                                          type="text"/>

                            <CssTextField {...PERSONAL_DATA.lastName} placeholder="Familiyangiz"/>
                        </Box>
                        <Box className={classes.mainData}>

                            <CssTextField {...PERSONAL_DATA.email} placeholder="Ismingiz"
                                          type="text"/>

                        </Box>

                    </form>
                )}
            />
        </Box>
    )
}
export default Dumb;