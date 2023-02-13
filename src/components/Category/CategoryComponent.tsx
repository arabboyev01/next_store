import {Box} from "@mui/system";
import style from "./category.style"
import {Typography, useMediaQuery} from "@mui/material";
import {CATEGORY_BUTTONS} from "../../documents/DumbData/DumbData";
import Image from "next/image";
import MainCart from "../../documents/Reusiable/MainCart/MainCart";
import {useSelector} from "react-redux";
import { useCallback, useEffect, useState } from 'react'
import { apiAddress } from '../../../config'
import axios from "axios"
import { useRouter } from 'next/router'

const CategoryComponent = () => {
    const classes = style()
    const query = useMediaQuery('@media(max-width: 650px)')
    const {mainData} = useSelector((state: any) => state.cart);
    const data = mainData[mainData.length - 1]
    const firstData = data === undefined ? undefined : data.content
    const router = useRouter()
    const {id} = router.query
    const [categoryData, setMainData] = useState([])

    const getDataByCategory = useCallback(() => {
        axios.get(`${apiAddress}/category/${id}`).then((data) => {
            setMainData(data.data)
        }).catch(err => console.log(err))
    }, [apiAddress, id])

    useEffect(() => {
        getDataByCategory()
    }, [getDataByCategory])

    return (
        <Box className={classes.categoryWrapper}>
            <Typography className={classes.title}>Apple mahsulotlari <span className={classes.span}>230 ta mahsulot mavjud</span></Typography>
            <Box className={classes.contentWrapper}>
                <Box className={classes.category}>
                    {CATEGORY_BUTTONS.map(({id, image, category}) =>
                        <Box key={id} className={classes.categoryBox}>
                            <Box>
                                <Image src={image.src} alt='category_image' width={query ? 130 : 180} height={query ? 100 : 134}
                                className={classes.image}
                                />
                            </Box>
                            <Typography className={classes.name}>{category}</Typography>
                        </Box>
                    )}
                </Box>
                <Box className={classes.productWrapper}>
                    <MainCart mainData={firstData}/>
                </Box>
            </Box>
        </Box>
    )
}
export default CategoryComponent;
