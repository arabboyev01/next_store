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

const Catalog = ({catalogOpen, handleCatalogClose}: any) => {
    const [categoryParent, setCategory] = useState([])
    const [parentId, setParentId] = useState<null | number>(null)
    const [categoryChild, setCategoryChild] = useState([])
    const [catalogData, setCatalogData] = useState([])
    const [brand, setBrand] = useState([])
    const classes = Style()

    useEffect(() => {
        axios.get(`${apiAddress}/category?parentId=0`).then(data => {
            setCategory(data.data)
        })
            .catch(err => console.log(err))

    }, [])
    const getChildCategory = (id: any) => {
        setParentId(id)
        axios.get(`${apiAddress}/category?parentId=${id}`).then(data => setCategoryChild(data.data)).catch(err => console.log(err))
    }

    const getCatalogData = (id: any) => {
        setParentId(id)
        axios.get(`${apiAddress}/product?categoryId=${id}`).then(data => setCatalogData(data.data.content)).catch(err => console.log(err))
    }
    useEffect(() => {
        axios.get(`${apiAddress}/company`).then(res => setBrand(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Rodal
            customStyles={LoginModalStyle}
            animation="slideDown"
            closeOnEsc={true}
            showCloseButton={false}
            visible={catalogOpen}
            onClose={handleCatalogClose}

        >
            <Box className={classes.mainWrapper}>
                <Box className={classes.mainSection}>
                    {categoryParent.map(({id, name}: { id: number, name: string }) =>
                        <Typography className={parentId === id ? classes.activeTitle : classes.title} key={id} onClick={() => getChildCategory(id)}>
                            {name}
                        </Typography>
                    )}
                </Box>
                <Box className={classes.descSection}>
                    <CatalogDescription categoryChild={brand} getCatalogData={getCatalogData}/>
                </Box>
            </Box>
        </Rodal>
    )
}
export default Catalog;
