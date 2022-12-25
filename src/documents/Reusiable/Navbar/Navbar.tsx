import {Box} from "@mui/system";
import Styles from "./Navbar.style"
import Image from "next/image";
import NextLogo from "../../../../public/assets/images/next_logo.png"
import {Button, useMediaQuery} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import React, {useState,useEffect} from "react";
import {connect} from "react-redux";
import {mapStateToProps} from "../../../components/Home/props";
import {CartType} from "../../../../types/types";

const Navbar: React.FC<CartType> = ({cart}) => {
    const classes = Styles();
    const query = useMediaQuery('max-width: 650px')
    const [cartCount, setCartCount] = useState(0);
    let count = 0
    useEffect(() => {
        cart.forEach((item: any) => (
            count += item.qty
        ))
        setCartCount(count)
    }, [cart, cartCount]);

    return (
        <Box className={classes.navWrapper}>
            <Box className={classes.contentWrapper}>
                <Image src={NextLogo.src} alt="logo" width={query ? 30 : 90} height={query ? 15 : 35}/>
                <Button className={classes.catalogButton}><MenuIcon className={classes.catalogIcon}/> Katalog</Button>
                <Box className={classes.searchInputWrapper}>
                    <input type="search" placeholder="Mahsulotni izlash" className={classes.searchInput}/>
                    <button className={classes.submitButton}><SearchIcon className={classes.searchIcon}/></button>
                </Box>
                <Box className={classes.likeButton}>
                    <FavoriteBorderIcon className={classes.likeIcon}/>
                </Box>
                <Box className={classes.likeButton}>
                    <Badge badgeContent={cartCount} color="primary">
                        <ShoppingCartIcon className={classes.likeIcon}/>
                    </Badge>
                </Box>
                <Button className={classes.loginButton}>Kirish</Button>
            </Box>
        </Box>
    )
}
export default connect(mapStateToProps)(Navbar);
