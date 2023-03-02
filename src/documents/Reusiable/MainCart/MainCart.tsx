import Styles from './maincart.style';
import { useMediaQuery } from '@mui/material';
import { setSingleProduct } from '../../../redux/CartSlice'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { mainDataType } from '../../../../types/types';
import Dumb from './Dumb'
import { sendData } from './Utility'
import { useState } from "react";

const MainCart: React.FC<mainDataType> = ({mainData, carousel}) => {
    const query = useMediaQuery('@media(max-width: 650px)');
    const dispatch = useDispatch();
    const [render, setRender] = useState(false)
    const router = useRouter();
    const classes = Styles();

    const handleSingleProduct = (data: any) => {
        dispatch(setSingleProduct(data));
        router.push({pathname: '/single-products', query: {id: data.id}})
    }
    console.log(render)
    return (
        <Dumb
            classes={classes}
            mainData={mainData}
            carousel={carousel}
            handleSingleProduct={handleSingleProduct}
            sendData={sendData}
            query={query}
            dispatch={dispatch}
            setRender={setRender}
            render={render}
        />
    )
}
export default MainCart ;
