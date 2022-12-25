import React from "react";
import Style from "./product.style"
import {Box} from "@mui/system";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Thumbs, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import Image from "next/image";

export type ProductImageType = {
    image?: any
}
const ProductImage: React.FC<ProductImageType> = ({image}) => {
    const classes = Style();
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Box className={classes.imageWrapper}>
            <Swiper
                spaceBetween={10}
                // thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Thumbs, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={image} alt='product_image' width={387} height={370}/>
                </SwiperSlide>
            </Swiper>
            <Swiper
                // onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={image} alt='product_image' width={85} height={69}/>
                </SwiperSlide>
            </Swiper>
        </Box>
    )
}
export default ProductImage;
