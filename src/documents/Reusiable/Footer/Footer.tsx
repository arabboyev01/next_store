import Style from "./Footer.style"
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
    const classes = Style();
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
                    <Typography className={classes.title}>Servis</Typography>
                    <Typography className={classes.sub}>Do’konlar</Typography>
                    <Typography className={classes.sub}>Biz haqimizda</Typography>
                    <Typography className={classes.sub}>Hamkorlik uchun</Typography>
                    <Typography className={classes.sub}>Qaytarish</Typography>
                    <Typography className={classes.sub}>Promokodlar</Typography>
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
                    <Typography className={classes.sub}>contact.@nextstore.uz</Typography>
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
