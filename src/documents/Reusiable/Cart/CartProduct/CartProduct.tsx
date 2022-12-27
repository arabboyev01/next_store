import {Box} from "@mui/system";
import Styles from "./cart.style"
import Image from "next/image";
import {Typography} from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemFromCart, selectCartItems, setGetTotals } from "../../../../redux/CartSlice"
import {useEffect} from "react"
const CartProduct = () => {
    const classes = Styles();
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const onRemoveItem = (data: any) => {
        dispatch(setRemoveItemFromCart(data))
    }

    const onIncreaseItemQTY = (data: any) => {
        dispatch(setIncreaseItemQTY( data ))
    }
    const onDecreaseItemQTY = (data: any) => {
        dispatch(setDecreaseItemQTY(data))
    }
    useEffect(() => {
        // @ts-ignore
        dispatch(setGetTotals())
    },[cartItems, dispatch])

    return (
        <Box className={classes.item}>
            {cartItems.map((item: any, index: number) =>
                <Box className={classes.cartWrapper} key={index}>
                    <Image src={item.img.src} alt='image' width={236} height={236}/>
                    <Box className={classes.contentWrapper}>
                        <DeleteIcon className={classes.deleteIcon} onClick={() => onRemoveItem(item)}/>
                        <Typography className={classes.name}>{item.title}</Typography>
                        <Typography className={classes.price}>{item.price}</Typography>
                        <Box className={classes.color}>
                            <Box className={classes.boxColor}></Box>
                            <Typography className={classes.colorName}>Kosmik kulrang</Typography>
                        </Box>
                        <Box className={classes.store}>
                            <Typography className={classes.storeName}>
                                <StoreIcon className={classes.icon}/>Dokon <span className={classes.span}>MacBro</span>
                            </Typography>
                            <Box className={classes.footer}>
                                <Typography className={classes.storeName}>
                                    <DeliveryDiningIcon className={classes.icon}/>Yetkazib berish <span
                                    className={classes.span}>Bor</span>
                                    <span className={classes.decNum}>30 000 som</span>
                                </Typography>
                                <Box className={classes.qtyCounter}>
                                    <button className={classes.decButton} onClick={() => onDecreaseItemQTY(item)}>
                                        <ChevronLeftIcon className={classes.decIcon}/>
                                    </button>
                                    <Typography className={classes.qty}>{item.cartQuantity}</Typography>
                                    <button className={classes.incButton} onClick={() => onIncreaseItemQTY(item)}>
                                        <ChevronRightIcon className={classes.incIcon}/>
                                    </button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    )
}
export default CartProduct;
