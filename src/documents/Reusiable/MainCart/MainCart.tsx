import Styles from './maincart.style';
import { useMediaQuery } from '@mui/material';
import { setSingleProduct } from '../../../redux/CartSlice'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { mainDataType } from '../../../../types/types';
import axios from 'axios';
import { apiAddress } from '../../../../config';
import Dumb from './Dumb'

const MainCart: React.FC<mainDataType> = ({mainData, carousel}) => {
    const query = useMediaQuery('@media(max-width: 650px)');
    const dispatch = useDispatch();
    const router = useRouter();
    const classes = Styles();

    const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;

    const [liked, setLiked] = useState<null | number>(null)
    const handleSingleProduct = (data: any) => {
        dispatch(setSingleProduct(data));
        router.push({pathname: '/single-products', query: {id: data.id}})
    }

    const sendData = (id: number) => {
        axios.get(`${apiAddress}/favorite-product/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            console.log(res.status)
            setLiked(res.data.productId)
        }).catch(err => console.log(err))
    }

    return (
        <Dumb
            classes={classes}
            mainData={mainData}
            carousel={carousel}
            handleSingleProduct={handleSingleProduct}
            sendData={sendData}
            query={query}
            dispatch={dispatch}
            liked={liked}
        />
    )
}
export default MainCart;
