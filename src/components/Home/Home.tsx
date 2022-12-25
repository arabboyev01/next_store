import {Box} from "@mui/system";
import Style from "./home.style"
import MainCarousel from "../../documents/Reusiable/MainCarousel/MainCarousel";
import {HomeCarouselData, SecondCarousel} from "./HomeCarouselData";
import SecondaryCart from "../../documents/Reusiable/SecondaryCart/SecondaryCart";
import {BrandsData, BrandsStore, CategoryCart, MainProducts} from "../../documents/DumbData/DumbData";
import MainTitle from "../../documents/Reusiable/MainTitle/MainTitle";
import SeeMoreButton from "../../documents/Reusiable/SeeMore/SeeMore";
import {useMediaQuery} from "@mui/material";
import MainCart from "../../documents/Reusiable/MainCart/MainCart";
import Brands from "../../documents/Reusiable/Brands/Brands";
import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import { connect } from "react-redux";
import {mapStateToProps} from "./props";

const HomeComponent = () => {
    const classes = Style();
    const query = useMediaQuery('@media(max-width: 650px)');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'Add_to_products', payload: MainProducts });
    }, [dispatch,MainProducts]);
    return(
        <Box className={classes.homeWrapper}>
            <Box className={classes.contentWrapper}>
                <MainCarousel data={HomeCarouselData} height={query ? '100px' : '380px'}/>
            </Box>
            <Box>
                <MainTitle title="Kategoriyalar" />
                <SecondaryCart data={CategoryCart} />
            </Box>
            <Box className={classes.seeMore}>
                <SeeMoreButton text='Batafsil' />
            </Box>
            <Box className={classes.mainSales}>
                <MainTitle title="Eng kop sotilganlar" />
                <MainCart mainData={MainProducts}  />
                <Box className={classes.seeMore}>
                    <SeeMoreButton text='Koproq korish' />
                </Box>
            </Box>
            <Box className={classes.contentWrapper}>
                <MainCarousel data={SecondCarousel} height={query ? '100px' : '240px'}/>
            </Box>
            <Box className={classes.mainSales}>
                <MainTitle title="Eng kop sotilganlar" />
                <MainCart mainData={MainProducts}  />
                <Box className={classes.seeMore}>
                    <SeeMoreButton text='Koproq korish' />
                </Box>
            </Box>
            <Box className={classes.page}>
                <MainTitle title="Brendlar boyicha" />
                <Brands data={BrandsData}/>
            </Box>
            <Box className={classes.contentWrapper}>
                <MainCarousel data={SecondCarousel} height={query ? '100px' : '240px'}/>
            </Box>
            <Box className={classes.page}>
                <MainTitle title="Dokonlarimiz" />
                <Brands data={BrandsStore}/>
            </Box>
        </Box>
    )
}

export default connect(mapStateToProps)(HomeComponent);
