import Styles from "./summary.style"
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import {useSelector} from "react-redux";
import {selectTotalAmount} from "../../../../redux/CartSlice"
import React, {useState, useEffect} from "react";
import SubmitButton from "../../SubmitButton/SubmitButton";

export type CartSummaryType = {
    handleForm: any
    cart: boolean
}
const CartSummary: React.FC<CartSummaryType> = ({handleForm, cart}) => {
    const classes = Styles();
    const totalAmount = useSelector(selectTotalAmount);
    const [navState, setNavState] = useState(false);
    const onNavScroll = () => {
        if(window.scrollY > 75) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    },[]);

    return(
        <Box className={navState ? classes.sticky : classes.summaryWrapper}>
            <Typography className={classes.name}>Buyurtma</Typography>
            <Box className={classes.total}>
                <Typography className={classes.text}>Umumiy summa: </Typography>
                <Typography className={classes.price}>{totalAmount} so&apos;m</Typography>
            </Box>
            <Box className={classes.delivery}>
                <Typography className={classes.text}>Yetkazish summa: </Typography>
                <Typography className={classes.price}>40 000 so&apos;m</Typography>
            </Box>
            <Box className={classes.summa}>
                <Typography className={classes.textCenter}>Yetkazish summa</Typography>
                <Typography className={classes.priceCenter}>{totalAmount+ 40000} so&apos;m</Typography>
            </Box>
            <Box className={classes.buyBtn}>
                {cart ? <SubmitButton buttonText="Rasmiylashtirish" /> : <PrimaryButton text="Rasmiylashtirish" onClick={handleForm}/>}
            </Box>
        </Box>
    )
}
export default CartSummary
