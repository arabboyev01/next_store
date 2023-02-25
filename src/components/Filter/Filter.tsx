import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import Filters from '../../documents/Reusiable/Filter/Filters'
import style from './filters.style'
import MainCart from '../../documents/Reusiable/MainCart/MainCart'
import axios from 'axios'
import { apiAddress } from '../../../config'
import PaginationComponent from './Pagination/Pagination'
import { quantity } from './utilty'

const FilterComponent = () => {
    const classes = style();
    const [data, setData] = useState([])
    const [value, setValue] = useState<number[]>([0, 1000000]);
    const [purchaseType, setPurchaseType] = useState<null | string>(null)
    const [pagination1, setPagination1] = useState(0)
    const [pagination2, setPagination2] = useState(8)

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

    const quantityData = quantity(data)
    const handlePaginateData = (target: any,number: any) => {
        console.log(target, number, pagination1, pagination2)
        // if (number > pagination1 || number > pagination2) {
            setPagination1(pagination1 + 9)
            setPagination2(pagination2 + 9)
        // }
    }
    // console.log(pagination1)
    // console.log(pagination2)

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
                <MainCart mainData={data.slice(pagination1, pagination2)}/>
                <Box className={classes.pagination}>
                    <PaginationComponent handlePaginateData={handlePaginateData} quantity={quantityData}/>
                </Box>
            </Box>
        </Box>
    )
}
export default FilterComponent