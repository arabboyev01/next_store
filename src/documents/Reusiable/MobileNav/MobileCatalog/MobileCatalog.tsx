import Style from './catalog.style'
import { Box } from '@mui/system'
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import React, { useEffect } from 'react'
import axios from 'axios'
import { apiAddress } from '../../../../../config'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const MobileCatalog = ({categoryMain, handleSetCategory}: any) => {
    const classes = Style()
    const [categoryParent, setCategory] = React.useState([])
    const [brand, setBrand] = React.useState([])
    const [first, setFirst] = React.useState(false);

    useEffect(() => {
        axios.get(`${apiAddress}/category?parentId=0`).then(data => {
            setCategory(data.data)
        })
            .catch(err => console.log(err))

    }, [])
    useEffect(() => {
        axios.get(`${apiAddress}/company`).then(res => setBrand(res.data))
            .catch(err => console.log(err))
    }, [])
    const handleChangeParent = () => setFirst(!first);

    return (
        <Box className={!categoryMain ? classes.catalogNot : classes.catalogWrapper}>
            <Typography className={classes.title}>Katalog</Typography>
            <CloseIcon className={classes.closeIcon} onClick={handleSetCategory}/>
            {first ? <Box className={classes.goBack}><ArrowBackIosIcon style={{color: '#000', fontSize:"16px"}}
                onClick={handleChangeParent}
                /></Box>
                : null
            }
            {first ?
                brand.map(({id, name}: any) =>
                    <Box className={classes.dividedMenu} key={id}>
                        <Typography className={classes.chapters}>{name}</Typography>
                        <KeyboardArrowRightIcon style={{color: '#000'}}/>
                    </Box>
                ) :
                categoryParent.map(({id, name}: any) =>
                    <Box className={classes.dividedMenu} key={id} onClick={handleChangeParent}>
                        <Typography className={classes.chapters}>{name}</Typography>
                        <KeyboardArrowRightIcon style={{color: '#000'}}/>
                    </Box>
                )
            }
        </Box>
    )
}
export default MobileCatalog;