import {Box} from "@mui/system";
import Styles from "./secondarycart.style"
import React from "react";
import Image from "next/image";
import {Typography, useMediaQuery} from "@mui/material";
export type SecondaryCartType = {
    data?: any,
}
const SecondaryCart: React.FC<SecondaryCartType> = ({data}) => {
    const classes = Styles();
    const query = useMediaQuery('@media(max-width: 650px)')
    return(
        <Box className={classes.secondaryCartWrapper}>
            {data.map((item:any) =>
                <Box className={classes.secondaryCart} key={item.id}>
                    <Image src={item.img} alt="image" width={query ? 120 : 136} height={query ? 120 : 136} className={classes.itemImage}/>
                    <Typography className={classes.text}>{item.name}</Typography>
                </Box>
            )}
        </Box>
    )
}
export default SecondaryCart;
