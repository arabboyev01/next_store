import Head from 'next/head'
import {Box} from "@mui/system";
import Layout from "../src/Layout/Layout";
import React from "react";
import CategoryComponent from "../src/components/Category/CategoryComponent";

const Category = () => {
    return (
        <Box>
            <Head>
                <title>Kategoriyalash</title>
            </Head>
            <Layout>
                <CategoryComponent />
            </Layout>
        </Box>
    )
}
export default Category;
