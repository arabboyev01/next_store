import {Box} from "@mui/system";
import Styles from "./singleproduct.style"
import React from "react";
import ProductDetail from "./ProductDetail/ProductDetail";
import Image from "next/image";
import {useMediaQuery} from "@mui/material";
import mainImage from "../../../../public/assets/images/productImage.png"
const SingleProduct = () => {
    const classes = Styles();
    const query = useMediaQuery('@media(max-width: 650px)');

    return (
        <Box className={classes.singleProducts}>
            <Box className={classes.productHeader}>
                <Box className={classes.imageWrapper}>
                    <Image src={mainImage.src} alt='product_image' width={query ? 300 : 387} height={query ? 300 : 387} style={{objectFit: "contain"}}/>
                </Box>
                <Box>
                    <ProductDetail />
                </Box>
            </Box>
        </Box>
    )
}
export default SingleProduct;
