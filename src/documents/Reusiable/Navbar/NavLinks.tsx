import { Box } from '@mui/system';
import Style from './Nav.style'
import Badge from '@mui/material/Badge';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectTotalQTY, validataionCode } from '../../../redux/CartSlice';
import React, { useEffect } from 'react';
import { NavLinksType } from '../../../../types/types';
import User from './User';
import { useRouter } from 'next/router'
import store from '../../../../public/assets/icons/store.png'
import Image from 'next/image'
import { useState } from 'react'

const NavLinks: React.FC<NavLinksType> = ({handleOpen}) => {
    const classes = Style();
    const validateLogin = useSelector(validataionCode)
    const validate = useSelector(validataionCode)
    const router = useRouter()

    const cartQty = useSelector(selectTotalQTY)
    const [productLength, setProductLength] = useState(cartQty)
    const cartLength: any = typeof window !== 'undefined' ? window.localStorage.getItem('CartItems') : null
    const data = JSON.parse(cartLength)
    useEffect(() => {
        setProductLength(data?.length)
    }, [productLength, data?.length])

    const handlePersonalData = () => {
        return validate ? router.push({pathname: '/likes'}) : handleOpen()
    }

    return (
        <>
            <Box className={classes.linkWrapper}>
                <Box className={classes.likeButton} onClick={handlePersonalData}>
                    <FavoriteBorderIcon className={classes.likeIcon}/>
                </Box>
                <Link href="/cart" style={{cursor: 'pointer'}}>
                    <Box className={classes.likeButton}>
                        <Badge badgeContent={productLength} color="primary">
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
