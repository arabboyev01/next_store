import {Box} from "@mui/system";
import React from "react";
import Footer from "../documents/Reusiable/Footer/Footer";
import Nav from "../documents/Reusiable/Navbar/Nav";
import {useMediaQuery} from "@mui/material";
import MobileNav from "../documents/Reusiable/MobileNav/MobileNav";

export type LayoutType = {
    children?: any
}
const Layout: React.FC<LayoutType> = ({children}) => {
    const query = useMediaQuery('@media(max-width: 900px)')
    return (
        <Box>
            {query ? <MobileNav /> : <Nav/>}
            <Box>{children}</Box>
            <Footer />
        </Box>
    )
}
export default Layout;
