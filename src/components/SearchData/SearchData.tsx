import Style from "./search.style"
import {Box} from "@mui/system";
import {useSelector} from "react-redux";
import {setSearchValue} from "../../redux/CartSlice";
import MainCart from "../../documents/Reusiable/MainCart/MainCart";
import {Typography, useMediaQuery} from "@mui/material";
import NoData from "../../../public/assets/images/no-results.png"
import Image from "next/image";

const SearchData = () => {
    const classes = Style();
    const searchedValue = useSelector(setSearchValue);
    const query = useMediaQuery('@media(max-width: 600px)')
    // @ts-ignore
    const data = searchedValue.payload.cart.searchValue[searchedValue.payload.cart.searchValue.length-1];
    // @ts-ignore
    const productName = searchedValue.payload.cart.inputName.toLocaleUpperCase();
    return (
        <Box className={classes.searchDataWrapper}>
            {!data || data.length === 0 ? null :  <Typography className={classes.title}> “ {productName} “ so&apos;rovi uchun topildi : {data.length} ta mahsulot</Typography>}
            {!data || data.length === 0 || undefined ?
                    <Box className={classes.empty}>
                        <Image src={NoData.src} alt='no data' width={query ? 50 : 130} height={query ? 50 : 130}/>
                        <Typography className={classes.emptyText}>Siz so&apos;ragan “ {productName} “ mahsuloti bo&apos;yicha hech narsa
                            topilmadi</Typography>
                    </Box>
                :
                <MainCart mainData={data}/>
            }
        </Box>
    )
}
export default SearchData;
