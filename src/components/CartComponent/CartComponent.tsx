import { Box } from '@mui/system';
import Styles from './cart.style'
import { Typography } from '@mui/material';
import CartProduct from '../../documents/Reusiable/Cart/CartProduct/CartProduct';
import CartSummary from '../../documents/Reusiable/Cart/CartSummary/CartSummary';
import { useSelector } from 'react-redux';
import { selectCartItems, selectTotalAmount, selectTotalQTY } from '../../redux/CartSlice';
import { useEffect, useState } from 'react'
import SaleForm from '../../documents/Reusiable/SaleForm/SaleForm';
import style from '../../documents/Reusiable/SaleForm/sale.style'
import { orderForm } from '../../documents/Reusiable/SaleForm/SendProducts'
import axios from 'axios'
import { apiAddress } from '../../../config'

const CartComponent = () => {
    const classes = Styles();
    const classess = style();
    const totalQTY = useSelector(selectTotalQTY);
    const [cart, setCart] = useState(false);
    const cartItems = useSelector(selectCartItems);
    const totalAmount = useSelector(selectTotalAmount);
    const [region, setRegion] = useState([])
    const handleForm = () => setCart(!cart)
    const handleSendData = (values: any) => {
        return orderForm(values, cartItems, totalAmount)
    }
    useEffect(() => {
        axios.get(`${apiAddress}/territory`).then(data => {
            setRegion(data.data)
        }).catch(err => console.log(err))
    }, [])

    return (
        <Box className={classes.cartWrapper}>
            {cart ?
                <Typography className={classes.ordinaryText}>Buyurtmani rasmiylashtirish</Typography> :
                <Typography className={classes.ordinaryText}>
                    Savatchangizda: <span className={classes.span}>
                    {totalQTY} ta mahsulot bor</span>
                </Typography>
            }
            <Box className={classes.contentWrapper}>
                {cart ?
                    <SaleForm
                        handleForm={handleForm}
                        classess={classess}
                        handleSendData={handleSendData}
                        region={region}
                    /> :
                    <CartProduct cartItems={cartItems}/>
                }
                <CartSummary
                    handleForm={handleForm}
                    cart={cart}
                    totalQTY={totalQTY}
                    totalAmount={totalAmount}
                />
            </Box>
        </Box>
    )
}
export default CartComponent;
