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

const SingleProduct = () => {
    const classes = Styles();
    const singleProduct = useSelector(selectSingleItem);
    const data = singleProduct[singleProduct.length - 1]
    const router = useRouter()
    const {id} = router.query
    const query = useMediaQuery('@media(max-width: 650px)');
    const [open, setOpen] = useState(false);
    const [filtered, setFiltered] = useState(data);

    const handleOpen = () => setOpen(true);
    const handleCLose = () => setOpen(false);
    const fetchData = useCallback(() => {
        const fetchData = MainProducts.find((item: any) => item.id == id)
        setFiltered(fetchData)
    }, [id]);

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
                            <Image src={filtered.img.src} alt='product_image' width={query ? 300 : 387} height={query ? 300 : 387} style={{objectFit: "contain"}}/>
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
