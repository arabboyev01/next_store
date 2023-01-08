import {Box} from "@mui/system";
import empty from "../../../public/assets/images/emptybag.png";
import Style from "./empty.style"
import Image from "next/image";
import PrimaryButton from "../../documents/Reusiable/PrimaryButton/PrimaryButton";
import Link from "next/link";
import {Typography, useMediaQuery} from "@mui/material";

const EmptyCart = () => {
    const classes = Style();
    const query = useMediaQuery('@media(max-width: 600px)')
    return (
        <>
            <Box className={classes.empty}>
                <Image src={empty.src} alt='empty' width={query ? 150 : 350} height={query ? 120 : 300}/>
                <Box>
                    <Typography className={classes.title}>Sizning savatchingizda mahsulot yo&apos;q</Typography>
                    <ul className={classes.lists}>
                        <li className={classes.list}>Mahsulotlar sahigasiga qayting</li>
                        <li className={classes.list}>Yoqtirgan mahsulotingizni tanlang</li>
                        <li className={classes.list}>Savatcha tugmasini bosing.</li>
                    </ul>
                    <Box className={classes.backBtn}>
                        <Link href="/" style={{textDecoration: "none"}}>
                            <PrimaryButton text='Mahsulotlarga qaytish'/>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default EmptyCart;
