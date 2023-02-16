import {Box} from "@mui/system";
import React, {useEffect} from "react";
import Footer from "../documents/Reusiable/Footer/Footer";
import Nav from "../documents/Reusiable/Navbar/Nav";
import {useMediaQuery} from "@mui/material";
import MobileNav from "../documents/Reusiable/MobileNav/MobileNav";
import {validateLogin} from "../redux/CartSlice";
import {useDispatch} from "react-redux";

const Layout = ({children}: {children: React.ReactNode}) => {
    const query = useMediaQuery('@media(max-width: 900px)')
    const dispatch = useDispatch()
    useEffect(() => {
        if(localStorage.getItem('tokenKey')){
            // @ts-ignore
            dispatch(validateLogin(true))
        }
        if(localStorage.getItem('tokenKey') === 'undefined'){
            // @ts-ignore
            dispatch(validateLogin(false))
        }
        if(!localStorage.getItem('tokenKey')){
            // @ts-ignore
            dispatch(validateLogin(false))
        }

    }, [dispatch])
    return (
        <Box>
            {query ? <MobileNav /> : <Nav/>}
            <Box>{children}</Box>
            <Footer />
        </Box>
    )
}
export default Layout;
