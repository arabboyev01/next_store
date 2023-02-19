import Head from 'next/head'
import {Box} from "@mui/system";
import Layout from "../src/Layout/Layout";
import React from "react";
import BuyNow from '../src/components/BuyNow/BuyNow'

const Cart = () => {
    return (
        <Box>
            <Head>
                <title>Mahsulotni sotib olish</title>
            </Head>
            <Layout>
                <BuyNow />
            </Layout>
        </Box>
    )
}
export default Cart;
