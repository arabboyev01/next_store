import { Box } from '@mui/system'
import { Button, Typography, useMediaQuery } from '@mui/material'
import MainLoader from '../../../documents/Reusiable/MainLoader/MainLoader'
import StoreIcon from '@mui/icons-material/Store'
import CloseIcon from '@mui/icons-material/Close'
import * as React from 'react'
import style from './likes.style'
import { useDispatch, useSelector } from 'react-redux'
import { setAddItemToCart } from '../../../redux/CartSlice'
import PrimaryButton from '../../../documents/Reusiable/PrimaryButton/PrimaryButton'
import { emptyData } from '../../../documents/DumbData/DumbData'
import EmptyData from '../../../documents/Reusiable/EmptyData/EmptyData'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiAddress } from '../../../../config'

const ProfileLikes = () => {
    const classes = style()
    const dispatch = useDispatch();
    const onAddToCart = (data: any) => {
        dispatch(setAddItemToCart(data));
    };
    const {mainData} = useSelector((state: any) => state.cart);
    const data = mainData[mainData.length - 1]

    const query = useMediaQuery('@media(max-width: 600px)')

    const [favoriteData, setFavoriteData] = useState<any>([])
    const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;

    useEffect(() => {
        axios.get(`${apiAddress}/favorite-product`, {
            headers: {
                Authorization: `Basic ${token}`
            }
        }).then(res => {
            setFavoriteData(res.data);
            console.log(res)
        }).catch(err => console.log(err))

    }, [token])

    console.log(favoriteData);

    return (
        favoriteData.length === 0 ? <EmptyData data={emptyData}/> :
            <Box className={classes.likeWrapper}>
                <Box className={classes.contentWrapper}>
                    <Typography className={classes.ordinaryText}>Sevimli mahsulotlar</Typography>
                    {data === undefined ?
                        <Box className={classes.loader}>
                            <MainLoader/>
                        </Box> :
                        favoriteData.map((item: any, index: any) =>
                            <Box className={classes.content} key={index}>
                                <img src={`https://nextstore.in/nextstore${item.photoUrl}`} alt="image"
                                     width={query ? 150 : 200} height={query ? 150 : 200}/>
                                <Box className={classes.mainContent}>
                                    <Typography className={classes.name}>{item.name}</Typography>
                                    <Typography className={classes.price}>{item.price} so&apos;m</Typography>
                                    <Box className={classes.color}>
                                        <Box className={classes.boxColor}></Box>
                                        <Typography className={classes.colorName}>Kosmik kulrang</Typography>
                                    </Box>
                                    <Typography className={classes.storeName}>
                                        <StoreIcon className={classes.icon}/>Dokon <span
                                        className={classes.span}>MacBro</span>
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
export default ProfileLikes