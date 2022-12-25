import {Box} from "@mui/system";
import Styles from "./singleproduct.style"
import {connect} from "react-redux";
import React from "react";
import {mapStateToProps, mapDispatchToProps} from "./products.dispatch"
import {SingleProductType} from "../../../../types/types";
import ProductDetail from "./ProductDetail/ProductDetail";
import Image from "next/image";
import {useMediaQuery} from "@mui/material";

const SingleProduct: React.FC<SingleProductType> = ({current, addToCart}) => {
    const classes = Styles();
    const query = useMediaQuery('@media(max-width: 650px)')
    return (
        <Box className={classes.singleProducts}>
            <Box className={classes.productHeader}>
                <Box className={classes.imageWrapper}>
                    <Image src={current.img.src} alt='product_image' width={query ? 300 : 387} height={query ? 300 : 387} style={{objectFit: "contain"}}/>
                </Box>
                <Box>
                    <ProductDetail current={current} addToCart={addToCart}/>
                </Box>
            </Box>
        </Box>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
