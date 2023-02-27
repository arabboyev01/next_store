import Style from "./Footer.style"
import {Box} from "@mui/system";
import {Typography, useMediaQuery} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
    const classes = Style();
    const query = useMediaQuery('@media(max-width: 600px)')
    return(
        <Box className={classes.footerWrapper}>
            <Box className={classes.contentWrapper}>
                <Box className={classes.singleContent}>
                    <Typography className={classes.title}>Hujjatlar</Typography>
                    <Typography className={classes.sub}>Umumiy shartlar</Typography>
                    <Typography className={classes.sub}>Ofertalar arxivi</Typography>
                    <Typography className={classes.sub}>Nizom</Typography>
                    <Typography className={classes.sub}>Guvohnomar</Typography>
                </Box>
                <Box className={classes.singleContent}>
                    <Typography className={classes.title}>Ish vaqtlari</Typography>
                    <Typography className={classes.sub}>Du-Ju/08:00-20:00</Typography>
                    <Typography className={classes.sub}>Shanba/09:00/21:00</Typography>
                    <Typography className={classes.sub}>Yakshanba / 13:00-22:00</Typography>
                </Box>
                <Box className={classes.singleContent}>
                    <Typography className={classes.title}>Mahsulotlar katalogi</Typography>
                    <Typography className={classes.sub}>Katalog 1</Typography>
                    <Typography className={classes.sub}>Katalog 2</Typography>
                    <Typography className={classes.sub}>Katalog 3</Typography>
                    <Typography className={classes.sub}>Katalog 4</Typography>
                    <Typography className={classes.sub}>Katalog 5</Typography>
                    <Typography className={classes.sub}>Katalog 6</Typography>
                </Box>
                <Box className={classes.singleContent}>
                    <Typography className={classes.title}>Axbarot xizmati</Typography>
                    <Typography className={classes.sub}>contact{query ? <br/> : null }@nextstore.uz</Typography>
                    <Typography className={classes.sub}>+998 97 712 96 96 <br/>+998 95 503 09 09</Typography>
                    <Typography className={classes.sub}>Sag’bon 186, Olmazor tumani, Toshkent, Ozbekiston</Typography>
                    <Box className={classes.socialIcons}>
                        <InstagramIcon className={classes.icon} />
                        <FacebookIcon className={classes.icon} />
                        <TelegramIcon className={classes.icon} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Footer;
