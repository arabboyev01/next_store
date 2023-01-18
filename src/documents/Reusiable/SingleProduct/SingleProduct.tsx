import {Box} from "@mui/system";
import Styles from "./singleproduct.style"
import React, {useCallback, useEffect, useState} from "react";
import ProductDetail from "./ProductDetail/ProductDetail";
import Image from "next/image";
import {useMediaQuery} from "@mui/material";
import PaymentTerm from "../Modal/PaymentTerm/PaymentTerm";
import {useSelector} from "react-redux";
import {selectSingleItem} from "../../../redux/CartSlice";
import {MainProducts} from "../../DumbData/DumbData";
import {useRouter} from 'next/router'
import MainLoader from "../MainLoader/MainLoader";
import axios from "axios";
import {apiAddress} from "../../../../config";

const SingleProduct = () => {
    const classes = Styles();
    const singleProduct = useSelector(selectSingleItem);
    const data = singleProduct[singleProduct.length - 1]
    const router = useRouter()
    const {id} = router.query
    const query = useMediaQuery('@media(max-width: 650px)');
    const [open, setOpen] = useState(false);
    const [filtered, setFiltered] = useState(data);
    const [mainData, setData] = useState([])

    useEffect(() => {
        axios.get(`${apiAddress}/product`).then((data) => {
            setData(data.data.content)
        }).catch(error => {
            console.log(error)
        })
    }, [apiAddress, setData])
    const handleOpen = () => setOpen(true);
    const handleCLose = () => setOpen(false);
    const fetchData = useCallback(() => {
        const fetchData = mainData.find((item: any) => item.id == id)
        setFiltered(fetchData)
    }, [id, mainData]);

    useEffect(() => {
        fetchData()
    }, [fetchData]);

    return (
        <Box className={classes.singleProducts}>
            {!filtered ?
                <Box className={classes.loader}>
                  <MainLoader />
                </Box>
                :
                <>
                    <PaymentTerm open={open} handleCLose={handleCLose} price={filtered.price}/>
                    <Box className={classes.productHeader}>
                        <Box className={classes.imageWrapper}>
                            <Image src={filtered.photoUrl} alt='product_image' width={query ? 226 : 350} height={query ? 216 : 350} className={classes.image}/>
                        </Box>
                        <Box>
                            <ProductDetail handleOpen={handleOpen} data={filtered}/>
                        </Box>
                    </Box>
                </>
            }
        </Box>
    )
}
export default SingleProduct;
