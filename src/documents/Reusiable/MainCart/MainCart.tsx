import Styles from "./maincart.style"
import {Box} from "@mui/system";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from "next/image";
import {Typography, useMediaQuery} from "@mui/material";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {setAddItemToCart, setSingleProduct,} from "../../../redux/CartSlice"
import {useDispatch} from "react-redux";
import {useRouter} from 'next/router'
import React from 'react'
import MainLoader from "../MainLoader/MainLoader";
import {mainDataType} from "../../../../types/types";
import {commafy} from "../Suggested/global";

const MainCart: React.FC<mainDataType> = ({mainData}) => {
    const classes = Styles();
    const query = useMediaQuery('@media(max-width: 650px)')
    const dispatch = useDispatch();
    const router = useRouter()
    const handleSingleProduct = (data: any) => {
        dispatch(setSingleProduct(data));
        router.push({pathname: '/single-products', query: {id: data.id}})
    }

    return (
        <Box className={classes.mainCartWrapper}>
            {mainData === undefined ?
                <Box className={classes.loader}>
                    <MainLoader/>
                </Box> :
                 mainData.content.map((item: any) =>
                    <Box className={classes.mainCart} key={item.id}>
                        <FavoriteBorderIcon className={classes.favoriteIcon}/>
                        <Box onClick={() => handleSingleProduct(item)}>
                            {item.state === 'New' ?
                                <Typography className={classes.sale}>Yangilik</Typography> : item.status === 'New' ?
                                    <Typography className={classes.new}>Yangilik</Typography> : null}
                            <Box className={classes.imageWrapper}>
                                <Image src={item.photoUrl} alt='image' loading="lazy" width={query ? 120 : 180}
                                       height={query ? 120 : 180} className={classes.mainImage}/>
                            </Box>
                            <Typography className={classes.price}>{commafy(item.price)} so&apos;m</Typography>
                            <Typography className={classes.title}>{item.name}</Typography>
                            <Typography className={classes.order}>{item.phone}</Typography>
                        </Box>
                        <Box className={classes.footer}>
                            <Box onClick={() => router.push({pathname: '/single-products', query: {id: item.id}})}>
                                <PrimaryButton text="Sotib olish"/>
                            </Box>
                            <ShoppingCartIcon className={classes.shoppingCart}
                                              onClick={() => dispatch(setAddItemToCart(item))}/>
                        </Box>
                    </Box>
                )}
        </Box>
    )
}
export default MainCart;
