import {Box} from "@mui/system";
import Style from "./Nav.style"
import Badge from '@mui/material/Badge';
import {Button} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link";
import {useSelector} from "react-redux";
import {selectTotalQTY} from "../../../redux/CartSlice";
import React from "react";
import {NavLinksType} from "../../../../types/types";

const NavLinks:React.FC<NavLinksType> = ({handleOpen}) => {
    const classes = Style();
    const totalQTY = useSelector(selectTotalQTY);
    return (
        <>
            <Box className={classes.linkWrapper}>
                <Box className={classes.likeButton}>
                    <Link href='/likes'><FavoriteBorderIcon className={classes.likeIcon}/></Link>
                </Box>
                <Box className={classes.likeButton}>
                    <Badge badgeContent={totalQTY} color="primary">
                        <Link href='/cart'> <ShoppingCartIcon className={classes.likeIcon}/></Link>
                    </Badge>
                </Box>
                <Button className={classes.loginButton} onClick={handleOpen}>Kirish</Button>
            </Box>
        </>
    )
}
export default NavLinks;
