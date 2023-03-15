import Style from './catalog.style'
import { Box } from '@mui/system'
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { apiAddress } from '../../../../../config'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { setSearchValue } from '../../../../redux/CartSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import CatalogDumb from './CatalogDumb'

const MobileCatalog = ({categoryMain, handleSetCategory}: any) => {
    const classes = Style()
    const [categoryParent, setCategory] = React.useState([])
    const [brand, setBrand] = React.useState([])
    const [first, setFirst] = React.useState(false);
    const [parentId, setParentId] = useState<null | number>(0)
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const router = useRouter()
    const handleSendData = (data: any,) => {
        dispatch(setSearchValue(data));
        router.push({pathname: '/search'})
    }

    useEffect(() => {
        axios.get(`${apiAddress}/category?parentId=0`).then(data => {
            setCategory(data.data)
        }).catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`${apiAddress}/category?parentId=${parentId}`).then(data => {
            setBrand(data.data)
        }).catch(err => console.log(err?.response?.status))
    }, [parentId])

    useEffect(() => {
        axios.get(`${apiAddress}/product`).then(data => {
            setProducts(data.data.content)
        }).catch(err => console.log(err?.response?.status))
    }, [])

    const handleChangeParent = (id: any) => {
        setParentId(id)
    }

    const handleChangeDirection = () => {
        setFirst(!first)
    }

    return (
        <Box className={!categoryMain ? classes.catalogNot : classes.catalogWrapper}>
            <Typography className={classes.title}>Katalog</Typography>
            <CloseIcon className={classes.closeIcon} onClick={handleSetCategory}/>
            {first ?
                (<Box className={classes.goBack} onClick={handleChangeDirection}>
                    <ArrowBackIosIcon style={{color: '#000', fontSize: '16px'}}/>
                </Box>) : null
            }

            {first ?
                products.map(({id, name}: any) =>
                    <Box className={classes.dividedMenu} key={id} onClick={() => handleSendData(name)}>
                        <Typography className={classes.chapters}>{name.substring(0,20)}</Typography>
                        <KeyboardArrowRightIcon style={{color: '#000'}}/>
                    </Box>) :
                <CatalogDumb
                    categoryParent={categoryParent}
                    brand={brand}
                    handleChangeParent={handleChangeParent}
                    handleChangeDirection={handleChangeDirection}
                    classes={classes}
                />
            }
        </Box>
    )
}
export default MobileCatalog;

