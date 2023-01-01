import {Box} from "@mui/system";
import Style, {ModalStyle} from "./payment.style"
// @ts-ignore
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import CloseIcon from "@mui/icons-material/Close";
import {Typography, useMediaQuery} from "@mui/material";
import React from "react";
import {numsRange} from "../../../DumbData/DumbData";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";

export type PaymentTermType = {
    open: boolean
    handleCLose: (e: any) => void
}
const PaymentTerm: React.FC<PaymentTermType> = ({open, handleCLose}) => {
    const classes = Style();
    const query = useMediaQuery('@media(max-width: 600px)')
    return(
        <Box>
            <Rodal
                customStyles={ModalStyle}
                animation="slideDown"
                closeOnEsc={true}
                showCloseButton={false}
                visible={open}
                onClose={handleCLose}
                width={query ? 350 : 800}
                height={query ? 538 : 711}
            >
                <Box className={classes.contentWrapper}>
                    <Box className={classes.header}>
                        <Typography className={classes.title}>Muddatli to‘lo‘v</Typography>
                        <CloseIcon className={classes.icon} onClick={handleCLose}/>
                    </Box>
                    <Typography className={classes.mainText}>Eslatma:</Typography>
                    <Box className={classes.descWrapper}>
                        <Typography className={classes.mainDesc}>Muddatli to‘lo‘vdan foydalanish uchun sizdan “Passport” talab etiladi</Typography>
                    </Box>
                    <Box className={classes.priceWrapper}>
                        <Typography className={classes.price}>1 400 000 so&apos;m</Typography>
                        <Typography className={classes.mainDesc}>Oyik to&apos;lov</Typography>
                    </Box>
                    <Typography className={classes.mainText}>Muddatini tanlang: (oy hisobida)</Typography>
                    <Box className={classes.form}>
                        <input type="range" id="volume" name="volume" min="1" max="12" className={classes.range}/>
                        <Box className={classes.nums}>
                            {numsRange.map(item =>
                             <Typography className={classes.num} key={item.id}>{item.id}</Typography>
                            )}
                        </Box>
                    </Box>
                    <Box className={classes.footer}>
                        <Typography className={classes.title}>Umumiy to&apos;lov miqdori:</Typography>
                        <Typography className={classes.title}>16 800 0000 so‘m</Typography>
                    </Box>
                    <Box className={classes.button}>
                        <PrimaryButton text='Rasmiylashtirish' />
                    </Box>
                </Box>
            </Rodal>
        </Box>
    )
}
export default PaymentTerm;
