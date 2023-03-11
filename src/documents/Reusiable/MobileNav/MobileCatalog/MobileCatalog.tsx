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

const MobileCatalog = ({categoryMain, handleSetCategory}: any) => {
    const classes = Style()
    const [categoryParent, setCategory] = React.useState([])
    const [brand, setBrand] = React.useState([])
    const [first, setFirst] = React.useState(false);
    const [parentId, setParentId] = useState<null | number>(0)
    const [subProduct, setSubProduct] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`${apiAddress}/category?parentId=0`).then(data => {
            setCategory(data.data)
        })
            .catch(err => console.log(err))

    }, [])

    useEffect(() => {
        axios.get(`${apiAddress}/category?parentId=${parentId}`).then(data => {
            setBrand(data.data)
            // setSingleId(data.data[0]?.id)
        })
            .catch(err => console.log(err?.response?.status))
    }, [parentId])

    useEffect(() => {
        axios.get(`${apiAddress}/product`).then(data => {
            setProducts(data.data.content)
        })
            .catch(err => console.log(err?.response?.status))
    }, [parentId])
    const handleChangeParent = (id: any) => {
        setFirst(!first)
        setParentId(id)
    }

    const handleChangeProducts = () => {
        setSubProduct(!subProduct)
    }

    const dispatch = useDispatch()
    const router = useRouter()
     const handleSendData = (data: any,) => {
        dispatch(setSearchValue(data));
        router.push({pathname: '/search'})
    }

    return (
        <Box className={!categoryMain ? classes.catalogNot : classes.catalogWrapper}>
            <Typography className={classes.title}>Katalog</Typography>
            <CloseIcon className={classes.closeIcon} onClick={handleSetCategory}/>
            {first ? <Box className={classes.goBack}><ArrowBackIosIcon style={{color: '#000', fontSize: '16px'}}
                                                                       onClick={handleChangeParent}
                /></Box>
                : null
            }
            {first ?
                !subProduct ? brand.map(({id, name}: any) =>
                    <Box className={classes.dividedMenu} key={id} onClick={handleChangeProducts}>
                        <Typography className={classes.chapters}>{name}</Typography>
                        <KeyboardArrowRightIcon style={{color: '#000'}}/>
                    </Box>
                ) : products.map(({id, name}: any) =>
                    <Box className={classes.dividedMenu} key={id} onClick={() => handleSendData(name)}>
                        <Typography className={classes.chapters}>{name}</Typography>
                        <KeyboardArrowRightIcon style={{color: '#000'}}/>
                    </Box>
                ) :
                categoryParent.map(({id, name}: any) =>
                    <Box className={classes.dividedMenu} key={id} onClick={() => handleChangeParent(id)}>
                        <Typography className={classes.chapters}>{name}</Typography>
                        <KeyboardArrowRightIcon style={{color: '#000'}}/>
                    </Box>
                )
            }
        </Box>
    )
}
export default MobileCatalog;