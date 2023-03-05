import Style from './productdetail.style'
import { Box } from '@mui/system';
import React from 'react';
import { Button, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { ProductDetailType } from '../../../../../types/types';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import { setAddItemToCart, setSingleProduct } from '../../../../redux/CartSlice';
import { useDispatch } from 'react-redux';
import DeliveryService from '../../DeliveryService/DeliveryService';
import { commafy } from '../../Suggested/global';
import { useRouter } from 'next/router'

const ProductDetail: React.FC<ProductDetailType> = ({handleOpen, data, getProductColorImage, colorId}) => {
    const classes = Style();
    const dispatch = useDispatch();
    const router = useRouter();
    const onAddToCart = (data: any) => {
        dispatch(setAddItemToCart(data));
    };

    const handleSingleProduct = (data: any) => {
        dispatch(setSingleProduct(data));
        router.push({pathname: '/buy-now', query: {id: data.id}})
    }

    return (
        <Box className={classes.detailWrapper}>
            <Typography className={classes.mainTitle}>{data.name}</Typography>
            <Typography className={classes.text}>{data.description}</Typography>
            <Typography className={classes.additional}>Ranglar: </Typography>
            <Box className={classes.colorBox}>
                {data.productColorDTOS.map((item: any, index: number) =>
                    <Box
                        className={colorId === item.id ? classes.activeBox : classes.box}
                        key={index}
                        style={{backgroundColor: `${item.color}`}}
                        onClick={() => getProductColorImage(item.id)}
                    >
                    </Box>
                )}
            </Box>
            <Typography className={classes.additional}>Narxi: </Typography>
            <Typography className={classes.price}>{commafy(data.price)} so&apos;m</Typography>
            <Box className={classes.boxPrice}>
                <Box className={classes.priceInfo}>
                    <Typography className={classes.text1}>Muddatlik to&apos;lov</Typography>
                    <Typography className={classes.text2}> 12 oygacha</Typography>
                    <Typography className={classes.price1}>{commafy(data.price)}</Typography>
                </Box>
                <Box className={classes.arrow} onClick={handleOpen}>
                    <KeyboardArrowRightIcon/>
                </Box>
            </Box>
            <Box className={classes.btnWrapper}>
                <Box className={classes.buyBtn} onClick={() => handleSingleProduct(data)}>
                    <PrimaryButton text="Hozir sotib olish"/>
                </Box>
                <Button className={classes.add} onClick={() => onAddToCart(data)}>Savatchaga otish</Button>
            </Box>
            <Box className={classes.delivery}>
                <DeliveryService name={data.name}/>
            </Box>
        </Box>
    )
}

export default ProductDetail;
