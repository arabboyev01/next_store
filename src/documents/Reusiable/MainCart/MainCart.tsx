import Styles from "./maincart.style"
import {Box} from "@mui/system";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from "next/image";
import {Typography, useMediaQuery} from "@mui/material";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link";
import { setAddItemToCart } from "../../../redux/CartSlice"
import { useDispatch } from "react-redux";

const MainCart = ({mainData}: any) => {
    const classes = Styles();
    const query = useMediaQuery('@media(max-width: 650px)')
    const dispatch = useDispatch();
    const onAddToCart = (item: any) => {
        dispatch(setAddItemToCart(item));
    };

    return (
        <Box className={classes.mainCartWrapper}>
            {mainData.map((item: any) =>
                <Box className={classes.mainCart} key={item.id}>
                    <FavoriteBorderIcon className={classes.favoriteIcon}/>
                    <Box>
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
                        <Link href='/single-product' style={{textDecoration: 'none', color: "#000"}}>
                            <PrimaryButton text="Sotib olish"/>
                        </Link>
                        <ShoppingCartIcon className={classes.shoppingCart} onClick={()=> onAddToCart(item)}/>
                    </Box>
                </Box>
            )}
        </Box>
    )
}
export default MainCart;
