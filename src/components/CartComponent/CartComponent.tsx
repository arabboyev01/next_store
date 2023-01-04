import {Box} from "@mui/system";
import Styles from "./cart.style"
import {Typography} from "@mui/material";
import CartProduct from "../../documents/Reusiable/Cart/CartProduct/CartProduct";
import CartSummary from "../../documents/Reusiable/Cart/CartSummary/CartSummary";
import {useSelector} from "react-redux";
import {selectTotalQTY} from "../../redux/CartSlice";
import {useState} from "react"
import SaleForm from "../../documents/Reusiable/SaleForm/SaleForm";
const CartComponent = () => {
    const classes = Styles();
    const totalQTY = useSelector(selectTotalQTY);
    const [cart, setCart] =  useState(false);
    const handleForm = () => setCart(!cart)
    return (
        <Box className={classes.cartWrapper}>
            {cart ?
                <Typography className={classes.ordinaryText} >Buyurtmani rasmiylashtirish</Typography> :
                <Typography className={classes.ordinaryText}> Savatchangizda: <span className={classes.span}>{totalQTY} ta mahsulot bor</span></Typography>
            }
            <Box className={classes.contentWrapper}>
                {cart ? <SaleForm handleForm={handleForm} /> : <CartProduct />}
                <CartSummary handleForm={handleForm} cart={cart}/>
            </Box>
        </Box>
    )
}
export default CartComponent;
