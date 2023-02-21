import Styles from './singleproduct.style'
import React, { useEffect, useState } from 'react';
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
    const handleOpen = () => setOpen(true);
    const handleCLose = () => setOpen(false);

    const [colorId, setColorId] = useState(0)

    useEffect(() => {
        axios.get(`${apiAddress}/advertising`).then(res => setSuggestData(res.data)).catch(err => console.log(err))
        axios.get(`${apiAddress}/product/${id}`).then(res => {
            setSingle(res.data)
            setColorId(res.data.productColorDTOS.at(0).id)
        }).catch(err => console.log(err))

        axios.get(`${apiAddress}/product-color/photo-url/${colorId}`).then(data => setImage(data.data))
            .catch(err => console.log(err))
    }, [id, setColorId, colorId])
    console.log(suggestedData)

     const getProductColorImage = (id: number) => {
        setColorId(id)
        axios.get(`${apiAddress}/product-color/photo-url/${colorId}` ).then(res => setImage(res.data))
            .catch(err => console.log(err))
    }
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
        />
    )
}
export default SingleProduct
