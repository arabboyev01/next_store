import {Box} from "@mui/system";
import Style from "./home.style"
import MainCarousel from "../../documents/Reusiable/MainCarousel/MainCarousel";
import {HomeCarouselData, SecondCarousel} from "./HomeCarouselData";
import SecondaryCart from "../../documents/Reusiable/SecondaryCart/SecondaryCart";
import {BrandsData, BrandsStore, CategoryCart} from "../../documents/DumbData/DumbData";
import MainTitle from "../../documents/Reusiable/MainTitle/MainTitle";
import SeeMoreButton from "../../documents/Reusiable/SeeMore/SeeMore";
import {useMediaQuery} from "@mui/material";
import MainCart from "../../documents/Reusiable/MainCart/MainCart";
import Brands from "../../documents/Reusiable/Brands/Brands";
import {useEffect, useState} from "react";
import {fetchData} from "../../redux/CartSlice";

const HomeComponent = () => {
    const classes = Style();
    const query = useMediaQuery('@media(max-width: 650px)');
    const [data, setData] = useState([])
    useEffect(() => {fetchData(setData)}, [])

    return (
        <Box className={classes.homeWrapper}>
            <Box className={classes.contentWrapper}>
                <MainCarousel data={HomeCarouselData} height={query ? 100 : 380}/>
            </Box>
            <Box>
                <MainTitle title="Kategoriyalar"/>
                <SecondaryCart data={CategoryCart}/>
            </Box>
            <Box className={classes.seeMore}>
                <SeeMoreButton text='Batafsil'/>
            </Box>
            <Box className={classes.mainSales}>
                <MainTitle title="Eng ko'p sotilganlar"/>
                <MainCart mainData={data}/>
                <Box className={classes.seeMore}>
                    <SeeMoreButton text="Ko'proq korish"/>
                </Box>
            </Box>
            <Box className={classes.contentWrapper}>
                <MainCarousel data={SecondCarousel} height={query ? 100 : 240}/>
            </Box>
            <Box className={classes.mainSales}>
                <MainTitle title="Eng ko'p sotilganlar"/>
                <MainCart mainData={data}/>
                <Box className={classes.seeMore}>
                    <SeeMoreButton text="Ko'proq ko'rish"/>
                </Box>
            </Box>
            <Box className={classes.page}>
                <MainTitle title="Brendlar bo'yicha"/>
                <Brands data={BrandsData}/>
            </Box>
            <Box className={classes.contentWrapper}>
                <MainCarousel data={SecondCarousel} height={query ? 100 : 240}/>
            </Box>
            <Box className={classes.page}>
                <MainTitle title="Do'konlarimiz"/>
                <Brands data={BrandsStore}/>
            </Box>
        </Box>
    )
}

export default HomeComponent;
