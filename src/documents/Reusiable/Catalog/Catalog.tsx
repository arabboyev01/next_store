import { Box } from '@mui/system';
// @ts-ignore
import Rodal from 'rodal';
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import 'rodal/lib/rodal.css';
import Style, { LoginModalStyle } from './catalog.style'
import axios from 'axios'
import { apiAddress } from '../../../../config'
import CatalogDescription from './CatalogDescription'
import { setSearchValue } from '../../../redux/CartSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import MainLoader from '../MainLoader/MainLoader'

export const CatalogComponent = ({catalogOpen, handleCatalogClose}: any) => {
    const classes = Style()
    const [categoryParent, setCategory] = useState<any>([])
    const [parentId, setParentId] = useState<null | number>(null)
    const [categoryChild, setCategoryChild] = useState([])
    const [catalogData, setCatalogData] = useState([])
    const activeParentId = parentId === null ? categoryParent[0]?.id : parentId

    const [singleId, setSingleId] = useState([])
    const [productId, setProductId] = useState(null)
    const productsId = productId === null ? singleId : productId
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        axios.get(`${apiAddress}/category?parentId=0`).then(data => setCategory(data.data))
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        axios.get(`${apiAddress}/category?parentId=${activeParentId}`).then(data => {
            setCategoryChild(data.data)
            setSingleId(data.data[0]?.id)
        })
            .catch(err => console.log(err?.response?.status))
    }, [activeParentId])

    useEffect(() => {
        axios.get(`${apiAddress}/product?categoryId=${productsId}`)
            .then(data => setCatalogData(data.data.content)).catch(err => console.log(err))
    }, [productsId])

    const handleSendData = (data: any,) => {
        dispatch(setSearchValue(data));
        router.push({pathname: '/search'})
    }

    return (
        <Rodal customStyles={LoginModalStyle} animation="slideDown" closeOnEsc={true}
            showCloseButton={false}
            visible={catalogOpen}
            onClose={handleCatalogClose}
        >
            <Box className={classes.mainWrapper}>
                <Box className={classes.mainSection}>
                    {categoryParent.map(({id, name}: { id: number, name: string }) =>
                        <Typography
                            className={activeParentId === id ? classes.activeTitle : classes.title}
                            key={id}
                            onClick={() => setParentId(id)}
                        >
                            {name}
                        </Typography>
                    )}
                </Box>
                <Box className={classes.descSection}>
                    <CatalogDescription categoryChild={categoryChild} getCatalogData={setProductId} productsId={productsId}/>
                </Box>
                <Box className={classes.descrField}>
                    {catalogData === undefined ? <MainLoader /> :
                    catalogData.map(({name, id}: any) =>
                        <Box key={id}>
                            <Typography onClick={() => handleSendData(name)}
                                        style={{cursor: 'pointer'}}>{name}</Typography>
                        </Box>
                    )}
                </Box>
            </Box>
        </Rodal>
    )
}