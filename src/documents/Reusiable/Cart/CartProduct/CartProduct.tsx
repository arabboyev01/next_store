import {Box} from "@mui/system";
import Styles from "./cart.style"
import {Typography} from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from "react-redux";
import {
    setDecreaseItemQTY,
    setIncreaseItemQTY,
    setRemoveItemFromCart,
    setGetTotals
} from "../../../../redux/CartSlice"
import {useEffect} from "react"
import DeleteModal from "../../../../components/CartComponent/Modals/Delete.Modal";
import * as React from "react";

const CartProduct = ({cartItems}: any) => {
    const classes = Styles();
    const dispatch = useDispatch();
    const onRemoveItem = (data: any) => dispatch(setRemoveItemFromCart(data))

    useEffect(() => {
        dispatch(setGetTotals())
    }, [cartItems, dispatch])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box className={classes.item}>
            {cartItems?.map((item: any, index: number) =>
                <Box key={index}>
                    <DeleteModal title={`Siz rostdan ham ushbu ${item.title} o‘chirmoqchimisiz?`} item={item}
                                 open={open} handleClose={handleClose} onRemoveItem={onRemoveItem}/>
                    <Box className={classes.cartWrapper}>
                        <img src={`https://nextstore.in/nextstore${item.photoUrl}`} alt='image' width={236} height={236}
                         style={{objectFit: "contain"}}
                        />
                        <Box className={classes.contentWrapper}>
                            <DeleteIcon className={classes.deleteIcon} onClick={handleOpen}/>
                            <Typography className={classes.name}>{item.name}</Typography>
                            <Typography className={classes.price}>{item.price}</Typography>
                            <Box className={classes.color}>
                                <Box className={classes.boxColor}></Box>
                                <Typography className={classes.colorName}>Kosmik kulrang</Typography>
                            </Box>
                            <Box className={classes.store}>
                                <Typography className={classes.storeName}>
                                    <StoreIcon className={classes.icon}/>Do&apos;kon <span
                                    className={classes.span}>MacBro</span>
                                </Typography>
                                <Box className={classes.footer}>
                                    <Typography className={classes.storeName}>
                                        <DeliveryDiningIcon className={classes.icon}/>Yetkazib berish <span
                                        className={classes.span}>Bor</span>
                                        <span className={classes.decNum}>40 000 som</span>
                                    </Typography>
                                    <Box className={classes.qtyCounter}>
                                        <button className={classes.decButton}
                                                onClick={() => dispatch(setDecreaseItemQTY(item))}>
                                            <ChevronLeftIcon className={classes.decIcon}/>
                                        </button>
                                        <Typography className={classes.qty}>{item.cartQuantity}</Typography>
                                        <button className={classes.incButton}
                                                onClick={() => dispatch(setIncreaseItemQTY(item))}>
                                            <ChevronRightIcon className={classes.incIcon}/>
                                        </button>
                                    </Box>
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
