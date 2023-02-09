import {
    BrandsDataType,
    CategoryCartTypes,
    deliveryDumbDataType,
    PROFILE_LINK_DATA_TYPE,
    SUGGESION_DATA_TYPE
} from '../../../types/types';
import cat1 from '../../../public/assets/categories/cat1.png'
import cat2 from '../../../public/assets/categories/cat2.png'
import cat3 from '../../../public/assets/categories/cat3.png'
import cat4 from '../../../public/assets/categories/cat4.png'
import cat5 from '../../../public/assets/categories/cat5.png'
import cat6 from '../../../public/assets/categories/cat6.png'
import cat7 from '../../../public/assets/categories/cat7.png'
import cat8 from '../../../public/assets/categories/cat8.png'
import hpImage from '../../../public/assets/brands/hp.png'
import acerImage from '../../../public/assets/brands/acer.png'
import asusImage from '../../../public/assets/brands/asus.png'
import samsungImage from '../../../public/assets/brands/samsung.png'
import appleImage from '../../../public/assets/brands/apple.png'
import msiImage from '../../../public/assets/brands/msi.png'
import miImage from '../../../public/assets/brands/mi.png'
import vivoImage from '../../../public/assets/brands/vivo.png'
import elmakonImage from '../../../public/assets/brands/elmakon.png'
import goodImage from '../../../public/assets/brands/goodzoone.png'
import mediaImage from '../../../public/assets/brands/mediapark.png'
import sandiqImage from '../../../public/assets/brands/sandiq.png'
import texnoImage from '../../../public/assets/brands/texnomart.png'
import mac from '../../../public/assets/categories/mac.png'
import phone from '../../../public/assets/categories/phone.png'
import tablet from '../../../public/assets/categories/tablet.png'
import pots from '../../../public/assets/categories/pots.png'
import image from '../../../public/assets/images/productImage.png'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LogoutIcon from '@mui/icons-material/Logout';

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
export const CategoryCart: CategoryCartTypes[] = [
    {
        id: 1,
        name: 'Smartfonlar',
        img: cat1
    },
    {
        id: 2,
        name: 'Kompyuterlar va notebooklar',
        img: cat2
    },
    {
        id: 3,
        name: 'Televizorlar',
        img: cat3
    },
    {
        id: 4,
        name: 'Aqlli soatlar',
        img: cat4
    },
    {
        id: 5,
        name: 'Quloqchinlar',
        img: cat5
    },
    {
        id: 6,
        name: 'Konditsioner',
        img: cat6
    },
    {
        id: 7,
        name: 'Sovutkichlar',
        img: cat7
    },
    {
        id: 8,
        name: 'Kir yuvish mashinalari',
        img: cat8
    }
]

export const BrandsData: BrandsDataType[] = [
    {
        id: 0,
        image: hpImage,
    },
    {
        id: 1,
        image: acerImage,
    },
    {
        id: 2,
        image: asusImage,
    },
    {
        id: 3,
        image: samsungImage,
    },
    {
        id: 4,
        image: appleImage,
    },
    {
        id: 5,
        image: msiImage,
    },
    {
        id: 6,
        image: miImage,
    },
    {
        id: 7,
        image: vivoImage,
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
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },
    {
        id: 6,
    },
    {
        id: 7,
    },
    {
        id: 8,
    },
    {
        id: 9,
    },
    {
        id: 10,
    },
    {
        id: 11,
    },
    {
        id: 12,
    },
]

export const CATEGORY_BUTTONS = [
    {
        id: 0,
        category: 'MacBook',
        image: mac,
    },
    {
        id: 1,
        category: 'I Phone',
        image: phone,
    },
    {
        id: 2,
        category: 'IPad',
        image: tablet,
    },
    {
        id: 2,
        category: 'Airpods',
        image: pots,
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

