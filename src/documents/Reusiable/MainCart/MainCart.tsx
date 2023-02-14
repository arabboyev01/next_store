import Styles from './maincart.style';
import { Box } from '@mui/system';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Typography, useMediaQuery } from '@mui/material';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { setAddItemToCart, setSingleProduct, } from '../../../redux/CartSlice'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import React, {useState} from 'react';
import MainLoader from '../MainLoader/MainLoader';
import { mainDataType } from '../../../../types/types';
import { commafy } from '../Suggested/global';
import axios from 'axios';
import { apiAddress } from '../../../../config';
import FavoriteIcon from '@mui/icons-material/Favorite';

const MainCart: React.FC<mainDataType> = ({mainData, carousel}) => {
    const classes = Styles();
    const query = useMediaQuery('@media(max-width: 650px)');
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSingleProduct = (data: any) => {
        dispatch(setSingleProduct(data));
        router.push({pathname: '/single-products', query: {id: data.id}})
    }
    const [liked, setLiked] = useState<null | string>(null)

    const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
    const sendData = (id: number) => {
        axios.get(`${apiAddress}/favorite-product/${id}`, { headers : {
            Authorization: `Bearer ${token}`
        }}).then(res => {
            setLiked(res.data.message)
            console.log(res)
        }).catch(err => console.log(err))
    }
    console.log(mainData)

    return (
        <Box className={carousel ? classes.carousel : classes.mainCartWrapper}>
            {mainData === undefined ?
                <Box className={carousel ? classes.carouselLoader : classes.loader}>
                    <MainLoader/>
                </Box> :
                mainData.map((item: any) =>
                    <Box className={classes.mainCart} key={item.id}>
                        {item.isFavorite ? <FavoriteIcon className={classes.favoriteIconLiked} onClick={() => sendData(item.id)}/> :
                            <FavoriteBorderIcon className={classes.favoriteIcon} onClick={() => sendData(item.id)}/>
                        }
                        <Box onClick={() => handleSingleProduct(item)}>
                            {item.state === 'New' ?
                                <Typography className={classes.sale}>Yangilik</Typography> :
                                item.status === 'New' ? <Typography className={classes.new}>Yangilik</Typography> : null
                            }
                            <Box className={classes.imageWrapper}>
                                <img src={`https://nextstore.in/nextstore${item.photoUrl}`}
                                     alt="image"
                                     width={query ? '120px' : '180px'}
                                     height={query ? '120px' : '180px'}
                                     className={classes.mainImage}
                                />
                            </Box>
                            <Typography className={classes.price}>{commafy(item.price)} so&apos;m</Typography>
                            <Typography className={classes.title}>{item.name}</Typography>
                            <Typography className={classes.order}>{item.phone}</Typography>
                        </Box>
                        <Box className={classes.footer}>
                            <Box onClick={() => router.push({pathname: '/single-products', query: {id: item.id}})}>
                                <PrimaryButton text="Sotib olish"/>
                            </Box>
                            <ShoppingCartIcon className={classes.shoppingCart} onClick={() => dispatch(setAddItemToCart(item))}/>
                        </Box>
                    </Box>
                )}
        </Box>
    )
}
export default MainCart;
