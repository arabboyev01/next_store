import {Box} from "@mui/system";
import Styles from "./cart.style"
import {Typography} from "@mui/material";
import CartProduct from "../../documents/Reusiable/Cart/CartProduct/CartProduct";
import CartSummary from "../../documents/Reusiable/Cart/CartSummary/CartSummary";
import React from "react";

export type CartComponentType = {
    totalQTY?:  any
}

const CartComponent: React.FC<CartComponentType> = ({ totalQTY }) => {
    const classes = Styles();

    return (
        <Box className={classes.cartWrapper}>
            <Typography className={classes.ordinaryText}>Savatchangizda: <span className={classes.span}>{totalQTY} ta mahsulot bor</span></Typography>
            <Box className={classes.contentWrapper}>
                <CartProduct />
                <CartSummary/>
            </Box>
        </Box>
    )
}
export default CartComponent
