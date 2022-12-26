import Style from "./productdetail.style"
import {Box} from "@mui/system";
import React from "react";
import {Button, Typography} from "@mui/material";

export type ProductDetail = {
    current?: any,
    addToCart?: any
}
const ProductDetail: React.FC<ProductDetail> = ({current, addToCart}) => {
    const classes = Style();
    return(
        <Box className={classes.detailWrapper}>
            <Typography className={classes.mainTitle}>{current.title}</Typography>
            <Typography className={classes.text}>Rangi</Typography>
            <Box className={classes.colorBox}>
                {current.color.map((item: any) =>
                    <Box className={classes.box} style={{backgroundColor: item.digit}} key={item.digit}></Box>
                )}
            </Box>
            <Typography className={classes.price}>{current.price} / dona</Typography>
            <Button className={classes.add} onClick={() => addToCart(current.id)}>Savatga Otish</Button>
        </Box>
    )
}

export default ProductDetail;
