import {Box} from "@mui/system";
import Styles from "./brands.style"
import React from "react";
import Image from "next/image";
export type BrandsType = {
    data?: any
}
const Brands: React.FC<BrandsType> = ({data}) => {
    const classes = Styles();
    return(
        <Box className={classes.brandsWrapper}>
            {data.map((item: any) =>
                <Box className={classes.brandItem} key={item.id}>
                    <Image src={item.image} alt='brands' width={90} height={90}/>
                </Box>
            )}
        </Box>
    )
}
export default Brands
