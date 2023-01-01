import {Box} from "@mui/system";
import Style from "./Navbar.style"
import Badge from '@mui/material/Badge';
import {Button} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link";
import {useSelector} from "react-redux";
import {selectTotalQTY} from "../../../redux/CartSlice";
import {useState} from "react";
import LoginComponent from "../../../components/LoginComponent/LoginComponent";

const NavLinks = () => {
    const classes = Style();
    const totalQTY = useSelector(selectTotalQTY);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    return (
        <Box>
            <LoginComponent open={open} handleClose={handleClose} />
        <Box className={classes.linkWrapper}>
            <Box className={classes.likeButton}>
                <FavoriteBorderIcon className={classes.likeIcon}/>
            </Box>
            <Box className={classes.likeButton}>
                <Badge badgeContent={totalQTY} color="primary">
                    <Link href='/cart'> <ShoppingCartIcon className={classes.likeIcon}/></Link>
                </Badge>
            </Box>
            <Button className={classes.loginButton} onClick={handleOpen}>Kirish</Button>
        </Box>
        </Box>
    )
}
export default NavLinks;
