import style from './category.style'
import { useMediaQuery } from '@mui/material';
import { useCallback, useEffect, useState, useMemo } from 'react'
import { apiAddress } from '../../../config'
import axios from 'axios'
import Dumb from './Dumb'
import { useRouter } from 'next/router'

const CategoryComponent = () => {
    const classes = style();
    const query = useMediaQuery('@media(max-width: 650px)');
    const router = useRouter()
    const {id} = router.query
    const [categoryData, setMainData] = useState<any>([])
    const [productId, setProductId] = useState(null);
    const [getFilteredData, setFilteredData] = useState([])
    const productsID = productId === null ? categoryData[0]?.id : productId

    const getDataByCategory = useCallback(() => {
        const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
        const config = {headers: {Authorization: `Bearer ${token}`}};
        axios.get(`${apiAddress}/category?parentId=${id}`, config).then((data) => {
            setMainData(data.data)
        }).catch(err => console.log(err))
    }, [id,])

    useEffect(() => {
        getDataByCategory();
    }, [getDataByCategory])

    useEffect(() => {
        const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
        const config = {headers: {Authorization: `Bearer ${token}`}};
        axios.get(`${apiAddress}/product?categoryId=${productsID}`, config).then((data) => {
            setFilteredData(data.data.content)
        }).catch(err => console.log(err))
    }, [productsID])

    return (
        <Dumb
            classes={classes}
            query={query}
            categoryData={categoryData}
            setProductId={setProductId}
            getFilteredData={getFilteredData}
            productsID={productsID}
        />
    )
}
export default CategoryComponent;
