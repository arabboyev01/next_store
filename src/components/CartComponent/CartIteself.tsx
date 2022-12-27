import {Box} from "@mui/system";
import {selectCartItems} from "../../redux/CartSlice"
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import CartComponent from "./CartComponent";
const CartItself = () => {
    const cartItems = useSelector(selectCartItems);
    return(
        <Box>
            {cartItems.length === 0 ? <EmptyCart /> : <CartComponent />}
        </Box>
    )
}
export default CartItself;
