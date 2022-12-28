import {Box} from "@mui/system";
import Styles from "./Navbar.style"
import Image from "next/image";
import NextLogo from "../../../../public/assets/images/next_logo.png"
import {Button, useMediaQuery} from "@mui/material";
import Link from "next/link";
import {useTheme} from "@mui/material";
import DrawerComponent from "./DrawerComponent"
import NavLinks from "./NavLinks"
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from '@mui/material/AppBar';
const Navbar = () => {
    const classes = Styles();
    const theme = useTheme();
    const query = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Box className={classes.navWrapper}>
            <AppBar className={classes.contentWrapper} position='relative'>
                <Link href="/" className={classes.link}><Image width={query ? 70 : 100} height={query ? 30 : 45} src={NextLogo} alt="logo"/></Link>
                <Button className={classes.catalogButton}><MenuIcon/> Katalog</Button>
                <Box className={classes.searchInputWrapper}>
                    <input type="search" placeholder="Mahsulotni izlash" className={classes.searchInput}/>
                    <button className={classes.submitButton}><SearchIcon className={classes.searchIcon}/></button>
                </Box>
                {query ? <DrawerComponent/> : <NavLinks/>}
            </AppBar>
        </Box>
    )
}
export default Navbar;
