import React from 'react'
import { PROFILE_LINK_DATA_TYPE } from '../../../types/types'
import { Box } from '@mui/system'
import style from "./sidebar.style"
import { Typography } from '@mui/material'

const Links = ({id, name, icon, handlePage, type, isActive }: PROFILE_LINK_DATA_TYPE) => {
    const classes = style()

    return(
        // @ts-ignore
        <Box onClick={() => handlePage(type)} className={isActive === type ? classes.activeLink : classes.linksWrapper} key={id}>
            <Box className={classes.icons}>{icon}</Box>
            <Typography className={classes.linkName}>{name}</Typography>
        </Box>
    )
}

export default Links