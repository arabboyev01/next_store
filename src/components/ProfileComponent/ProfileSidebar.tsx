import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import style from "./sidebar.style"
import user from "../../../public/assets/images/user.png"
import Image from 'next/image'
import { Typography } from '@mui/material'
import jwt_decode from "jwt-decode";
import { PROFILE_LINK_DATA } from '../../documents/DumbData/DumbData'
import Links from './Links'
import { PROFILE_LINK_DATA_TYPE } from '../../../types/types'
import axios from 'axios'
import { apiAddress } from '../../../config'

export type Props = {
    handlePage: (category: any) => any
    isActive: number | null
}
const ProfileSidebar: React.FC<Props> = ({handlePage, isActive}) => {
    const classes = style()
    const token: any | string | null = window.localStorage.getItem('tokenKey')
    const decoded: unknown | any = jwt_decode(token)
    const [pd, setPd] = useState<any>([]);
    useEffect(() => {
        axios.get(`${apiAddress}/user/${decoded.sub}`)
            .then(res => setPd(res.data)).catch(err => console.log(err))
    }, [decoded])

    return (
        <Box className={classes.sidebar}>
            <Box className={classes.header} onClick={() => handlePage(null)}>
                <Image src={user.src} alt='user' width={108} height={108}/>
                <Typography className={classes.names}>{ pd?.firstName} {pd?.lastName}</Typography>
            </Box>
            <Box className={classes.links}>
                {PROFILE_LINK_DATA.map(({id, name, icon, type }: PROFILE_LINK_DATA_TYPE) =>
                     <Links id={id} name={name} icon={icon} key={id} type={type} handlePage={handlePage} isActive={isActive} />
                )}
            </Box>
        </Box>
    )
}

export default ProfileSidebar;