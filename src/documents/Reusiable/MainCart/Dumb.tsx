import { Box } from '@mui/system'
import MainLoader from '../MainLoader/MainLoader'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Typography } from '@mui/material'
import { commafy } from '../Suggested/global'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { setAddItemToCart } from '../../../redux/CartSlice'
import React from 'react'
import PrimaryButton from "../PrimaryButton/PrimaryButton"

const Dumb = ({classes, mainData, handleSingleProduct, carousel, sendData, query, router, dispatch}: any) => (
    <Box className={carousel ? classes.carousel : classes.mainCartWrapper}>
            {mainData === undefined ?
                <Box className={carousel ? classes.carouselLoader : classes.loader}>
                    <MainLoader/>
                </Box> :
                mainData.map((item: any) =>
                    <Box className={classes.mainCart} key={item.id}>
                        {item.isFavorite ?
                            <FavoriteIcon className={classes.favoriteIconLiked} onClick={() => sendData(item.id)}/> :
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
                            <Box onClick={() => handleSingleProduct(item)}>
                                <PrimaryButton text="Sotib olish"/>
                            </Box>
                            <ShoppingCartIcon className={classes.shoppingCart}
                                              onClick={() => dispatch(setAddItemToCart(item))}/>
                        </Box>
                    </Box>
                )}
        </Box>
)
export default Dumb