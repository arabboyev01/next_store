import {Box} from "@mui/system";
import Styles from "./cart.style"
import {Typography} from "@mui/material";
import CartProduct from "../../documents/Reusiable/Cart/CartProduct/CartProduct";
import CartSummary from "../../documents/Reusiable/Cart/CartSummary/CartSummary";
import {useSelector} from "react-redux";
import {selectTotalQTY} from "../../redux/CartSlice";

const CartComponent = () => {
    const classes = Styles();
    const totalQTY = useSelector(selectTotalQTY);
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
export default CartComponent;
