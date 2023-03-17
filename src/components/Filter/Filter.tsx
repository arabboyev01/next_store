import React, { useCallback, useEffect, useState } from 'react'
import style from './filters.style'
import axios from 'axios'
import { apiAddress } from '../../../config'
import { quantity } from './utilty'
import { useMediaQuery } from '@mui/material'
import Dumb from './Dumb';
import { useSelector } from 'react-redux'

const FilterComponent = () => {
    const classes = style();
    const query = useMediaQuery('@media(max-width: 600px)')
    const {mainData} = useSelector((state: any) => state.cart);
    // ---mainData---
    const [filtered, setFiltered] = useState([]);
    const quantityData = quantity(filtered);
    const [category, setCategory] = useState([])
    const [filteringData] = useState(mainData[mainData.length - 1]?.content)

    // ---filters data---
    const [value, setValue] = useState<number[]>([0, 1000000]);
    const [brand, setBrands] = useState<string>('hammasi')
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

    const handleFilters = useCallback(() => {
        if (purchaseType === 'Bo\'lib to\'lash') {
            setInstallment(true)
        }
        if (purchaseType === 'Chegirmali mahsulot') {
            setDiscount(true)
        }

        if (condition === 'Nasiya orqali') {
            setDebt(true)
        }
        if (condition === 'Kreditga olish') {
            setCredit(true)
        }
        if (condition === 'Yetkazib berish') {
            setDelivery(true)
        }

        const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
        axios.get(
            `${apiAddress}/product?page=0&size=100&sort&price,desc&${installment && 'payInstallments=true'}${discount && '&discounted=true'}${credit && '&takeCredit=true'}${debt && '&debt=true'}${delivery && '&deliver=true'}`,
            {headers: {Authorization: `Bearer ${token}`}})
            .then((data) => setFiltered(data.data.content))

        if (brand !== 'all') {
            const filtering = filteringData?.filter(({name}: any) => name.toLowerCase().includes(brand.toLowerCase()))
            setFiltered(filtering)
        }
        if(brand === 'all'){
            return filtered
        }
    },  [filtered, filteringData, purchaseType, condition, installment, discount, credit, debt, delivery, brand])

    useEffect(() => {
        handleFilters()
    }, [handleFilters]);

    useEffect(() => {
        axios.get(`${apiAddress}/category?parentId=0`).then(data => {
            setCategory(data.data)
        }).catch(err => console.log(err))
    }, [])

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