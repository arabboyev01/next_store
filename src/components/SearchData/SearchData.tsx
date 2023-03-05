import Style from './search.style'
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/CartSlice';
import MainCart from '../../documents/Reusiable/MainCart/MainCart';
import { Typography, useMediaQuery } from '@mui/material';
import NoData from '../../../public/assets/images/no-results.png'
import Image from 'next/image';
import { useEffect, useState } from 'react'

const SearchData = () => {
    const classes = Style();
    const searchedValue: any = useSelector(setSearchValue);
    const query = useMediaQuery('@media(max-width: 600px)')
    const [mainData, setMainData] = useState([])

    const productName = searchedValue.payload.cart.inputName.toLocaleUpperCase();

    useEffect(() => {
    setMainData(searchedValue.payload.cart.searchValue[searchedValue.payload.cart.searchValue.length - 1])
    }, [searchedValue, mainData]);

    return (
        <Box className={classes.searchDataWrapper}>
            {!mainData || mainData?.length === 0 ? null :
                <Typography className={classes.title}> “ {productName} “ so&apos;rovi uchun topildi :
                    {mainData?.length} ta mahsulot
                </Typography>
            }
            {!mainData || mainData?.length === 0 || undefined ?
                <Box className={classes.empty}>
                    <Image src={NoData.src} alt="no data" width={query ? 50 : 130} height={query ? 50 : 130}/>
                    <Typography className={classes.emptyText}>Siz so&apos;ragan “ {productName} “ mahsuloti
                        bo&apos;yicha hech narsa
                        topilmadi</Typography>
                </Box>
                :
                <MainCart mainData={mainData}/>
            }
        </Box>
    )
}
export default SearchData;
