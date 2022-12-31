import {Box} from "@mui/system";
import Styles from "./singleproduct.style"
import React, {useState} from "react";
import ProductDetail from "./ProductDetail/ProductDetail";
import Image from "next/image";
import {useMediaQuery} from "@mui/material";
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
    const data = singleProduct[singleProduct.length - 1]
    return (
        <Box className={classes.singleProducts}>
            <PaymentTerm open={open} handleCLose={handleCLose}/>
            <Box className={classes.productHeader}>
                <Box className={classes.imageWrapper}>
                    <Image src={data.img.src} alt='product_image' width={query ? 300 : 387} height={query ? 300 : 387} style={{objectFit: "contain"}}/>
                </Box>
                <Box>
                    <ProductDetail handleOpen={handleOpen} data={data}/>
                </Box>
            </Box>
        </Box>
    )
}
export default SingleProduct;
