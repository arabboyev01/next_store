import { Box } from '@mui/system';
import Style from './mainCarousel.style'
import React from 'react';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Image from 'next/image';
import { Button, Typography, useMediaQuery } from '@mui/material';
import { HomeCarouselDataType } from '../../../../types/types'

export type MainCarouselPropsType = {
    data?: any
    height: number
    bgColor: string
    color: string
    sticky?: any
    buttonText?: string
}
const MainCarousel: React.FC<MainCarouselPropsType> = ({data, height, bgColor, color, sticky, buttonText}) => {
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
            <Swiper modules={[Pagination, Navigation]}{...setting}
            className={classes.swiper} style={{backgroundColor: bgColor, height: height}}
            >
                {data?.map(({id, title, subtitle, image}: HomeCarouselDataType) =>
                    <SwiperSlide key={id} className={classes.slide}>
                        <Box className={classes.textContent}>
                            <Typography className={buttonText ? classes.textTop : classes.title} style={{color: color}}>{title}</Typography>
                            <Typography className={classes.sub} style={{color: color}} >{subtitle}</Typography>
                        </Box>
                        <Image src={image.src} alt="rasm" width={query ? 150 : 300} height={query ? 150 : 350}
                               className={sticky ? classes.showImage : classes.images}
                        />
                        {buttonText ? <Button className={classes.buttons}>{buttonText}</Button> : null}
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
