import Styles from "./suggested.style"
import {Box} from "@mui/system";
import {SUGGESTION_DATA} from "../../DumbData/DumbData"
import {SUGGESION_DATA_TYPE} from "../../../../types/types";
import Image from "next/image";
import {Button, Typography} from "@mui/material";
import {useEffect, useState} from "react"
import {commafy, sortByPriceDumb} from "./global";

const Suggested = () => {
    const classes = Styles();
    const [checkbox, setCheckbox] = useState(false)
    const [sorted, setSorted] = useState(SUGGESTION_DATA)
    const sortByPrice = sortByPriceDumb(SUGGESTION_DATA)

    useEffect(() => {
        setSorted(checkbox ? sortByPrice : SUGGESTION_DATA)
    }, [checkbox, sortByPrice])

    return(
        <Box className={classes.suggestWrapper}>
            <Box className={classes.category}>
                <input type="checkbox" name="price" value="price" onChange={(e) => setCheckbox(e.target.checked)}/>
                <label className={classes.label} htmlFor="subscribeNews">Arzon narxlardan boshlash</label>
            </Box>
            {sorted.map(({id, image, name, shop, price, status}: SUGGESION_DATA_TYPE) =>
                <Box className={classes.products} key={id}>
                    <Box className={classes.headers}>
                        <Image src={image.src} alt={name} width={60} height={50} />
                        <Typography className={classes.name}>{name}</Typography>
                    </Box>
                    <Box className={classes.header}>
                        <Typography className={classes.shop}>{shop}</Typography>
                        <Typography className={classes.price}>{commafy(price)} so&apos;m</Typography>
                    </Box>
                    <Box className={classes.header}>
                        <Typography className={status !== 'B/U' ? classes.status : classes.statusBu} >{status}</Typography>
                        <Button className={classes.button}>Do&apos;kondan ko&apos;rish</Button>
                    </Box>
                </Box>
            )}
        </Box>
    )
}
export default Suggested
