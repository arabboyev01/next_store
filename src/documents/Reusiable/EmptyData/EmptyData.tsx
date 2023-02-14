import {Box} from "@mui/system";
import Style from "./empty.style"
import Image from "next/image";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import Link from "next/link";
import {Typography, useMediaQuery} from "@mui/material";

const EmptyCart = ({data}: any) => {
    const classes = Style();
    const query = useMediaQuery('@media(max-width: 600px)')
    return (
        <>
            <Box className={classes.empty}>
                <Image src={data.image.src} alt='empty' width={query ? 150 : 200} height={query ? 120 : 200}/>
                <Box>
                    <Typography className={classes.title}>{data.title}</Typography>
                    <ul className={classes.lists}>
                        <li className={classes.list}>{data.desc1}</li>
                        <li className={classes.list}>{data.desc2}</li>
                        <li className={classes.list}>{data.desc3}</li>
                    </ul>
                    <Box className={classes.backBtn}>
                        <Link href="/" style={{textDecoration: "none"}}>
                            <PrimaryButton text={data.buttonText}/>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default EmptyCart;
