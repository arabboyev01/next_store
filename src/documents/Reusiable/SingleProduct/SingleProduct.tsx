import Styles from './singleproduct.style'
import React, { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router'
import axios from 'axios'
import { apiAddress } from '../../../../config'
import Dumb from './Dumb'

const SingleProduct = () => {
    const classes = Styles();
    const query = useMediaQuery('@media(max-width: 650px)');
    const router = useRouter()
    const {id} = router.query

    const [open, setOpen] = useState(false);
    const [suggestedData, setSuggestData] = useState([])
    const [single, setSingle] = useState([]);
    const [getImage, setImage] = useState([])
    const [getFirstImage, setFirstImage] = useState([])
    const handleOpen = () => setOpen(true);
    const handleCLose = () => setOpen(false);

    const [colorId, setColorId] = useState(0)
    useEffect(() => {
        axios.get(`${apiAddress}/product`).then(res => setSuggestData(res.data.content)).catch(err => console.log(err))
        axios.get(`${apiAddress}/product/${id}`).then(res => {
            setSingle(res.data)
            setColorId(res.data.productColorDTOS[0].id)
        }).catch(err => console.log(err))

    }, [id, setColorId])

     const getProductColorImage =  useCallback((id: number) => {
        setColorId(id)
        axios.get(`${apiAddress}/product-color/photo-url/${colorId}` )
            .then(data => {
                setImage(data.data)
                setFirstImage(data.data[0])
            })
            .catch(err => console.log(err))
    }, [colorId, setFirstImage])

    useEffect(() => {
        getProductColorImage(colorId)
    }, [getProductColorImage, colorId])

    console.log(suggestedData)

    return (
        <Dumb classes={classes}
              handleCLose={handleCLose}
              single={single}
              handleOpen={handleOpen}
              query={query}
              suggestedData={suggestedData}
              open={open}
              getProductColorImage={getProductColorImage}
              getImage={getImage}
              colorId={colorId}
              getFirstImage={getFirstImage}
        />
    )
}
export default SingleProduct;
