import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { commafy } from '../Suggested/global'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { setAddItemToCart } from '../../../redux/CartSlice'
import React from 'react'

const ObjectCart = ({mainData, classes, carousel, handleSingleProduct, sendData, query, dispatch, PrimaryButton}: any) => (
    <Box className={carousel ? classes.mainCartCarousel : classes.mainCart} key={mainData.id}>
        {mainData.isFavorite ?
            <FavoriteIcon className={classes.favoriteIconLiked} onClick={() => sendData(mainData.id)}/> :
            <FavoriteBorderIcon className={classes.favoriteIcon} onClick={() => sendData(mainData.id)}/>
        }
        <Box onClick={() => handleSingleProduct(mainData)}>
            {mainData.state === 'New' ?
                <Typography className={classes.sale}>Yangilik</Typography> :
                mainData.status === 'New' ? <Typography className={classes.new}>Yangilik</Typography> : null
            }
            <Box className={classes.imageWrapper}>
                <img src={`https://nextstore.in/nextstore${mainData.photoUrl}`}
                     alt="image"
                     width={query ? '120px' : '180px'}
                     height={query ? '120px' : '180px'}
                     className={classes.mainImage}
                />
            </Box>
            <Typography className={classes.price}>{commafy(mainData.price)} so&apos;m</Typography>
            <Typography className={classes.title}>{mainData.nameUz}</Typography>
            <Typography className={classes.order}>{mainData.phone}</Typography>
        </Box>
        <Box className={classes.footer}>
            <Box onClick={() => handleSingleProduct(mainData)}>
                <PrimaryButton text="Sotib olish"/>
            </Box>
            <ShoppingCartIcon className={classes.shoppingCart}
                              onClick={() => dispatch(setAddItemToCart(mainData))}
            />
        </Box>
    </Box>
)

export default ObjectCart