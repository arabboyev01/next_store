import Styles from "./summary.style"
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import {useSelector} from "react-redux";
import {selectTotalAmount} from "../../../../redux/CartSlice"
import React, {useState, useEffect, useCallback} from "react";
import SubmitButton from "../../SubmitButton/SubmitButton";
import boxImage from "../../../../../public/assets/images/box.png";
import Image from "next/image";
import {CartSummaryType} from "../../../../../types/types"

const CartSummary: React.FC<CartSummaryType> = ({handleForm, cart, totalQTY}) => {
    const classes = Styles();
    const totalAmount = useSelector(selectTotalAmount);
    const [navState, setNavState] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleLoading = () => setLoading(!loading);

    const onNavScroll = useCallback(() => {
        window.scrollY > 75 ? setNavState(true) : setNavState(false);
    }, [setNavState])

    useEffect(() => {
        window.addEventListener('scroll', onNavScroll)
        return () => window.removeEventListener('scroll', onNavScroll)
    },[onNavScroll])

    return(
        <Box className={navState ? classes.sticky : classes.summaryWrapper}>
            <Typography className={classes.name}>Buyurtma</Typography>
            {cart ? <Box className={classes.quantity}>
                <Image src={boxImage.src} alt='image' width={90} height={90}/>
                <Typography className={classes.quant}>{totalQTY} <br/> Buyurtma soni</Typography>
            </Box> : null
            }
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
                {cart ? <SubmitButton buttonText="Rasmiylashtirish" loading={loading} onClick={handleLoading}/> : <PrimaryButton text="Rasmiylashtirish" onClick={handleForm} />}
            </Box>
        </Box>
    )
}
export default CartSummary
