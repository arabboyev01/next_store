import Style from "./productdetail.style"
import {Box} from "@mui/system";
import React from "react";
import {Button, Typography} from "@mui/material";

export type ProductDetailType = {
    handleOpen?: (e: any) => void
    data?: any
}
const ProductDetail:React.FC<ProductDetailType> = ({handleOpen, data}) => {
    const classes = Style();
    return (
        <Box className={classes.detailWrapper}>
            <Typography className={classes.mainTitle}>{data.title}</Typography>
            <Typography className={classes.text}>Rangi</Typography>
            <Box className={classes.colorBox}>
                {data.color.map((item: any, index: number) =>
                    <Box className={classes.box} key={index} style={{backgroundColor: `${item.digit}`}}></Box>
                )}
            </Box>
            <Typography className={classes.price}>{data.price} / dona</Typography>
            <Button className={classes.add} onClick={handleOpen}>Savatga Otish</Button>
        </Box>
    )
}

export default ProductDetail;
