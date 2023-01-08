import {Box} from "@mui/system";
import style from "./Nav.style"
import Link from "next/link";
import Image from "next/image";
import NextLogo from "../../../../public/assets/images/next_logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import {Button, useMediaQuery, useTheme} from "@mui/material";
import {useState, useEffect} from "react";
import SearchIcon from "@mui/icons-material/Search";
import NavLinks from "./NavLinks";
import CloseIcon from "@mui/icons-material/Close";
import LoginComponent from "../../../components/LoginComponent/LoginComponent";
import {setSearchValue} from "../../../redux/CartSlice";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";

const Nav = () => {
    const classes = style();
    const theme = useTheme();
    const query = useMediaQuery(theme.breakpoints.down("md"));
    const [showLinks, setShowLinks] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const [inputValue, setInputValue] = useState('')
    const handleMobile = () => setShowLinks(!showLinks);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    useEffect(() => {
        if(open){
            setShowLinks(false)
        }
    }, [open, setShowLinks])
    const handleSendData = (data: any,) => {

        dispatch(setSearchValue(data));
        router.push({pathname: '/search'})
    }

    return (
        <>
            <LoginComponent open={open} handleClose={handleClose}/>
        <Box className={showLinks ? classes.active : classes.navWrapper}>
            <Box className={classes.contentWrapper}>
                <Link href="/" className={classes.link}><Image width={query ? 70 : 100} height={query ? 30 : 45} src={NextLogo} alt="logo"/></Link>
                {showLinks ? <CloseIcon onClick={handleMobile} className={classes.hamburger}/> : <MenuIcon onClick={handleMobile} className={classes.hamburger}/>}
                <Box className={showLinks ? classes.activeNavLinks : classes.navLinks}>
                    <Button className={classes.catalogButton}><MenuIcon/> Katalog</Button>
                    <Box className={classes.searchInputWrapper}>
                        <input type="search" placeholder="Mahsulotni izlash" className={classes.searchInput} onChange={(e) => setInputValue(e.target.value)}/>
                        <button className={classes.submitButton} onClick={() => handleSendData(inputValue)}><SearchIcon className={classes.searchIcon}/></button>
                    </Box>
                    <NavLinks handleOpen={handleOpen}/>
                </Box>
            </Box>
        </Box>
            </>
    )
}
export default Nav;
