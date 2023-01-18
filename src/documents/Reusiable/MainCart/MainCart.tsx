import Styles from "./maincart.style"
import {Box} from "@mui/system";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from "next/image";
import {Typography, useMediaQuery} from "@mui/material";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { setAddItemToCart, setSingleProduct } from "../../../redux/CartSlice"
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router'
import {useState, useEffect} from "react";
import {apiAddress} from "../../../../config";
import axios from "axios";

const MainCart = ({mainData}: any) => {
    const classes = Styles();
    const [data, setData] = useState<any | undefined>([])
    const query = useMediaQuery('@media(max-width: 650px)')
    const dispatch = useDispatch();
    const onAddToCart = (data: any) => {
        dispatch(setAddItemToCart(data));
    };
    const router = useRouter()
    const handleSingleProduct = (data: any) => {
        dispatch(setSingleProduct(data));
        router.push({pathname: '/single-products', query: {id: data.id}})
    }

    useEffect(() => {
        axios.get(`${apiAddress}/product`).then((data) => {
            setData(data.data.content)
        }).catch(error => {
            console.log(error)
        })
    }, [apiAddress, setData])

    return (
        <Box className={classes.mainCartWrapper}>
            {data.map((item: any) =>
                <Box className={classes.mainCart} key={item.id}>
                    <FavoriteBorderIcon className={classes.favoriteIcon}/>
                    <Box onClick={() => handleSingleProduct(item)}>
                            {item.state === 'New' ?
                                <Typography className={classes.sale}>Yangilik</Typography> : item.status === 'New' ?
                                    <Typography className={classes.new}>Yangilik</Typography> : null}
                            <Image src={item.photoUrl} alt='image' width={query ? 120 : 180} height={query ? 120 : 180} className={classes.mainImage}/>
                            <Typography className={classes.price}>{item.price} so&apos;m</Typography>
                            <Typography className={classes.title}>{item.name}</Typography>
                            <Typography className={classes.order}>{item.phone}</Typography>
                    </Box>
                    <Box className={classes.footer}>
                        <Box onClick={() => router.push({pathname: '/single-products', query: {id: item.id}})}>
                            <PrimaryButton text="Sotib olish"/>
                        </Box>
                        <ShoppingCartIcon className={classes.shoppingCart} onClick={()=> onAddToCart(item)}/>
                    </Box>
                </Box>
            )}
        </Box>
    )
}
export default MainCart;
