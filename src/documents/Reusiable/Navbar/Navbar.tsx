import {Box} from "@mui/system";
import Styles from "./Navbar.style"
import Image from "next/image";
import NextLogo from "../../../../public/assets/images/next_logo.png"
import {useMediaQuery} from "@mui/material";
import Link from "next/link";
import {AppBar, Toolbar, useTheme} from "@mui/material";
import DrawerComponent from "./DrawerComponent"
import NavLinks from "./NavLinks"

const Navbar = () => {
    const classes = Styles();
    const theme = useTheme();
    const query = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <Box className={classes.navWrapper}>
                <AppBar className={classes.contentWrapper} position="static">
                    <Toolbar className={classes.mainToolbar}>
                        <Box style={{cursor: 'pointer'}}>
                            <Link href="/">
                                <Image width={query ? 70 : 100} height={query ? 30 : 45} src={NextLogo} alt="logo"/>
                            </Link>
                        </Box>
                        <Box>
                            {query ? (
                                <DrawerComponent/>
                            ) : (
                                <NavLinks/>
                            )}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
export default Navbar;
