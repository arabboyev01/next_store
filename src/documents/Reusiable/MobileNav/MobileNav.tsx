import {Box} from "@mui/system";
import style from "./mobileNav.style"
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import NextLogo from "../../../../public/assets/images/next_logo.png";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import {selectTotalQTY, setSearchValue} from "../../../redux/CartSlice";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import CloseIcon from "@mui/icons-material/Close";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {Button, Typography} from "@mui/material";
import LoginComponent from "../../../components/LoginComponent/LoginComponent";

const MobileNav = () => {
    const classes = style();
    const dispatch = useDispatch();
    const router = useRouter();
    const [inputValue, setInputValue] = useState('')
    const [mobile, setMobile] = useState(false);
    const [open, setOpen] = useState(false);
    const [navState, setNavState] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const handleSendData = (data: any,) => {
        dispatch(setSearchValue(data));
        router.push({pathname: '/search'})
    }
    const handleMobileMenu = () => {
        setMobile(!mobile)
    }
    const totalQTY = useSelector(selectTotalQTY);
    useEffect(() => {
        if(open){
            setMobile(false)
        }
    }, [open, setMobile])

    const onNavScroll = () => {
        if(window.scrollY > 80) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);
        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    }, [])
    return(
        <Box className={classes.mobileNavWrapper}>
            <LoginComponent open={open} handleClose={handleClose}/>
            <Box className={classes.contentWrapper}>
                <Box className={navState ? classes.stickyHeader : classes.header}>
                    <MenuIcon className={classes.menuIcon} onClick={handleMobileMenu}/>
                    <Link href="/" className={classes.link}><Image width={81} height={31} src={NextLogo} alt="logo"/></Link>
                    <Box>
                        <Badge badgeContent={totalQTY} color="primary" style={{marginTop: "10px"}}>
                            <Link href='/cart'> <ShoppingCartIcon className={classes.likeIcon}/></Link>
                        </Badge>
                    </Box>
                </Box>
                <Box className={classes.searchInputWrapper}>
                    <input type="search" placeholder="Mahsulotni izlash" className={classes.searchInput} onChange={(e) => setInputValue(e.target.value)}/>
                    <button className={classes.submitButton} onClick={() => handleSendData(inputValue)}><SearchIcon className={classes.searchIcon}/></button>
                </Box>
                <Box className={mobile ? classes.activeMainContent : classes.mainContent}>
                    <CloseIcon onClick={handleMobileMenu} className={classes.closeMenuIcon}/>
                    <Link href="/" className={classes.link}><Image width={81} height={31} src={NextLogo} alt="logo"/></Link>
                    <Button className={classes.loginButton} onClick={handleOpen}>Kirish</Button>
                    <Box className={classes.chapter}>
                        <Typography className={classes.title}>Bo&apos;limlar</Typography>
                        <Typography className={classes.chapters}><Link href='likes' style={{color: "#000", textDecoration: "none"}}>Yoqtirgan mahsulotlarim </Link></Typography>
                        <Typography className={classes.chapters}>Mahsulotlar katalogi</Typography>
                        <Typography className={classes.chapters}>Xizmatlarimiz</Typography>
                        <Typography className={classes.chapters}>Nasiya savdo</Typography>
                        <Typography className={classes.chapters}>Biz haqimizda </Typography>
                    </Box>
                    <Box className={classes.contact}>
                        <Typography className={classes.title}>Axbarot xizmati</Typography>
                        <Typography className={classes.concatDetail}>contact.@nextstore.uz</Typography>
                        <Typography className={classes.concatDetail}>+998 95 503 09 09</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default MobileNav;
