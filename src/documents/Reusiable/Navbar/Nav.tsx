import {Box} from "@mui/system";
import style from "./Nav.style"
import Link from "next/link";
import Image from "next/image";
import NextLogo from "../../../../public/assets/images/next_logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import {Button, useMediaQuery, useTheme} from "@mui/material";
import {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import NavLinks from "./NavLinks";
import CloseIcon from "@mui/icons-material/Close";

const Nav = () => {
    const classes = style();
    const theme = useTheme();
    const query = useMediaQuery(theme.breakpoints.down("md"));
    const [showLinks, setShowLinks] = useState(false);
    const handleMobile = () => setShowLinks(!showLinks)
    return (
        <Box className={showLinks ? classes.active : classes.navWrapper}>
            <Box className={classes.contentWrapper}>
                <Link href="/" className={classes.link}><Image width={query ? 70 : 100} height={query ? 30 : 45} src={NextLogo} alt="logo"/></Link>
                {showLinks ? <CloseIcon onClick={handleMobile} className={classes.hamburger}/> : <MenuIcon onClick={handleMobile} className={classes.hamburger}/>}
                <Box className={showLinks ? classes.activeNavLinks : classes.navLinks}>
                    <Button className={classes.catalogButton}><MenuIcon/> Katalog</Button>
                    <Box className={classes.searchInputWrapper}>
                        <input type="search" placeholder="Mahsulotni izlash" className={classes.searchInput}/>
                        <button className={classes.submitButton}><SearchIcon className={classes.searchIcon}/></button>
                    </Box>
                    <NavLinks/>
                </Box>
            </Box>
        </Box>
    )
}
export default Nav;
