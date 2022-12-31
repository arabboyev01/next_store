import {Box} from "@mui/system";
import Styles from "./singleproduct.style"
import React, {useEffect, useState} from "react";
import ProductDetail from "./ProductDetail/ProductDetail";
import Image from "next/image";
import {useMediaQuery} from "@mui/material";
import mainImage from "../../../../public/assets/images/productImage.png"
import PaymentTerm from "../Modal/PaymentTerm/PaymentTerm";
import {useSelector} from "react-redux";
import {selectSingleItem} from "../../../redux/CartSlice";
const SingleProduct = () => {
    const classes = Styles();
    const query = useMediaQuery('@media(max-width: 650px)');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleCLose = () => setOpen(false);
    const singleProduct = useSelector(selectSingleItem);

    console.log(singleProduct)
    return (
        <Box className={classes.singleProducts}>
            <PaymentTerm open={open} handleCLose={handleCLose}/>
            <Box className={classes.productHeader}>
                <Box className={classes.imageWrapper}>
                    <Image src={mainImage.src} alt='product_image' width={query ? 300 : 387} height={query ? 300 : 387} style={{objectFit: "contain"}}/>
                </Box>
                <Box>
                    <ProductDetail handleOpen={handleOpen}/>
                </Box>
            </Box>
        </Box>
    )
}
export default SingleProduct;
