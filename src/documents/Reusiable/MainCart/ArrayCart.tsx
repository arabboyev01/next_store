import { Box } from '@mui/system'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Typography } from '@mui/material'
import { commafy } from '../Suggested/global'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { setAddItemToCart } from '../../../redux/CartSlice'
import React from 'react'

const ArrayCart = ({mainData, classes, carousel, handleSingleProduct, sendData, query, dispatch, PrimaryButton, liked}: any) => (
    <>
        {mainData.map((item: any, index: number) =>
            <Box className={carousel ? classes.mainCartCarousel : classes.mainCart} key={index}>
                {liked === item.id || item.isFavorite ?
                    <FavoriteIcon className={classes.favoriteIconLiked}
                                  onClick={() => sendData(item.id)}/> :
                    <FavoriteBorderIcon className={classes.favoriteIcon}
                                        onClick={() => sendData(item.id)}/>
                }
                <Box onClick={() => handleSingleProduct(item)}>
                    {item.state === 'New' ?
                        <Typography className={classes.sale}>Yangilik</Typography> :
                        item.status === 'New' ?
                            <Typography className={classes.new}>Yangilik</Typography> : null
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
                                      onClick={() => dispatch(setAddItemToCart(item))}
                    />
                </Box>
            </Box>
        )}
    </>
)

export default ArrayCart