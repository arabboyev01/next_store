import Styles from "./summary.style"
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import {useSelector} from "react-redux";
import {selectTotalAmount} from "../../../../redux/CartSlice"
import {useState, useEffect} from "react";
const CartSummary = () => {
    const classes = Styles();
    const totalAmount = useSelector(selectTotalAmount);
    console.log(totalAmount)
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
                <Typography className={classes.price}>{totalAmount}</Typography>
            </Box>
            <Box className={classes.delivery}>
                <Typography className={classes.text}>Yetkazish summa: </Typography>
                <Typography className={classes.price}>40 000 sum</Typography>
            </Box>
            <Box className={classes.summa}>
                <Typography className={classes.textCenter}>Yetkazish summa</Typography>
                <Typography className={classes.priceCenter}>{totalAmount} + 40 000 sum</Typography>
            </Box>
            <Box className={classes.buyBtn}>
                <PrimaryButton text="Rasmiylashtirish"/>
            </Box>
        </Box>
    )
}
export default CartSummary
