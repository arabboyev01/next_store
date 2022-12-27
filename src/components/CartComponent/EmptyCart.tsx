import {Box} from "@mui/system";
import empty from "../../../public/assets/images/emptybag.png";
import Style from "./empty.style"
import Image from "next/image";
import PrimaryButton from "../../documents/Reusiable/PrimaryButton/PrimaryButton";
import Link from "next/link";
import {Typography} from "@mui/material";

const EmptyCart = () => {
    const classes = Style();

    return (
        <Box className={classes.empty}>
            <Typography className={classes.title}>Sizning savatchingizda mahsulot yoq</Typography>
            <Image src={empty.src} alt='empty' width={250} height={400}/>
            <Box className={classes.backBtn}>
                <Link href="/" style={{textDecoration: "none"}}>
                    <PrimaryButton text='Mahsulotlarga qaytish'/>
                </Link>
            </Box>
        </Box>
    )
}
export default EmptyCart;
