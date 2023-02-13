import { Box } from '@mui/system';
import Styles from './singleproduct.style'
import React, { useCallback, useEffect, useState } from 'react';
import ProductDetail from './ProductDetail/ProductDetail';
import { useMediaQuery } from '@mui/material';
import PaymentTerm from '../Modal/PaymentTerm/PaymentTerm';
import { useSelector } from 'react-redux';
import { selectSingleItem } from '../../../redux/CartSlice';
import { useRouter } from 'next/router'
import MainLoader from '../MainLoader/MainLoader';
import Suggested from '../Suggested/Suggested';
import ProductDescription from '../SingleProduct/ProductDescription/ProductDescription'
import MainCarousel from '../MainCarousel/MainCarousel'
import { SuggestedDataCarousel } from '../../DumbData/DumbData'
import MainCart from '../MainCart/MainCart'

const SingleProduct = () => {
    const classes = Styles();
    const singleProduct = useSelector(selectSingleItem);
    const data = singleProduct[singleProduct.length]
    const query = useMediaQuery('@media(max-width: 650px)');
    const [open, setOpen] = useState(false);
    const [filtered, setFiltered] = useState(data);
    const {mainData} = useSelector((state: any) => state.cart);
    const router = useRouter()
    const {id} = router.query
    const handleOpen = () => setOpen(true);
    const handleCLose = () => setOpen(false);
    const secondData = mainData[mainData.length - 1]
    const secondSlice = secondData === undefined ? undefined : secondData.content.slice(0, 5)

    const fetchSingleData = useCallback(() => {
        const fetchData = mainData[mainData.length - 1]?.content?.find((item: any) => item.id == id)
        setFiltered(fetchData)
    }, [id, mainData]);

    useEffect(() => {
        fetchSingleData()
    }, [fetchSingleData]);


    return (
        <Box className={classes.singleProducts}>
            {!filtered ?
                <Box className={classes.loader}>
                    <MainLoader/>
                </Box>
                :
                <>
                    <PaymentTerm open={open} handleCLose={handleCLose} price={filtered.price}/>
                    <Box className={classes.productHeader}>
                        <Box className={classes.imageWrapper}>
                            <img src={`https://nextstore.in/nextstore${filtered.photoUrl}`} alt="product_image"
                                 width={query ? 226 : 350}
                                 height={query ? 216 : 350} className={classes.image}/>
                        </Box>
                        <Box>
                            <ProductDetail handleOpen={handleOpen} data={filtered}/>
                        </Box>
                    </Box>
                </>
            }
            <ProductDescription/>
            <Suggested/>
            <Box className={classes.suggested}>
                <MainCart mainData={secondSlice} carousel="carousel"/>
            </Box>
            <Box className={classes.carousel}>
                <MainCarousel data={SuggestedDataCarousel} height={query ? 433 : 320} bgColor="#FFE9BD" color="#000"
                              sticky buttonText="Batafsil"/>
            </Box>
        </Box>
    )
}
export default SingleProduct;
