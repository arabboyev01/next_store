import Head from 'next/head'
import {Box} from "@mui/system";
import Layout from "../src/Layout/Layout";
import React from "react";
import CartItself from "../src/components/CartComponent/CartIteself";

const Cart = () => {
    return (
        <Box>
            <Head>
                <title>Savatchangiz</title>
            </Head>
            <Layout>
                <CartItself />
            </Layout>
        </Box>
    )
}
export default Cart
