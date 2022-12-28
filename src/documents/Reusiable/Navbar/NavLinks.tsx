import {Box} from "@mui/system";
import Style from "./Navbar.style"
import Badge from '@mui/material/Badge';
import {Button} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link";
import {useSelector} from "react-redux";
import {selectTotalQTY} from "../../../redux/CartSlice";
const NavLinks = () => {
    const classes = Style();
    const totalQTY = useSelector(selectTotalQTY);
    return (
        <Box className={classes.linkWrapper}>
            <Box className={classes.searchInputWrapper}>
                <input type="search" placeholder="Mahsulotni izlash" className={classes.searchInput}/>
                <button className={classes.submitButton}><SearchIcon className={classes.searchIcon}/></button>
            </Box>
            <Box className={classes.likeButton}>
                <FavoriteBorderIcon className={classes.likeIcon}/>
            </Box>
            <Box className={classes.likeButton}>
                <Badge badgeContent={totalQTY} color="primary">
                    <Link href='/cart'> <ShoppingCartIcon className={classes.likeIcon}/></Link>
                </Badge>
            </Box>
            <Button className={classes.loginButton}>Kirish</Button>
        </Box>
    )
}
export default NavLinks
