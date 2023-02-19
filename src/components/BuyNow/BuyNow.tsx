import { Box } from '@mui/system'
import Style from './buy.style'
import CartSummary from '../../documents/Reusiable/Cart/CartSummary/CartSummary'
import { useSelector } from 'react-redux'
import { selectTotalAmount } from '../../redux/CartSlice'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiAddress } from '../../../config'
import SaleForm from '../../documents/Reusiable/SaleForm/SaleForm'
import saleStyle from "../../documents/Reusiable/SaleForm/sale.style"
import { orderObjectForm } from '../../documents/Reusiable/SaleForm/SendProducts'
import { useRouter } from 'next/router'

const BuyNow = () => {
    const classes = Style()
    const classess = saleStyle();
    const [cart, setCart] = useState([])
    const totalAmount = useSelector(selectTotalAmount);
    const router = useRouter()
    const {id} = router.query

    useEffect(() => {
        axios.get(`${apiAddress}/product/${id}`).then(data => setCart(data.data))
            .catch(err => console.log(err))
    }, [id]);

    const handleSendData = (values: any) => {
        return orderObjectForm(values, cart, totalAmount)
    }

    return (
        <Box className={classes.buyNowWrapper}>
            <Box className={classes.inputFile}>
                <SaleForm
                    handleForm={true}
                    classess={classess}
                    handleSendData={handleSendData}
                />
            </Box>
            <Box className={classes.summaryFile}>
                <CartSummary
                    handleForm={true}
                    cart={true}
                    totalQTY={1}
                    // @ts-ignore
                    totalAmount={cart?.price}
                />
            </Box>
        </Box>
    )
}
export default BuyNow