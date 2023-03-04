import style from "./category.style"
import { useMediaQuery} from "@mui/material";
import { useCallback, useEffect, useState, useMemo } from 'react'
import { apiAddress } from '../../../config'
import axios from "axios"
import Dumb from "./Dumb"
import { useRouter } from 'next/router'

const CategoryComponent = () => {
    const classes = style();
    const query = useMediaQuery('@media(max-width: 650px)');
    const router = useRouter()
    const {id} = router.query

    const [categoryData, setMainData] = useState<any>([])
    const [categoryId, setProductId] = useState(categoryData[0]?.id);
    const [getFilteredData, setFilteredData] = useState([])

    const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
    const config = {headers: {Authorization: `Bearer ${token}`}};

    const memorizedConfig = useMemo(() => config, [])
    const getDataByCategory = useCallback(() => {
        axios.get(`${apiAddress}/category?parentId=${id}`, memorizedConfig).then((data) => {
            setMainData(data.data)
        }).catch(err => console.log(err))
    }, [id, memorizedConfig])

    useEffect(() => {
        getDataByCategory();
    }, [getDataByCategory])

    useEffect(() => {
        axios.get(`${apiAddress}/product?categoryId=${categoryId}`, memorizedConfig).then((data) => {
            setFilteredData(data.data.content)
        }).catch(err => console.log(err))
    }, [categoryId, memorizedConfig])

    console.log(categoryData)

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
