import { deliveryDumbDataType, HomeCarouselDataType, PROFILE_LINK_DATA_TYPE } from '../../../types/types';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LogoutIcon from '@mui/icons-material/Logout';
import Iphone from "../../../public/assets/images/iphone.png"

export const SuggestedDataCarousel: HomeCarouselDataType[] = [
    {
        id: 0,
        title: 'Mahsulot narxidan 1% qaytaramiz.',
        subTitle: 'Nasiya savdo uchun har bir tolovdan 1% qaytaramiz.',
        imageUrl: Iphone,
    },
    {
        id: 1,
       title: 'Mahsulot narxidan 1% qaytaramiz.',
        subTitle: 'Nasiya savdo uchun har bir tolovdan 1% qaytaramiz.',
        imageUrl: Iphone,
    },
    {
        id: 2,
        title: 'Mahsulot narxidan 1% qaytaramiz.',
        subTitle: 'Nasiya savdo uchun har bir tolovdan 1% qaytaramiz.',
        imageUrl: Iphone,
    },
    {
        id: 3,
        title: 'Mahsulot narxidan 1% qaytaramiz.',
        subTitle: 'Nasiya savdo uchun har bir tolovdan 1% qaytaramiz.',
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
