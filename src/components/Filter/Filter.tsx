import React, { useEffect, useRef, useState } from 'react'
import style from './filters.style'
import axios from 'axios'
import { apiAddress } from '../../../config'
import { quantity } from './utilty'
import { useMediaQuery } from '@mui/material'
import Dumb from './Dumb';
import { useSelector } from 'react-redux'
import { FilterPrice, handleFilteringData } from './Utility'

const FilterComponent = () => {
    const classes = style();
    const query = useMediaQuery('@media(max-width: 600px)')
    const {mainData} = useSelector((state: any) => state.cart);
    // ---mainData---
    const [filtered, setFiltered] = useState([]);
    const quantityData = quantity(filtered);
    const [category, setCategory] = useState([])
    const filteringData = useRef(filtered);
    useEffect(() => {
        filteringData.current = mainData[mainData?.length - 1]?.content
    })

    // ---filters data---
    const [value, setValue] = useState<number[]>([0, 50000000]);
    const [brand, setBrands] = useState<string>('all')
    const [purchaseType, setPurchaseType] = useState<string>('')
    const [condition, setCondition] = useState<string>('')

    // ---paginate numbers---
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const [installment, setInstallment] = useState<any>('')
    const [discount, setDiscount] = useState<any>('')
    const [debt, setDebt] = useState<any>('')
    const [credit, setCredit] = useState<any>('')
    const [delivery, setDelivery] = useState<any>('');

    const handlePaginateData = (number: any) => {
        setCurrentPage(number)
        window.scrollTo({top: query ? 1000 : 0, behavior: 'smooth'});
    }
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    useEffect(() => {
        handleFilteringData({purchaseType, setInstallment, setDiscount, condition, setDebt, setCredit, setDelivery})
    }, [purchaseType, condition])

    useEffect(() => {
        const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
        axios.get(
            `${apiAddress}/product?page=0&size=100&sort&price,desc&${installment && 'payInstallments=true'}${discount && '&discounted=true'}${credit && '&takeCredit=true'}${debt && '&debt=true'}${delivery && '&deliver=true'}`,
            {headers: {Authorization: `Bearer ${token}`}})
            .then((data) => setFiltered(data.data.content))

    }, [purchaseType, condition, installment, discount, credit, debt, delivery]);

    useEffect(() => {
        const filtering = filteringData?.current?.filter(({name}: any) => name.toLowerCase().includes(brand.toLowerCase()))
        brand === 'all' ? setFiltered(filteringData?.current) : setFiltered(filtering)
    }, [brand])

    useEffect(() => {
        axios.get(`${apiAddress}/category?parentId=0`).then(data => {
            setCategory(data.data)
        }).catch(err => console.log(err))
    }, [])

    useEffect(() => {
        FilterPrice(filteringData?.current, value[0], value[1], setFiltered)
    }, [value])

    return (
        <Dumb
            classes={classes}
            value={value}
            indexOfLastPost={indexOfLastPost}
            indexOfFirstPost={indexOfFirstPost}
            quantityData={quantityData}
            handlePaginateData={handlePaginateData}
            handleChange={handleChange}
            setPurchaseType={setPurchaseType}
            setBrands={setBrands}
            setCondition={setCondition}
            filtered={filtered}
            category={category}
            brand={brand}
        />
    )
}
export default FilterComponent;