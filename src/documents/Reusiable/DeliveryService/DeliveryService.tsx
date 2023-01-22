import {Box} from "@mui/system";
import Style from "./delivery.style"
import StoreIcon from '@mui/icons-material/Store';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LoopIcon from '@mui/icons-material/Loop';
import {Typography} from "@mui/material";
import {deliveryDumbData} from "../../DumbData/DumbData";
const DeliveryService = ({name}: any) => {
    const classes = Style()
    return(
        <Box className={classes.deliveryWrapper}>
            <Box className={classes.singleLine}>
                <StoreIcon className={classes.icon} />
                <Typography className={classes.name}>Brend: </Typography>
                <Typography className={classes.brandName}>{name}</Typography>
            </Box>
            <Box className={classes.singleLine}>
                <DeliveryDiningIcon className={classes.icon} />
                <Typography className={classes.name}>Yetkazib berish: </Typography>
                <Typography className={classes.brandName}>{deliveryDumbData.delivery} so&apos;m</Typography>
            </Box>
            <Box className={classes.singleLine}>
                <LoopIcon className={classes.icon} />
                <Typography className={classes.name}>Maxsulotni qaytarish va almashtirish: </Typography>
                <Typography className={classes.brandName}>{deliveryDumbData.day}</Typography>
            </Box>
        </Box>
    )
}

export default DeliveryService
