import {Box} from "@mui/system";
import Style from "./home.style"
import MainCarousel from "../../documents/Reusiable/MainCarousel/MainCarousel";
import {HomeCarouselData, SecondCarousel} from "./HomeCarouselData";
import SecondaryCart from "../../documents/Reusiable/SecondaryCart/SecondaryCart";
import {CategoryCart, MainProducts} from "../../documents/DumbData/DumbData";
import MainTitle from "../../documents/Reusiable/MainTitle/MainTitle";
import SeeMoreButton from "../../documents/Reusiable/SeeMore/SeeMore";
import {useMediaQuery} from "@mui/material";
import MainCart from "../../documents/Reusiable/MainCart/MainCart";
const HomeComponent = () => {
    const classes = Style();
    const query = useMediaQuery('@media(max-width: 650px)')
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
                <MainCart data={MainProducts} />
                <Box className={classes.seeMore}>
                    <SeeMoreButton text='Koproq korish' />
                </Box>
            </Box>
            <Box className={classes.contentWrapper}>
                <MainCarousel data={SecondCarousel} height={query ? '100px' : '240px'}/>
            </Box>
            <Box className={classes.mainSales}>
                <MainTitle title="Eng kop sotilganlar" />
                <MainCart data={MainProducts} />
                <Box className={classes.seeMore}>
                    <SeeMoreButton text='Koproq korish' />
                </Box>
            </Box>
        </Box>
    )
}
export default HomeComponent;
