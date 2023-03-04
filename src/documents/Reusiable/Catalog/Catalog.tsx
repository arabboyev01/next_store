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
    const classes = Style()
    const [categoryParent, setCategory] = useState<any>([])
    const [parentId, setParentId] = useState<null | number>(null)
    const [categoryChild, setCategoryChild] = useState([])
    const [catalogData, setCatalogData] = useState([])
    const activeParentId = parentId === null ? categoryParent[0]?.id : parentId

    useEffect(() => {
        axios.get(`${apiAddress}/category?parentId=0`).then(data => setCategory(data.data))
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        axios.get(`${apiAddress}/category?parentId=${activeParentId}`).then(data => setCategoryChild(data.data))
            .catch(err => console.log(err))
    }, [activeParentId])

    const getCatalogData = (id: any) => {
        setParentId(id)
        axios.get(`${apiAddress}/product?categoryId=${id}`).then(data => setCatalogData(data.data.content)).catch(err => console.log(err))
    }

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
                        <Typography className={activeParentId === id ? classes.activeTitle : classes.title} key={id} onClick={() => setParentId(id)}>
                            {name}
                        </Typography>
                    )}
                </Box>
                <Box className={classes.descSection}>
                    <CatalogDescription categoryChild={categoryChild} getCatalogData={getCatalogData}/>
                </Box>
            </Box>
        </Rodal>
    )
}
export default Catalog;
