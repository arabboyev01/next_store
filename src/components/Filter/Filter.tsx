import React, { useEffect, useState } from 'react'
import style from './filters.style'
import axios from 'axios'
import { apiAddress } from '../../../config'
import { quantity } from './utilty'
import { useMediaQuery } from '@mui/material'
import Dumb from './Dumb';

const FilterComponent = () => {
    const classes = style();
    const query = useMediaQuery('@media(max-width: 600px)')

    // ---mainData---
    const [data, setData] = useState([])

    // ---filters data---
    const [value, setValue] = useState<number[]>([0, 1000000]);
    const [brands, setBrands] = useState('')
    const [purchaseType, setPurchaseType] = useState<string>('')
    const [condition, setCondition] = useState(0)

    // ---paginate numbers---
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const quantityData = quantity(data);

    useEffect(() => {
        const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
        const config = {headers: {Authorization: `Bearer ${token}`}};
        axios.get(`${apiAddress}/product`, config).then(res => {
            setData(res.data.content)
        }).catch(err => console.log(err))
    }, [])

    const handlePaginateData = (number: any) => {
        setCurrentPage(number)
        window.scrollTo({top: query ? 1000 : 0, behavior: 'smooth'});
    }
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };


    const handleFilters = (inputs: any) => {
        const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
        axios.get(`${apiAddress}/product?page=0&size=100&sort&price`, {headers: {Authorization: `Bearer ${token}`}})
            .then((data) => setData(data.data.content))
    }

    return (
        <Dumb
            classes={classes}
            value={value}
            indexOfLastPost={indexOfLastPost}
            indexOfFirstPost={indexOfFirstPost}
            data={data}
            quantityData={quantityData}
            handlePaginateData={handlePaginateData}
            handleChange={handleChange}
            setPurchaseType={setPurchaseType}
            setBrands={setBrands}
            setCondition={setCondition}
            handleFilters={handleFilters}
        />
    )
}
export default FilterComponent;