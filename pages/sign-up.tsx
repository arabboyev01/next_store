import Head from 'next/head'
import { Box } from '@mui/system';
import Layout from '../src/Layout/Layout';
import SignUpComponent from '../src/components/SignUpComponent/SignUpComponent';

export default function SignUp() {
    return (
        <Box>
            <Head>
                <title>Ro&apos;yhatdan o&apos;tish</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Layout>
                <SignUpComponent/>
            </Layout>
        </Box>
    )
}
