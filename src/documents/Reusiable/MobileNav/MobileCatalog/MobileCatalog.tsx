import Style from './catalog.style'
import { Box } from '@mui/system'
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import React, { useEffect } from 'react'
import axios from 'axios'
import { apiAddress } from '../../../../../config'

const MobileCatalog = ({categoryMain, handleSetCategory}: any) => {
    const classes = Style()
    const [categoryParent, setCategory] = React.useState([])
    useEffect(() => {
        axios.get(`${apiAddress}/category?parentId=0`).then(data => {
            setCategory(data.data)
        })
            .catch(err => console.log(err))

    }, [])
    return (
        <Box className={!categoryMain ? classes.catalogNot : classes.catalogWrapper}>
            <Typography className={classes.title}>Katalog</Typography>
            <CloseIcon className={classes.closeIcon} onClick={handleSetCategory}/>
            {categoryParent.map(({id, name}: any) =>
                <Box className={classes.dividedMenu} key={id}>
                    <Typography className={classes.chapters}>{name}</Typography>
                    <KeyboardArrowRightIcon style={{color: '#000'}}/>
                </Box>
            )}
        </Box>
    )
}
export default MobileCatalog;