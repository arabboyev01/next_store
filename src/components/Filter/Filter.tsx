import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import Filters from '../../documents/Reusiable/Filter/Filters'
import style from './filters.style'
import MainCart from '../../documents/Reusiable/MainCart/MainCart'
import axios from 'axios'
import { apiAddress } from '../../../config'

const FilterComponent = () => {
    const classes = style();
    const [data, setData] = useState([])
    const [value, setValue] = useState<number[]>([0, 1000000]);

     const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    useEffect(() => {
        axios.get(`${apiAddress}/product`).then(res => {
            setData(res.data.content)
        }).catch(err => console.log(err))
    }, [])

    return (
        <Box className={classes.mainWrapper}>
            <Box className={classes.filters}>
                <Filters classes={classes} value={value} handleChange={handleChange}/>
            </Box>
            <Box className={classes.datas}>
                <MainCart mainData={data}/>
            </Box>
        </Box>
    )
}
export default FilterComponent