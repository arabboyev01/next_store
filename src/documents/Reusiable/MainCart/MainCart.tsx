import Styles from "./maincart.style"
import {Box} from "@mui/system";
import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from "next/image";
import {Typography, useMediaQuery} from "@mui/material";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export type MainCartType = {
    data?: any,
}
const MainCart: React.FC<MainCartType> = ({data}) => {
    const classes = Styles();
    const query = useMediaQuery('@media(max-width: 650px)')
    return(
        <Box className={classes.mainCartWrapper}>
            {data.map((item: any) =>
                <Box className={classes.mainCart} key={item.id}>
                    <FavoriteBorderIcon className={classes.favoriteIcon}/>
                    <Image src={item.img} alt='image' width={query ? 120 : 180} height={query ? 120 : 180} className={classes.mainImage}/>
                    <Typography className={classes.price}>{item.price}</Typography>
                    <Typography className={classes.title}>{item.title}</Typography>
                    <Typography className={classes.order}>{item.order} ta buyurtma</Typography>
                    <Box className={classes.footer}>
                        <PrimaryButton text="Sotib olish" />
                        <ShoppingCartIcon className={classes.shoppingCart} />
                    </Box>
                </Box>
            )}
        </Box>
    )
}
export default MainCart;
