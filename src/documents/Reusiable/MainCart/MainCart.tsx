import Styles from "./maincart.style"
import {Box} from "@mui/system";
import React, {useState} from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from "next/image";
import {Typography, useMediaQuery} from "@mui/material";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {connect} from "react-redux";
import {loadCurrentItem, addToCart} from "../../../redux/shop/shoppingAction";
import Link from "next/link";
import AlertComponent from "../Alert/Alert";

export type MainCartType = {
    mainData?: any,
    addToCart: any
    loadCurrentItem: any
}
const MainCart: React.FC<MainCartType> = ({mainData, addToCart, loadCurrentItem}) => {
    const classes = Styles();
    const query = useMediaQuery('@media(max-width: 650px)')
    const [alert, setAlert] = useState(false);
    const handleSetCart = (e: any) => {
        addToCart(e);
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 2000)
    }
    return (
        <Box className={classes.mainCartWrapper}>
            {alert ? <AlertComponent /> : null}
            {mainData.map((item: any) =>
                <Box className={classes.mainCart} key={item.id}>
                    <FavoriteBorderIcon className={classes.favoriteIcon}/>
                    <Box onClick={() => loadCurrentItem(item)}>
                        <Link href='/single-product' style={{textDecoration: 'none', color: "#000"}}>
                            {item.status === 'sale' ?
                                <Typography className={classes.sale}>Top Sale</Typography> : item.status === 'new' ?
                                    <Typography className={classes.new}>Yangilik</Typography> : null}
                            <Image src={item.img} alt='image' width={query ? 120 : 180} height={query ? 120 : 180}
                                   className={classes.mainImage}/>
                            <Typography className={classes.price}>{item.price}</Typography>
                            <Typography className={classes.title}>{item.title}</Typography>
                            <Typography className={classes.order}>{item.order} ta buyurtma</Typography>
                        </Link>
                    </Box>
                    <Box className={classes.footer}>
                        <PrimaryButton text="Sotib olish"/>
                        <ShoppingCartIcon className={classes.shoppingCart} onClick={() => handleSetCart(item.id)}/>
                    </Box>
                </Box>
            )}
        </Box>
    )
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addToCart: (id: any) => dispatch(addToCart(id)),
        loadCurrentItem: (item: any) => dispatch(loadCurrentItem(item)),
    };
};
export default connect(null, mapDispatchToProps)(MainCart);
