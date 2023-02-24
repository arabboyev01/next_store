import style from "./category.style"
import { useMediaQuery} from "@mui/material";
import { useCallback, useEffect, useState } from 'react'
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

    const getDataByCategory = useCallback(() => {
        axios.get(`${apiAddress}/category?parentId=${categoriesParentId}`).then((data) => {
            setMainData(data.data)
        }).catch(err => console.log(err))
    }, [categoriesParentId])

    useEffect(() => {
        getDataByCategory()
    }, [getDataByCategory])

    useEffect(() => {
        axios.get(`${apiAddress}/product?categoryId=${categoryId}`).then((data) => {
            setFilteredData(data.data.content)
        }).catch(err => console.log(err))
    }, [categoryId])

    useEffect(() => {
        axios.get(`${apiAddress}/company`).then(res => setBrand(res.data))
            .catch(err => console.log(err))
    }, [])

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
