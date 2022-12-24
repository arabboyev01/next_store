import {Box} from "@mui/system";
import Navbar from "../documents/Reusiable/Navbar/Navbar";
import React from "react";

export type LayoutType = {
    children?: any
}
const Layout: React.FC<LayoutType> = ({children}) => {
    return (
        <Box>
            <Navbar/>
            <Box>{children}</Box>
        </Box>
    )
}
export default Layout
