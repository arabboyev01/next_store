import { Box } from '@mui/system';
import Style from './Nav.style'
import Badge from '@mui/material/Badge';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { validataionCode } from '../../../redux/CartSlice';
import React from 'react';
import { NavLinksType } from '../../../../types/types';
import User from './User';
import { useRouter } from 'next/router'
import store from '../../../../public/assets/icons/store.png'
import Image from 'next/image'
import { parsedData } from '../../../redux/fetchData'

const NavLinks: React.FC<NavLinksType> = ({handleOpen}) => {
    const classes = Style();
    const validateLogin = useSelector(validataionCode)
    const validate = useSelector(validataionCode)
    const router = useRouter()
    // const cartItems = useSelector(selectCartItems);
    const handlePersonalData = () => {
        return validate ? router.push({pathname: '/likes'}) : handleOpen()
    }
    const quantity = parsedData.length ? parsedData.length : 0

    return (
        <>
            <Box className={classes.linkWrapper}>
                <Box className={classes.likeButton} onClick={handlePersonalData}>
                    <FavoriteBorderIcon className={classes.likeIcon}/>
                </Box>
                <Link href="/cart" style={{cursor: 'pointer'}}>
                    <Box className={classes.likeButton}>
                        <Badge badgeContent={quantity} color="primary">
                            <Image src={store.src} className={classes.likeIcon} width={20} height={20} alt="store"/>
                        </Badge>
                    </Box>
                </Link>
                {validateLogin ? <User/> : <Button className={classes.loginButton} onClick={handleOpen}>Kirish</Button>}
            </Box>
        </>
    )
}
export default NavLinks;
