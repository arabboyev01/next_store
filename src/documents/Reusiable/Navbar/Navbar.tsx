import {Box} from "@mui/system";
import Styles from "./Navbar.style"
import Image from "next/image";
import NextLogo from "../../../../public/assets/images/next_logo.png"
import {Button, useMediaQuery} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
    const classes = Styles();
    const query = useMediaQuery('max-width: 650px')
    return(
        <Box className={classes.navWrapper}>
            <Box className={classes.contentWrapper}>
                <Image src={NextLogo.src} alt="logo" width={query ? 30 : 90} height={query ? 15 : 35} />
                <Button className={classes.catalogButton}><MenuIcon className={classes.catalogIcon} /> Katalog</Button>
                <Box className={classes.searchInputWrapper}>
                    <input  type="search" placeholder="Mahsulotni izlash" className={classes.searchInput}/>
                    <button className={classes.submitButton}><SearchIcon  className={classes.searchIcon}/></button>
                </Box>
                <Box className={classes.likeButton}>
                    <FavoriteBorderIcon className={classes.likeIcon} />
                </Box>
                <Box className={classes.likeButton}>
                    <ShoppingCartIcon className={classes.likeIcon} />
                </Box>
                <Button className={classes.loginButton}>Kirish</Button>
            </Box>
        </Box>
    )
}
export default Navbar;
