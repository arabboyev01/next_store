import Head from 'next/head'
import {Box} from "@mui/system";
import Layout from "../src/Layout/Layout";
import LikesComponent from "../src/components/Likes/Likes";

export default function SignUp() {
    return (
        <Box>
            <Head>
                <title>Yoqtirgan mahsulotlarim</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <LikesComponent />
            </Layout>
        </Box>
    )
}
