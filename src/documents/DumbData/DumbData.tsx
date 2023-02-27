import {
    BrandsDataType,
    deliveryDumbDataType, HomeCarouselDataType,
    PROFILE_LINK_DATA_TYPE,
    SUGGESION_DATA_TYPE
} from '../../../types/types';
import elmakonImage from '../../../public/assets/brands/elmakon.png'
import goodImage from '../../../public/assets/brands/goodzoone.png'
import mediaImage from '../../../public/assets/brands/mediapark.png'
import sandiqImage from '../../../public/assets/brands/sandiq.png'
import texnoImage from '../../../public/assets/brands/texnomart.png'
import image from '../../../public/assets/images/productImage.png'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LogoutIcon from '@mui/icons-material/Logout';
import Iphone from "../../../public/assets/images/iphone.png"

export const SuggestedDataCarousel: HomeCarouselDataType[] = [
    {
        id: 0,
        title: 'Mahsulot narxidan 1% qaytaramiz.',
        subtitle: 'Nasiya savdo uchun har bir tolovdan 1% qaytaramiz.',
        imageUrl: Iphone,
    },
    {
        id: 1,
       title: 'Mahsulot narxidan 1% qaytaramiz.',
        subtitle: 'Nasiya savdo uchun har bir tolovdan 1% qaytaramiz.',
        imageUrl: Iphone,
    },
    {
        id: 2,
        title: 'Mahsulot narxidan 1% qaytaramiz.',
        subtitle: 'Nasiya savdo uchun har bir tolovdan 1% qaytaramiz.',
        imageUrl: Iphone,
    },
    {
        id: 3,
        title: 'Mahsulot narxidan 1% qaytaramiz.',
        subtitle: 'Nasiya savdo uchun har bir tolovdan 1% qaytaramiz.',
        imageUrl: Iphone,
    },
]

export const PROFILE_LINK_DATA: PROFILE_LINK_DATA_TYPE[] = [
    {
        id: 0,
        icon: <LibraryAddCheckIcon/>,
        name: 'Mening buyurtmalarim',
        type: 'order',
    },
    {
        id: 1,
        icon: <FavoriteBorderIcon/>,
        name: 'Sevimlilar',
        type: 'likes',
    },
    {
        id: 2,
        icon: <LocationOnIcon/>,
        name: 'Manzillar',
        type: 'location',
    },
    {
        id: 3,
        icon: <LogoutIcon/>,
        name: 'Tizimdan chiqish',
        type: 'logout',
    },
]

export const BrandsStore: BrandsDataType[] = [
    {
        id: 0,
        image: elmakonImage,
    },
    {
        id: 1,
        image: goodImage,
    },
    {
        id: 2,
        image: mediaImage,
    },
    {
        id: 3,
        image: sandiqImage,
    },
    {
        id: 4,
        image: texnoImage,
    },
]

export const numsRange = [
    {
        id: 1,
    },
    {
        id: 3,
    },
    {
        id: 6,
    },
    {
        id: 9,
    },
    {
        id: 12,
    },
]

export const deliveryDumbData: deliveryDumbDataType = {
    name: 'Apple',
    delivery: 15000,
    day: '15 kun',
}
export const SUGGESTION_DATA: SUGGESION_DATA_TYPE[] = [
    {
        id: 0,
        image: image,
        name: 'Notebook Apple Macbook Pro 13" 2.4 2019 Intel core i5  DDR3 8 GB SSD 256 GB',
        shop: 'Sandiq shop',
        price: '15232000',
        status: 'Yangi',
    },
    {
        id: 1,
        image: image,
        name: 'Notebook Apple Macbook Pro 13" 2.4 2019 Intel core i5  DDR3 8 GB SSD 256 GB',
        shop: 'Mac Bro',
        price: '16232000',
        status: 'Yangi',
    },
    {
        id: 2,
        image: image,
        name: 'Notebook Apple Macbook Pro 13" 2.4 2019 Intel core i5  DDR3 8 GB SSD 256 GB',
        shop: 'Xiaomi',
        price: '10232000',
        status: 'Yangi',
    },
    {
        id: 3,
        image: image,
        name: 'Notebook Apple Macbook Pro 13" 2.4 2019 Intel core i5  DDR3 8 GB SSD 256 GB',
        shop: 'Mac Bro',
        price: '11232000',
        status: 'Yangi',
    },
    {
        id: 4,
        image: image,
        name: 'Notebook Apple Macbook Pro 13" 2.4 2019 Intel core i5  DDR3 8 GB SSD 256 GB',
        shop: 'Sandiq shop',
        price: '9232000',
        status: 'Yangi',
    },
    {
        id: 5,
        image: image,
        name: 'Notebook Apple Macbook Pro 13" 2.4 2019 Intel core i5  DDR3 8 GB SSD 256 GB',
        shop: 'Sandiq shop',
        price: '8232000',
        status: 'Yangi',
    },
    {
        id: 6,
        image: image,
        name: 'Notebook Apple Macbook Pro 13" 2.4 2019 Intel core i5  DDR3 8 GB SSD 256 GB',
        shop: 'Sandiq shop',
        price: '7232000',
        status: 'Yangi',
    },
]

export const emptyData = {
    title: "Yoqtirgan mahsulotlar sahifangizda xech narsa topilmadi",
    desc1: "Asosiy mahsulotlarga qayting",
    desc2: "Yoqtirgan mahsulotingizni tanlang",
    desc3: "Yurakcha tugmasini bosing",
    buttonText: "Mahsulotlarga qaytish",
}
export const emptyProfile = {
    title: "Buyutmalar sahifangizda xech narsa topilmadi",
    desc1: "Biror bir mahsulotni tanlang",
    desc2: "Unga buyurtma bering",
    desc3: "Va shu yerda buyurtmalaringizni ko'ring",
    buttonText: "Mahsulotlarga qaytish",
}
