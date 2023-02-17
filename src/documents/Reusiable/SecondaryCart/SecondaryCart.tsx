import {Box} from "@mui/system";
import Styles from "./secondarycart.style"
import React from "react";
import {Typography, useMediaQuery} from "@mui/material";
import {useRouter} from "next/router";
import { useDispatch } from 'react-redux'
import { setCategoryId } from "../../../redux/CartSlice"

export type SecondaryCartType = {
    data?: any,
}
const SecondaryCart: React.FC<SecondaryCartType> = ({data}) => {
    const classes = Styles();
    const query = useMediaQuery('@media(max-width: 650px)')
    const router = useRouter();
    const dispatch = useDispatch();
    const HandleDataById = (item: any) => {
        router.push({pathname: '/category', query: {id: item}})
        // @ts-ignore
        dispatch(setCategoryId(item))
    }

    return(
        <Box className={classes.secondaryCartWrapper}>
            {data.map((item:any) =>
                <Box onClick={() => HandleDataById(item.id)} key={item.id}>
                    <Box className={classes.secondaryCart}>
                        <img src={`https://nextstore.in/nextstore${item.imageUrl}`} loading="lazy" alt="image" width={query ? 120 : 136} height={query ? 120 : 136} className={classes.itemImage}/>
                        <Typography className={classes.text}>{item.name}</Typography>
                    </Box>
                </Box>
            )}
        </Box>
    )
}
export default SecondaryCart;
