import { Box } from '@mui/system'
import { Button, Typography, useMediaQuery } from '@mui/material'
import MainLoader from '../../../documents/Reusiable/MainLoader/MainLoader'
import StoreIcon from '@mui/icons-material/Store'
import CloseIcon from '@mui/icons-material/Close'
import * as React from 'react'
import style from './order.style'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { apiAddress } from '../../../../config'
import EmptyData from '../../../documents/Reusiable/EmptyData/EmptyData'
import { emptyProfile } from '../../../documents/DumbData/DumbData'


const ProfileOrders = () => {
    const classes = style()
    const {mainData} = useSelector((state: any) => state.cart);
    const data = mainData[mainData.length - 1]
    const query = useMediaQuery('@media(max-width: 600px)')
    const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
    const [orderData, setOrderData] = React.useState([])
    useEffect(() => {
        axios.get(`${apiAddress}/user-order`, {headers: {Authorization: `Bearer ${token}`}})
            .then(res => setOrderData(res.data))
            .catch((err) => console.log(err))
    }, [token])

    console.log(orderData)

    return (
        orderData.length === 0 ? <EmptyData data={emptyProfile}/> :
            <Box className={classes.likeWrapper}>
                <Box className={classes.contentWrapper}>
                    <Typography className={classes.ordinaryText}>Mening buyurtmalarim</Typography>
                    {orderData === undefined ?
                        <Box className={classes.loader}>
                            <MainLoader/>
                        </Box> :
                        orderData.map((item: any, index: any) =>
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
                                        <StoreIcon className={classes.icon}/> <span> Do&apos;kon</span> <span
                                        className={classes.span}>MacBro</span>
                                    </Typography>
                                </Box>
                                <Box className={classes.buttons}>
                                    <Box className={classes.button}>
                                        <Button className={classes.buynow}>Bekor qilingan</Button>
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
export default ProfileOrders