import {Box} from "@mui/system";
import Style from "./mainCarousel.style"
import React from "react";
import {Pagination, Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/bundle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export type MainCarouselPropsType = {
    data?: any,
    height: string,
}
const MainCarousel: React.FC<MainCarouselPropsType> = ({data, height}) => {
    const classes = Style();
    const setting = {
        pagination: {
            clickable: true,
        },
        slidesPerView: 1,
        navigation: {nextEl: "#swiper-forward", prevEl: "#swiper-back"},
    }
    return(
        <Box className={classes.carouselWrapper}>
            <button className={classes.arrowBack} id="swiper-back">
                <ArrowBackIosIcon className={classes.navigateIcon} />
            </button>
            <Swiper
                modules={[Pagination, Navigation]}
                {...setting}
            >
                {data.map((item: any) =>
                    <SwiperSlide
                        key={item.id}
                        style={{backgroundImage: `url(${item.image.src})`, height: height}}
                        className={classes.swiper}
                    >

                    </SwiperSlide>
                )}
            </Swiper>
            <button className={classes.arrowForward} id="swiper-forward">
                <ArrowForwardIosIcon className={classes.navigateIcon}/>
            </button>
        </Box>
    )
}
export default MainCarousel;
