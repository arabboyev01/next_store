import { Box } from '@mui/system';
import style from './mobileNav.style'
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import NextLogo from '../../../../public/assets/images/next_logo.png';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import { selectTotalQTY, setSearchValue, validataionCode } from '../../../redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Typography } from '@mui/material';
import LoginComponent from '../../../components/LoginComponent/LoginComponent';
import User from '../Navbar/User';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MobileCatalog from './MobileCatalog/MobileCatalog'

const MobileNav = () => {
    const classes = style();
    const dispatch = useDispatch();
    const router = useRouter();
    const [inputValue, setInputValue] = useState('')
    const [mobile, setMobile] = useState(false);
    const [open, setOpen] = useState(false);
    const [navState, setNavState] = useState(false);
    const validate = useSelector(validataionCode)
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const handleSendData = (data: any,) => {
        dispatch(setSearchValue(data));
        router.push({pathname: '/search'})
    }
    const handleMobileMenu = () => {
        setMobile(!mobile)
    }
    const validateLogin = useSelector(validataionCode)
    const totalQTY = useSelector(selectTotalQTY);
    useEffect(() => {
        if (open) {
            setMobile(false)
        }
    }, [open, setMobile])

    const onNavScroll = () => {
        if (window.scrollY > 80) {
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

    const handlePersonalData = () => {
        return validate ? router.push({pathname: '/likes'}) : handleOpen()
    }

    const [categoryMain, setCategory] = useState(false);
    const handleSetCategory = () => setCategory(false);
    const handleOpenCategory = () => setCategory(true)

    return (
        <>
            <Box className={classes.mobileNavWrapper}>
                {categoryMain ?
                    <MobileCatalog categoryMain={categoryMain} handleSetCategory={handleSetCategory}/> : null}
                <LoginComponent open={open} handleClose={handleClose}/>
                {categoryMain ? null :
                    <Box className={classes.contentWrapper}>
                        <Box className={navState ? classes.stickyHeader : classes.header}>
                            <MenuIcon className={classes.menuIcon} onClick={handleMobileMenu}/>
                            <Link href="/" className={classes.link}><Image width={81} height={31} src={NextLogo}
                                                                           alt="logo"/></Link>
                            <Box>
                                <Badge badgeContent={totalQTY} color="primary" style={{marginTop: '10px'}}>
                                    <Link href="/cart"> <ShoppingCartIcon className={classes.likeIcon}/></Link>
                                </Badge>
                            </Box>
                        </Box>
                        <Box className={classes.searchInputWrapper}>
                            <input type="search" placeholder="Mahsulotni izlash" className={classes.searchInput}
                                   onChange={(e) => setInputValue(e.target.value)}/>
                            <button className={classes.submitButton} onClick={() => handleSendData(inputValue)}>
                                <SearchIcon
                                    className={classes.searchIcon}/></button>
                        </Box>
                        <Box className={mobile ? classes.activeMainContent : classes.mainContent}>
                            <CloseIcon onClick={handleMobileMenu} className={classes.closeMenuIcon}/>
                            <Link href="/" className={classes.link}><Image width={81} height={31} src={NextLogo}
                                                                           alt="logo"/></Link>
                            {validateLogin ? <User/> :
                                <Button className={classes.loginButton} onClick={handleOpen}>Kirish</Button>}
                            <Box className={classes.chapter}>
                                <Typography className={classes.title}>Bo&apos;limlar</Typography>
                                <Box className={classes.dividedMenu} onClick={handlePersonalData}>
                                    <Typography className={classes.chapters} style={{color: '#000', textDecoration: 'none'}}>Yoqtirgan
                                        mahsulotlarim</Typography>
                                    <KeyboardArrowRightIcon style={{color: '#000', marginTop: '20px'}}/>
                                </Box>
                                <Box className={classes.dividedMenu}  onClick={handleOpenCategory}>
                                    <Typography className={classes.chapters}>Bizning Catalog</Typography>
                                    <KeyboardArrowRightIcon style={{color: '#000', marginTop: '20px'}}/>
                                </Box>
                                <Box className={classes.dividedMenu}>
                                    <Typography className={classes.chapters}>Nasiya savdo</Typography>
                                    <KeyboardArrowRightIcon style={{color: '#000', marginTop: '20px'}}/>
                                </Box>
                                <Box className={classes.dividedMenu}>
                                    <Typography className={classes.chapters}>Biz haqimizda </Typography>
                                    <KeyboardArrowRightIcon style={{color: '#000', marginTop: '20px'}}/>
                                </Box>
                            </Box>
                            <Box className={classes.contact}>
                                <Typography className={classes.title}>Axborot xizmati</Typography>
                                <Typography className={classes.concatDetail}>contact.@nextstore.uz</Typography>
                                <Typography className={classes.concatDetail}>+998 95 503 09 09</Typography>
                            </Box>
                        </Box>
                    </Box>
                }
            </Box>
        </>
    )
}
export default MobileNav;
