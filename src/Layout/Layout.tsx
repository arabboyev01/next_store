import {Box} from "@mui/system";
// import Navbar from "../documents/Reusiable/Navbar/Navbar";
import React from "react";
import Footer from "../documents/Reusiable/Footer/Footer";
import Nav from "../documents/Reusiable/Navbar/Nav";

export type LayoutType = {
    children?: any
}
const Layout: React.FC<LayoutType> = ({children}) => {
    return (
        <Box>
            <Nav/>
            <Box>{children}</Box>
            <Footer />
        </Box>
    )
}
export default Layout;
