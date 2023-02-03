import { Box } from '@mui/system';
import style from './Nav.style'
import Link from 'next/link';
import Image from 'next/image';
import NextLogo from '../../../../public/assets/images/next_logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NavLinks from './NavLinks';
import LoginComponent from '../../../components/LoginComponent/LoginComponent';
import { setSearchValue } from '../../../redux/CartSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const Nav = () => {
    const classes = style();
    const dispatch = useDispatch();
    const router = useRouter();
    const [inputValue, setInputValue] = useState('')
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const handleSendData = useCallback((data: any,) => {
        dispatch(setSearchValue(data));
        router.push({pathname: '/search'})
    }, [dispatch, router])

    useEffect(() => {
        window.addEventListener('keydown', (e: any) => {
            if (e.key === 'Enter') handleSendData(inputValue);
        })
    }, [handleSendData, inputValue])

    return (
        <>
            <LoginComponent open={open} handleClose={handleClose}/>
            <Box className={classes.navWrapper}>
                <Box className={classes.contentWrapper}>
                    <Link href="/" className={classes.link}><Image width={100} height={45} src={NextLogo}
                                                                   alt="logo"/></Link>
                    <Box className={classes.navLinks}>
                        <Button className={classes.catalogButton}><MenuIcon/> Katalog</Button>
                        <Box className={classes.searchInputWrapper}>
                            <input type="search" placeholder="Mahsulotni izlash" className={classes.searchInput}
                                   onChange={(e) => setInputValue(e.target.value)}/>
                            <button className={classes.submitButton} onClick={() => handleSendData(inputValue)}>
                                <SearchIcon className={classes.searchIcon}/></button>
                        </Box>
                        <NavLinks handleOpen={handleOpen}/>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default Nav;
