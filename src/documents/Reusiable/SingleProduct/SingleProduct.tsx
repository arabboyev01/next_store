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

    const handleOpen = () => setOpen(true);
    const handleCLose = () => setOpen(false);

    useEffect(() => {
        axios.get(`${apiAddress}/advertising`).then(res => setSuggestData(res.data)).catch(err => console.log(err))
        axios.get(`${apiAddress}/product/${id}`).then(res => setSingle(res.data)).catch(err => console.log(err))
    }, [id])

    return (
        <Dumb classes={classes}
              handleCLose={handleCLose}
              single={single}
              handleOpen={handleOpen}
              query={query}
              suggestedData={suggestedData}
              open={open}
        />
    )
}
export default SingleProduct
