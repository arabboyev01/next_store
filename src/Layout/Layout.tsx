import {Box} from "@mui/system";
import Navbar from "../documents/Reusiable/Navbar/Navbar";
import React from "react";
import Footer from "../documents/Reusiable/Footer/Footer";

export type LayoutType = {
    children?: any
}
const Layout: React.FC<LayoutType> = ({children}) => {
    return (
        <Box style={{position: "relative"}}>
            {/*<Navbar/>*/}
            <Box>{children}</Box>
            <Footer />
        </Box>
    )
}
export default Layout;
