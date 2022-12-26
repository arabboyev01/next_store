import Head from 'next/head'
import {Box} from "@mui/system";
import Layout from "../src/Layout/Layout";
// import SingleProductComponent from "../src/documents/Reusiable/SingleProduct/SingleProduct";
import React from "react";

const SingleProduct = () => {
    return (
        <Box>
            <Head>
                <title>Mahsulot haqida</title>

            </Head>
            <Layout>
                {/*<SingleProductComponent />*/}
            </Layout>
        </Box>
    )
}
export default SingleProduct
