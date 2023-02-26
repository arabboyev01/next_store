import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import Filters from '../../documents/Reusiable/Filter/Filters'
import style from './filters.style'
import MainCart from '../../documents/Reusiable/MainCart/MainCart'
import axios from 'axios'
import { apiAddress } from '../../../config'
import PaginationComponent from './Pagination/Pagination'
import { quantity } from './utilty'
import { useMediaQuery } from '@mui/material'

const FilterComponent = () => {
    const classes = style();
    const [data, setData] = useState([])
    const [value, setValue] = useState<number[]>([0, 1000000]);
    const [purchaseType, setPurchaseType] = useState<null | string>(null)
    const query = useMediaQuery('@media(max-width: 600px)')
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;

    useEffect(() => {
        const config = {headers: {Authorization: `Bearer ${token}`}};
        axios.get(`${apiAddress}/product`, config).then(res => {
            setData(res.data.content)
        }).catch(err => console.log(err))
    }, [token])

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const quantityData = quantity(data)
    const handlePaginateData = (number: any) => {
        setCurrentPage(number)
        window.scrollTo({ top: query ? 1000 : 0, behavior: 'smooth' });
    }

    return (
        <Box className={classes.mainWrapper}>
            <Box className={classes.filters}>
                <Filters
                    classes={classes}
                    value={value}
                    handleChange={handleChange}
                    setPurchaseType={setPurchaseType}
                />
            </Box>
            <Box className={classes.datas}>
                <MainCart mainData={data.slice(indexOfFirstPost, indexOfLastPost)}/>
                <Box className={classes.pagination}>
                   {data.length < 7 ?
                       null : <PaginationComponent handlePaginateData={handlePaginateData} quantity={quantityData}/>}
                </Box>
            </Box>
        </Box>
    )
}
export default FilterComponent