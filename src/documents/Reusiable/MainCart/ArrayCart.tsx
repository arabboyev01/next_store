import { Box } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Typography } from '@mui/material';
import { commafy } from '../Suggested/global';
import { setAddItemToCart } from '../../../redux/CartSlice';
import ShoppingCart from '../../../../public/assets/icons/shoppingCart.png'
import Image from 'next/image'
import defaultImage from '../../../../public/assets/images/defaul_image.png'


const ArrayCart =
    ({
         mainData,
         classes,
         carousel,
         handleSingleProduct,
         sendData,
         query,
         dispatch,
         PrimaryButton
     }: any) => (
        <>
            {mainData.map((item: any, index: number) =>
                <Box className={carousel ? classes.mainCartCarousel : classes.mainCart} key={index}>
                    {(item.isFavorite) ?
                        <FavoriteIcon className={classes.favoriteIconLiked}
                                      onClick={() => sendData(item.id, dispatch)}/> :
                        <FavoriteBorderIcon className={classes.favoriteIcon}
                                            onClick={() => sendData(item.id, dispatch)}/>
                    }

                    <Box onClick={() => handleSingleProduct(item)}>
                        {item.state === 'New' ?
                            <Typography className={classes.sale}>Yangilik</Typography> :
                            item.status === 'Sale' ?
                                <Typography className={classes.new}>Chegirma</Typography> : null
                        }
                        <Box className={classes.imageWrapper}>
                            <img src={!item.photoUrl ? defaultImage.src : `https://nextstore.in/nextstore${item?.photoUrl}`}
                                 className={classes.mainImage}
                                 width={query ? '120px' : '180px'}
                                 height={query ? '120px' : '180px'}
                                 alt="image"
                            />
                        </Box>
                        <Typography className={classes.price}>{commafy(item.price)} so&apos;m</Typography>
                        <Typography className={classes.title}>{item.name}</Typography>
                        <Typography className={classes.order}>{item.phone === "" ? "Tel raqam kirgazilmagan" : item.phone}</Typography>
                    </Box>
                    <Box className={classes.footer}>
                        <Box onClick={() => handleSingleProduct(item)}><PrimaryButton text="Sotib olish"/></Box>
                        <Image
                            onClick={() => dispatch(setAddItemToCart(item))}
                            className={classes.shoppingCart}
                            src={ShoppingCart.src}
                            width={20}
                            height={20}
                            alt="shoppingCart"
                        />
                    </Box>
                </Box>
            )}
        </>
    )

export default ArrayCart;