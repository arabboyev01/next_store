import {Box} from "@mui/system";
import Style from "./mainCarousel.style"
import React from "react";
import {Pagination, Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/bundle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Image from "next/image";
import {useMediaQuery} from "@mui/material";

export type MainCarouselPropsType = {
    data?: any,
    height: number,
}
const MainCarousel: React.FC<MainCarouselPropsType> = ({data, height}) => {
    const classes = Style();
    const query = useMediaQuery('@media(max-width: 650px)');
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
                        // style={{backgroundImage: `url(${item.image.src})`, height: height}}
                        className={classes.swiper}
                    >
                        <Image src={item.image.src} alt='rasm' width={query ? 350 : 1230} height={height} className={classes.carouselImage}/>
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
