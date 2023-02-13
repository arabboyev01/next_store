import {Box} from "@mui/system";
import Style from "./home.style"
import MainCarousel from "../../documents/Reusiable/MainCarousel/MainCarousel";
import {HomeCarouselData, SecondCarousel} from "./HomeCarouselData";
import SecondaryCart from "../../documents/Reusiable/SecondaryCart/SecondaryCart";
import {BrandsData, BrandsStore, CategoryCart} from "../../documents/DumbData/DumbData";
import MainTitle from "../../documents/Reusiable/MainTitle/MainTitle";
import SeeMoreButton from "../../documents/Reusiable/SeeMore/SeeMore";
import {useMediaQuery} from "@mui/material";
import Brands from "../../documents/Reusiable/Brands/Brands";
import { useSelector } from "react-redux";
import MainCart from "../../documents/Reusiable/MainCart/MainCart";

const HomeComponent = () => {
    const classes = Style();
    const query = useMediaQuery('@media(max-width: 650px)');
    const {mainData} = useSelector((state: any) => state.cart);
    const data = mainData[mainData.length - 1]
    const firstSlice = data === undefined ? undefined : data.content.slice(0, 5)
    const secondSlice = data === undefined ? undefined : data.content.slice(5, 10)

    return (
        <Box className={classes.homeWrapper}>
            <Box className={classes.contentWrapper}>
                <MainCarousel data={HomeCarouselData} height={query ? 200 : 330} bgColor='rgb(48, 149, 41)' color='#fff'/>
            </Box>
            <Box>
                <MainTitle title="Kategoriyalar" />
                <SecondaryCart data={CategoryCart}/>
            </Box>
            <Box className={classes.seeMore}>
                <SeeMoreButton text='Batafsil'/>
            </Box>
            <Box className={classes.mainSales}>
                <MainTitle title="Eng ko'p sotilganlar"/>
                <MainCart mainData={firstSlice} carousel='carousel'/>
                <Box className={classes.seeMore}>
                    <SeeMoreButton text="Ko'proq korish"/>
                </Box>
            </Box>
            <Box className={classes.contentWrapper}>
                <MainCarousel data={SecondCarousel} height={240} bgColor='#333' color='#fff'/>
            </Box>
            <Box className={classes.mainSales}>
                <MainTitle title="Eng ko'p sotilganlar"/>
                <MainCart mainData={secondSlice} carousel='carousel'/>
                <Box className={classes.seeMore}>
                    <SeeMoreButton text="Ko'proq ko'rish"/>
                </Box>
            </Box>
            <Box className={classes.page}>
                <MainTitle title="Brendlar bo'yicha"/>
                <Brands data={BrandsData}/>
            </Box>
            <Box className={classes.contentWrapper}>
                <MainCarousel data={SecondCarousel} height={240} bgColor='#333' color='#fff'/>
            </Box>
            <Box className={classes.page}>
                <MainTitle title="Do'konlarimiz"/>
                <Brands data={BrandsStore}/>
            </Box>
        </Box>
    )
}

export default HomeComponent;
