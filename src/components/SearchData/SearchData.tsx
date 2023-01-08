import Style from "./search.style"
import {Box} from "@mui/system";
import {useSelector} from "react-redux";
import {setSearchValue} from "../../redux/CartSlice";
import MainCart from "../../documents/Reusiable/MainCart/MainCart";
import {Typography} from "@mui/material";
import NoData from "../../../public/assets/images/no-results.png"
import Image from "next/image";
const SearchData = () => {
    const classes = Style();
    const searchedValue = useSelector(setSearchValue);
    // @ts-ignore
    const data = searchedValue.payload.cart.searchValue[0];
    console.log(data);
    return (
        <Box className={classes.searchDataWrapper}>
            {!data ?
                <Box className={classes.empty}>
                    <Image src={NoData.src} alt='no data' width={130} height={130}/>
                    <Typography className={classes.emptyText}>Siz so&apos;ragan mahsulot bo&apos;yicha hech narsa
                        topilmadi</Typography>
                </Box>
                :
                <MainCart mainData={data}/>
            }
        </Box>
    )
}
export default SearchData;
