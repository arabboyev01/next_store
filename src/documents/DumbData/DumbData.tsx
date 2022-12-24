import {BrandsDataType, CategoryCartTypes, MainProductsType} from "../../../types/types";
import cat1 from "../../../public/assets/categories/cat1.png"
import cat2 from "../../../public/assets/categories/cat2.png"
import cat3 from "../../../public/assets/categories/cat3.png"
import cat4 from "../../../public/assets/categories/cat4.png"
import cat5 from "../../../public/assets/categories/cat5.png"
import cat6 from "../../../public/assets/categories/cat6.png"
import cat7 from "../../../public/assets/categories/cat7.png"
import cat8 from "../../../public/assets/categories/cat8.png"
import productImg from "../../../public/assets/images/productImage.png"
import hpImage from "../../../public/assets/brands/hp.png"
import acerImage from "../../../public/assets/brands/acer.png"
import asusImage from "../../../public/assets/brands/asus.png"
import samsungImage from "../../../public/assets/brands/samsung.png"
import appleImage from "../../../public/assets/brands/apple.png"
import msiImage from "../../../public/assets/brands/msi.png"
import miImage from "../../../public/assets/brands/mi.png"
import vivoImage from "../../../public/assets/brands/vivo.png"
import elmakonImage from "../../../public/assets/brands/elmakon.png"
import goodImage from "../../../public/assets/brands/goodzoone.png"
import mediaImage from "../../../public/assets/brands/mediapark.png"
import sandiqImage from "../../../public/assets/brands/sandiq.png"
import texnoImage from "../../../public/assets/brands/texnomart.png"
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

export const MainProducts: MainProductsType[] = [
    {
        id: 1,
        title: 'Apple Airpods Pro simsiz quloqchin , Oq rangda',
        img: productImg,
        price: '299 000 so’m',
        status: 'sale',
        order: 1230
    },
    {
        id: 2,
        title: 'Apple Airpods Pro simsiz quloqchin , Oq rangda',
        img: productImg,
        price: '299 000 so’m',
        status: 'new',
        order: 230
    },
    {
        id: 3,
        title: 'Apple Airpods Pro simsiz quloqchin , Oq rangda',
        img: productImg,
        price: '299 000 so’m',
        status: '',
        order: 230
    },
    {
        id: 4,
        title: 'Apple Airpods Pro simsiz quloqchin , Oq rangda',
        img: productImg,
        price: '299 000 so’m',
        status: 'sale',
        order: 230
    },
    {
        id: 5,
        title: 'Apple Airpods Pro simsiz quloqchin , Oq rangda',
        img: productImg,
        price: '299 000 so’m',
        status: '',
        order: 230
    },
    {
        id: 6,
        title: 'Apple Airpods Pro simsiz quloqchin , Oq rangda',
        img: productImg,
        price: '299 000 so’m',
        status: '',
        order: 230
    },
    {
        id: 7,
        title: 'Apple Airpods Pro simsiz quloqchin , Oq rangda',
        img: productImg,
        price: '299 000 so’m',
        status: 'new',
        order: 230
    },
    {
        id: 8,
        title: 'Apple Airpods Pro simsiz quloqchin , Oq rangda',
        img: productImg,
        price: '299 000 so’m',
        status: '',
        order: 230
    },
    {
        id: 9,
        title: 'Apple Airpods Pro simsiz quloqchin , Oq rangda',
        img: productImg,
        price: '299 000 so’m',
        status: '',
        order: 230
    },
    {
        id: 10,
        title: 'Apple Airpods Pro simsiz quloqchin , Oq rangda',
        img: productImg,
        price: '299 000 so’m',
        status: '',
        order: 230
    },
]
export const BrandsData: BrandsDataType[] = [
    {
        id:0,
        image:hpImage,
    },
    {
        id:1,
        image:acerImage,
    },
    {
        id:2,
        image:asusImage,
    },
    {
        id:3,
        image:samsungImage,
    },
    {
        id:4,
        image:appleImage,
    },
    {
        id:5,
        image:msiImage,
    },
    {
        id:6,
        image:miImage,
    },
    {
        id:7,
        image:vivoImage,
    },
]
export const BrandsStore: BrandsDataType[] = [
    {
        id:0,
        image:elmakonImage,
    },
    {
        id:1,
        image:goodImage,
    },
    {
        id:2,
        image:mediaImage,
    },
    {
        id:3,
        image:sandiqImage,
    },
    {
        id:4,
        image:texnoImage,
    },
]
