import style from "./category.style"
import { useMediaQuery} from "@mui/material";
import { useCallback, useEffect, useState, useMemo } from 'react'
import { apiAddress } from '../../../config'
import axios from "axios"
import Dumb from "./Dumb"
import { useSelector } from 'react-redux'
import { categoryParentId } from '../../redux/CartSlice'

const CategoryComponent = () => {
    const classes = style();
    const query = useMediaQuery('@media(max-width: 650px)');

    const [categoryData, setMainData] = useState([])
    const [categoryId, setProductId] = useState(0);
    const [getFilteredData, setFilteredData] = useState([])
    const [brands, setBrand] = useState([])
    const categoriesParentId = useSelector(categoryParentId)

    const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
    const config = {headers: {Authorization: `Bearer ${token}`}};

    const memorizedConfig = useMemo(() => config, [])
    const getDataByCategory = useCallback(() => {
        axios.get(`${apiAddress}/category?parentId=${categoriesParentId}`, memorizedConfig).then((data) => {
            setMainData(data.data)
        }).catch(err => console.log(err))
    }, [categoriesParentId, memorizedConfig])

    useEffect(() => {
        getDataByCategory()
    }, [getDataByCategory])

    useEffect(() => {
        axios.get(`${apiAddress}/product?categoryId=${categoryId}`, memorizedConfig).then((data) => {
            setFilteredData(data.data.content)
        }).catch(err => console.log(err))
    }, [categoryId, memorizedConfig])

    useEffect(() => {
        axios.get(`${apiAddress}/company`, memorizedConfig).then(res => setBrand(res.data))
            .catch(err => console.log(err))
    }, [memorizedConfig])

    return (
       <Dumb
           classes={classes}
           query={query}
           categoryData={categoryData}
           setProductId={setProductId}
           getFilteredData={getFilteredData}
       />
    )
}
export default CategoryComponent;
