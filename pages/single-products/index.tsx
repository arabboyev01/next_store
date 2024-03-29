import Head from 'next/head'
import {Box} from "@mui/system";
import Layout from "../../src/Layout/Layout";
import React from "react";
import SingleProductComponent from "../../src/documents/Reusiable/SingleProduct/SingleProduct"
import SendData from "../../src/documents/Reusiable/DispatchData/DispatchData";
const SingleProduct = () => {
    SendData()
    return (
        <Box>
            <Head>
                <title>Mahsulot haqida</title>
            </Head>
            <Layout>
                <SingleProductComponent />
            </Layout>
        </Box>
    )
}
export default SingleProduct;
