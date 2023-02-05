import { Box } from '@mui/system'
import React from 'react'
import style from "./sidebar.style"
import user from "../../../public/assets/images/user.png"
import Image from 'next/image'
import { Typography } from '@mui/material'
import jwt_decode from "jwt-decode";
import { PROFILE_LINK_DATA } from '../../documents/DumbData/DumbData'
import Links from './Links'
import { PROFILE_LINK_DATA_TYPE } from '../../../types/types'

const ProfileSidebar = () => {
    const classes = style()
    const token = window.localStorage.getItem('tokenKey')
    // @ts-ignore
    const decoded: unknown | any = jwt_decode(token)

    return (
        <Box className={classes.sidebar}>
            <Box className={classes.header}>
                <Image src={user.src} alt='user' width={108} height={108}/>
                <Typography className={classes.names}>{ decoded.fullName}</Typography>
            </Box>
            <Box className={classes.links}>
                {PROFILE_LINK_DATA.map(({id, name, icon }: PROFILE_LINK_DATA_TYPE) => {
                    return <Links id={id} name={name} icon={icon} key={id}/>
                })}
            </Box>
        </Box>
    )
}

export default ProfileSidebar