import Style from "./productdetail.style"
import {Box} from "@mui/system";
import React from "react";
import {Button, Typography} from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {ProductDetailType} from "../../../../../types/types";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import {setAddItemToCart} from "../../../../redux/CartSlice";
import { useDispatch } from "react-redux";

const ProductDetail:React.FC<ProductDetailType> = ({handleOpen, data}) => {
    const classes = Style();
    const dispatch = useDispatch();
    const onAddToCart = (data: any) => {
        dispatch(setAddItemToCart(data));
    };
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
            <Box className={classes.boxPrice}>
                <Box className={classes.priceInfo}>
                    <Typography className={classes.text1}>Muddatlik to&apos;lov</Typography>
                    <Typography className={classes.text2}> 12 oyga</Typography>
                    <Typography className={classes.price1}>{data.price} so&apos;m</Typography>
                </Box>
                <Box className={classes.arrow} onClick={handleOpen}>
                    <KeyboardArrowRightIcon />
                </Box>
            </Box>
            <Box className={classes.btnWrapper}>
                <PrimaryButton text='Hozir sotib olish'/>
                <Button className={classes.add} onClick={() => onAddToCart(data)}>Savatchaga otish</Button>
            </Box>
        </Box>
    )
}

export default ProductDetail;
