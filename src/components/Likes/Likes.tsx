import styles from './likes.style'
import {Box} from "@mui/system";
import {MainProducts} from "../../documents/DumbData/DumbData";
import Image from "next/image";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Button, Typography, useMediaQuery} from "@mui/material";
import * as React from "react";
import StoreIcon from "@mui/icons-material/Store";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import PrimaryButton from "../../documents/Reusiable/PrimaryButton/PrimaryButton";
import {setAddItemToCart} from "../../redux/CartSlice";
import { useDispatch } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
const LikesComponent = () => {
    const classes = styles();
    const dispatch = useDispatch();
    const onAddToCart = (data: any) => {
        dispatch(setAddItemToCart(data));
    };

    const query = useMediaQuery('@media(max-width: 600px)')
    return(
        <Box className={classes.likeWrapper}>
            <Box className={classes.contentWrapper}>
                <Typography className={classes.ordinaryText} >Saralangan mahsulotlar</Typography>
                {MainProducts.map((item, index) =>
                    <Box className={classes.content} key={index}>
                        <FavoriteIcon className={classes.likeIcon}/>
                        <Image src={item.img.src} alt="image" width={query ? 180 : 236} height={query ? 180 : 236}/>
                        <Box className={classes.mainContent}>
                            <Typography className={classes.name}>{item.title}</Typography>
                            <Typography className={classes.price}>{item.price} so&apos;m</Typography>
                            <Box className={classes.color}>
                                <Box className={classes.boxColor}></Box>
                                <Typography className={classes.colorName}>Kosmik kulrang</Typography>
                            </Box>
                            <Typography className={classes.storeName}>
                                <StoreIcon className={classes.icon}/>Dokon <span
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
                                <PrimaryButton text='Savatchaga otish'/>
                            </Box>
                            <Box className={classes.button}>
                                <Button className={classes.buynow}>Hoziroq sotib olish</Button>
                            </Box>
                        </Box>
                        <Box className={classes.close}>
                            <CloseIcon className={classes.closeIcon} />
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    )

}
export default LikesComponent
