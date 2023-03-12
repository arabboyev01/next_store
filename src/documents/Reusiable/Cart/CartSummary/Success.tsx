import { Box } from '@mui/system'
import style from './summary.style'
import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import VerifiedIcon from '@mui/icons-material/Verified';

const Success = () => {
    const classes = style()
    const router = useRouter()
    const gaBack = () => {
        router.push({pathname: '/'})
    }
    const OrdersHandle = () => {
        router.push({pathname: '/profile'})
    }
    return (
        <Box className={classes.successWrapper}>
            {/*<Image src={successImage.src} alt='successImage' width={150} height={150}/>*/}
            <Box className={classes.successIcon}>
                <VerifiedIcon className={classes.verifiedIcon}/>
            </Box>
            <Typography className={classes.successText}>Sizning buyurtmangiz qabul qilindi.</Typography>
            <Typography className={classes.successSub}>Tez orada siz bilan operator bog’lanadi.</Typography>
            <Typography className={classes.successOrdinaryText}>Buyurtmangizni
                <Typography className={classes.successOrdinaryTextColor} onClick={OrdersHandle} >Menig buyurtmalarim
                </Typography>sahifasidan kuzatishingiz mumkun</Typography>
            <Box className={classes.successButton} onClick={gaBack}>
                <Button className={classes.submitButton}>Asosiy sahifaga qaytish</Button>
            </Box>
        </Box>
    )
}
export default Success