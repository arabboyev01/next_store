import styles from './likes.style'
import { Box } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, Typography, useMediaQuery } from '@mui/material';
import * as React from 'react';
import StoreIcon from '@mui/icons-material/Store';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PrimaryButton from '../../documents/Reusiable/PrimaryButton/PrimaryButton';
import { setAddItemToCart } from '../../redux/CartSlice';
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react'
import axios from 'axios'
import { apiAddress } from '../../../config'
import { useState } from 'react'
import EmptyData from '../../documents/Reusiable/EmptyData/EmptyData'
import { emptyData } from '../../documents/DumbData/DumbData'
import { useRouter } from 'next/router'
import { sendData } from '../../documents/Reusiable/MainCart/Utility'
import ColorPicker from '../../documents/Reusiable/ColorPicker'

const LikesComponent = () => {
    const classes = styles();
    const dispatch = useDispatch();
    const router = useRouter()
    const query = useMediaQuery('@media(max-width: 600px)')
    const [favoriteData, setFavoriteData] = useState([])
    const [color, setColor] = useState('');

    const token = typeof window !== 'undefined' ?
        window.localStorage.getItem('tokenKey') : null;

    const onAddToCart = (data: any) => {
        dispatch(setAddItemToCart(data));
    };

    useEffect(() => {
        axios.get(`${apiAddress}/favorite-product`,  {headers: {
            Authorization: `Bearer ${token}`
            }}).then(res => {
            setFavoriteData(res.data);
        }).catch(err => console.log(err))
    }, [token,favoriteData])
    const handleDirectPage = (data: any) => {
        router.push({pathname: "/buy-now", query: {id: data.id}})
    }

    return (
        <Box className={classes.likeWrapper}>
            <Box className={classes.contentWrapper}>
                {favoriteData.length === 0 ? null : <Typography className={classes.ordinaryText}>Saralangan mahsulotlar</Typography>}
                {favoriteData.length === 0 ?
                    <Box className={classes.loader}>
                        <EmptyData data={emptyData}/>
                    </Box> :
                    favoriteData.map((item: any, index: any) =>
                        <Box className={classes.content} key={index}>
                            <FavoriteIcon className={classes.likeIcon} onClick={() => sendData(item.id, dispatch)}/>
                            <img src={`https://nextstore.in/nextstore${item.photoUrl}`} alt="image"
                                 width={query ? 180 : 236}
                                 height={query ? 180 : 236} style={{objectFit: "contain"}} />
                            <Box className={classes.mainContent}>
                                <Typography className={classes.name}>{item.name}</Typography>
                                <Typography className={classes.price}>{item.price} so&apos;m</Typography>
                                <Box className={classes.color}>
                                    {/*<Box className={classes.boxColor}></Box>*/}
                                    {/*<Typography className={classes.colorName}>Kosmik kulrang</Typography>*/}
                                    <ColorPicker setColor={setColor} color={color} dataID={item?.id}/>
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
                                <Box className={classes.button} onClick={() => handleDirectPage(item)}>
                                    <Button className={classes.buynow}>Hoziroq sotib olish</Button>
                                </Box>
                            </Box>
                            <Box className={classes.close} onClick={() => sendData(item.id, dispatch)}>
                                <CloseIcon className={classes.closeIcon}/>
                            </Box>
                        </Box>
                    )}
            </Box>
        </Box>
    )
}
export default LikesComponent
