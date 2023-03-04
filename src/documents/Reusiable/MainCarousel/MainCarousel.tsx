import { Box } from '@mui/system';
import Style from './mainCarousel.style'
import React from 'react';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, Typography, useMediaQuery } from '@mui/material';
import { HomeCarouselDataType, MainCarouselPropsType } from '../../../../types/types'

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
            <button className={buttonText ? classes.arrowBackPrimary : classes.arrowBack} id="swiper-back">
                <ArrowBackIosIcon className={classes.navigateIcon}/>
            </button>
            <Swiper modules={[Pagination, Navigation]}{...setting}
            className={classes.swiper} style={{backgroundColor: bgColor, height: height}}
            >
                {data?.map(({id, title, subTitle, imageUrl}: HomeCarouselDataType) =>
                    <SwiperSlide key={id} className={classes.slide}>
                        <Box className={classes.textContent}>
                            <Typography className={buttonText ? classes.textTop : classes.title} style={{color: color}}>{title}</Typography>
                            <Typography className={classes.sub} style={{color: color}} >{subTitle}</Typography>
                        </Box>
                        <img src={`https://nextstore.in/nextstore${imageUrl}`} alt="rasm" width={query ? 150 : 300} height={query ? 150 : 350}
                               className={sticky ? classes.showImage : classes.images}
                        />
                        {buttonText ? <Button className={classes.buttons}>{buttonText}</Button> : null}
                    </SwiperSlide>
                )}
            </Swiper>
            <button className={buttonText ? classes.arrowForwardPrimary : classes.arrowForward} id="swiper-forward">
                <ArrowForwardIosIcon className={classes.navigateIcon}/>
            </button>
        </Box>
    )
}
export default MainCarousel;
