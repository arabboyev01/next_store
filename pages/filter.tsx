import Head from 'next/head'
import {Box} from "@mui/system";
import Layout from "../src/Layout/Layout";
import React from "react";
import FilterComponent from "../src/components/Filter/Filter"
const Cart = () => {
    return (
        <Box>
            <Head>
                <title>Barcha mahsulotlar</title>
            </Head>
            <Layout>
                <FilterComponent />
            </Layout>
        </Box>
    )
}
export default Cart;
