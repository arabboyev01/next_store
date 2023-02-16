import style from "./category.style"
import { useMediaQuery} from "@mui/material";
import { useCallback, useEffect, useState } from 'react'
import { apiAddress } from '../../../config'
import axios from "axios"
// import { useRouter } from 'next/router'
import Dumb from "./Dumb"

const CategoryComponent = () => {
    const classes = style()
    // const router = useRouter()
    // const {id} = router.query
    const query = useMediaQuery('@media(max-width: 650px)')

    const [categoryData, setMainData] = useState([])

    const getDataByCategory = useCallback(() => {
        axios.get(`${apiAddress}/category`).then((data) => {
            setMainData(data.data)
        }).catch(err => console.log(err))
    }, [])

    useEffect(() => {getDataByCategory()}, [getDataByCategory])

    return (
       <Dumb classes={classes} query={query} categoryData={categoryData}/>
    )
}
export default CategoryComponent;
