import Styles from "./suggested.style"
import {Box} from "@mui/system";
import {SUGGESTION_DATA} from "../../DumbData/DumbData"
import {SUGGESION_DATA_TYPE} from "../../../../types/types";
import Image from "next/image";
import {Typography} from "@mui/material";
const Suggested = () => {
    const classes = Styles()
    const sortByPrice = () => {

    }
    return(
        <Box className={classes.suggestWrapper}>
            <Box className={classes.category}>
                <input type="checkbox" name="price" value="price"/>
                <label className={classes.label} htmlFor="subscribeNews">Arzon narxlardan boshlash</label>
            </Box>
            {SUGGESTION_DATA.map(({id, image, name, shop, price, status}: SUGGESION_DATA_TYPE) =>
                <Box className={classes.products} key={id}>
                    <Box className={classes.header}>
                        <Image src={image.src} alt={name} width={60} height={50} />
                        <Typography className={classes.name}>{name}</Typography>
                    </Box>
                    <Typography className={classes.shop}>{shop}</Typography>
                    <Typography className={classes.price}>{price}</Typography>
                    <Typography className={classes.status}>{status}</Typography>
                </Box>
            )}
        </Box>
    )
}
export default Suggested
