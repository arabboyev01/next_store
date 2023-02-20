import {Box} from "@mui/system";
import Styles from "./brands.style"
import React from "react";
export type BrandsType = {
    data?: any
}
const Brands: React.FC<BrandsType> = ({data}) => {
    const classes = Styles();
    return(
        <Box className={classes.brandsWrapper}>
            {data.map((item: any) =>
                <Box className={classes.brandItem} key={item.id}>
                    <img src={`https://nextstore.in/nextstore${item.imageUrl}`} alt='brands' width={90} height={90}
                    style={{objectFit: "contain"}}
                    />
                </Box>
            )}
        </Box>
    )
}
export default Brands
