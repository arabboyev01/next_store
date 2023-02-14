import styles from './likes.style'
import { Box } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, Typography, useMediaQuery } from '@mui/material';
import * as React from 'react';
import StoreIcon from '@mui/icons-material/Store';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PrimaryButton from '../../documents/Reusiable/PrimaryButton/PrimaryButton';
import { setAddItemToCart, validataionCode } from '../../redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import MainLoader from '../../documents/Reusiable/MainLoader/MainLoader';
import { useEffect } from 'react'
import axios from 'axios'
import { apiAddress } from '../../../config'
import { useState } from 'react'

const LikesComponent = () => {
    const classes = styles();
    const dispatch = useDispatch();
    const onAddToCart = (data: any) => {
        dispatch(setAddItemToCart(data));
    };
    const {mainData} = useSelector((state: any) => state.cart)
    const data = mainData[mainData.length - 1]
    const query = useMediaQuery('@media(max-width: 600px)')

    const [favoriteData, setFavoriteData] = useState([])
    const token = typeof window !== 'undefined' ?
        window.localStorage.getItem('tokenKey') : null;

    useEffect(() => {
        axios.get(`${apiAddress}/favorite-product`,  {headers: {
            Authorization: `Basic ${token}`
            }}).then(res => {
            setFavoriteData(res.data);
            console.log(res)
        }).catch(err => console.log(err))

    }, [token])
    console.log(favoriteData)
    return (
        <Box className={classes.likeWrapper}>
            <Box className={classes.contentWrapper}>
                <Typography className={classes.ordinaryText}>Saralangan mahsulotlar</Typography>
                {data === undefined ?
                    <Box className={classes.loader}>
                        <MainLoader/>
                    </Box> :
                    data.content.map((item: any, index: any) =>
                        <Box className={classes.content} key={index}>
                            <FavoriteIcon className={classes.likeIcon}/>
                            <img src={`https://nextstore.in/nextstore${item.photoUrl}`} alt="image"
                                 width={query ? 180 : 236}
                                 height={query ? 180 : 236}/>
                            <Box className={classes.mainContent}>
                                <Typography className={classes.name}>{item.name}</Typography>
                                <Typography className={classes.price}>{item.price} so&apos;m</Typography>
                                <Box className={classes.color}>
                                    <Box className={classes.boxColor}></Box>
                                    <Typography className={classes.colorName}>Kosmik kulrang</Typography>
                                </Box>
                                <Typography className={classes.storeName}>
                                    <StoreIcon className={classes.icon}/><span>Do&apos;kon</span> <span
                                    className={classes.span}>MacBro</span>
                                </Typography>
                                <Typography className={classes.storeName}>
                                    <DeliveryDiningIcon className={classes.icon}/>Yetkazib berish <span
                                    className={classes.span}>Bor</span>
                                    <span className={classes.span}>30 000 som</span>
                                </Typography>
                            </Box>
                            <Box className={classes.buttons}>
                                <Box className={classes.button} onClick={() => onAddToCart(item)}>
                                    <PrimaryButton text="Savatchaga otish"/>
                                </Box>
                                <Box className={classes.button}>
                                    <Button className={classes.buynow}>Hoziroq sotib olish</Button>
                                </Box>
                            </Box>
                            <Box className={classes.close}>
                                <CloseIcon className={classes.closeIcon}/>
                            </Box>
                        </Box>
                    )}
            </Box>
        </Box>
    )
}
export default LikesComponent
