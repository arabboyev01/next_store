import Styles from './suggested.style'
import { Box } from '@mui/system';
import { SUGGESION_DATA_TYPE } from '../../../../types/types';
import { Button, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react'
import { commafy, sortByPriceDumb } from './global';
import axios from 'axios'
import { apiAddress } from '../../../../config'
import defaultImage from '../../../../public/assets/images/defaul_image.png'
import { useRouter } from 'next/router'

const Suggested = () => {
    const classes = Styles();
    const [checkbox, setCheckbox] = useState(false)
    const [data, setData] = useState([])
    const router = useRouter()

    useMemo(() => {
        axios.get(`${apiAddress}/product?page=0&size=100&sort&price, asc`)
            .then((data) => setData(data.data.content)).catch(err => console.log(err))
    }, [])

    const [sorted, setSorted] = useState(data)
    const sortByPrice: any = sortByPriceDumb(data)

    useEffect(() => {
        setSorted(checkbox ? sortByPrice : data)
    }, [data, checkbox, sortByPrice])

    const getSingleData = (id: any) => {
        router.push({pathname: '/single-products', query: {id: id}})
    }

    return (
        <Box className={classes.suggestWrapper}>
            <Box className={classes.category}>
                <input type="checkbox" name="price" value="price" onChange={(e) => setCheckbox(e.target.checked)}/>
                <label className={classes.label} htmlFor="subscribeNews">Arzon narxlardan boshlash</label>
            </Box>
            <Box className={classes.productWrap}>
                {sorted?.map(({id, photoUrl, name, price, state}: SUGGESION_DATA_TYPE) =>
                    <Box className={classes.products} key={id}>
                        <Box className={classes.headers}>
                            <img
                                src={photoUrl === '' ? defaultImage.src : `https://nextstore.in/nextstore${photoUrl}`}
                                alt={name} width={50} height={50}
                                style={{objectFit: 'contain'}}
                            />
                            <Typography className={classes.name}>{name}</Typography>
                        </Box>
                        <Box className={classes.header}>
                            {/*<Typography className={classes.shop}>{shop}</Typography>*/}
                            <Typography className={classes.price}>{commafy(price)} so&apos;m</Typography>
                        </Box>
                        <Box className={classes.header}>
                            <Typography
                                className={state !== 'New' ? classes.status : classes.statusBu}>{state}</Typography>
                            <Button className={classes.button} onClick={() => getSingleData(id)}>Batafsil</Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    )
}
export default Suggested
