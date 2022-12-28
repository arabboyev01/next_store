import {Box} from "@mui/system";
import {Drawer, IconButton} from "@mui/material";
import {useState} from "react"
import Style from "./Navbar.style";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import NextLogo from "../../../../public/assets/images/next_logo.png";
import CloseIcon from "@mui/icons-material/Close";
import NavLinks from "./NavLinks"

const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const classes = Style()
    return (
        <Box>
            <IconButton
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon className={classes.icon}/>
            </IconButton>
            <Drawer
                anchor="left"
                open={openDrawer}
                className={classes.drawerWrapper}
                onClose={() => setOpenDrawer(false)}
            >
                <Box className={classes.headWrapper}>
                    <Box style={{cursor: 'pointer'}}>
                        <Link href="/">
                            <Image width={70} height={30} src={NextLogo} alt="logo"/>
                        </Link>
                    </Box>
                    <CloseIcon onClick={() => setOpenDrawer(!openDrawer)} className={classes.closeIcon}/>
                </Box>
                <Box className={classes.navLinks}>
                    <NavLinks/>
                </Box>
            </Drawer>
        </Box>
    )
}
export default DrawerComponent;
