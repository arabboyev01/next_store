import { Box } from '@mui/system';
import Style from './mainCarousel.style'
import React from 'react';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Image from 'next/image';
import { Typography, useMediaQuery } from '@mui/material';
import { HomeCarouselDataType } from '../../../../types/types'

export type MainCarouselPropsType = {
    data?: any
    height: number
    bgColor: string
}
const MainCarousel: React.FC<MainCarouselPropsType> = ({data, height, bgColor}) => {
    const classes = Style();
    const query = useMediaQuery('@media(max-width: 650px)');
    const setting = {
        pagination: {clickable: true},
        slidesPerView: 1,
        navigation: {nextEl: '#swiper-forward', prevEl: '#swiper-back'},
    }

    return (
        <Box className={classes.head}>
            <button className={classes.arrowBack} id="swiper-back">
                <ArrowBackIosIcon className={classes.navigateIcon}/>
            </button>
            <Swiper modules={[Pagination, Navigation]}{...setting} >
                {data?.map(({id, title, subtitle, image}: HomeCarouselDataType) =>
                    <SwiperSlide key={id} className={classes.swiper}
                                 style={{backgroundColor: `${bgColor}`, height: `${height}`}}>
                        <Box className={classes.textContent}>
                            <Typography className={classes.title}>{title}</Typography>
                            <Typography className={classes.sub}>{subtitle}</Typography>
                        </Box>
                        <Image src={image.src} alt="rasm" width={query ? 150 : 300} height={query ? 150 : 300}
                               className={classes.images}
                        />
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
