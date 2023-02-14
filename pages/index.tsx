import Head from 'next/head'
import { Box } from '@mui/system';
import Layout from '../src/Layout/Layout';
import HomeComponent from '../src/components/Home/Home';
import SendData from '../src/documents/Reusiable/DispatchData/DispatchData';

export default function Home() {
    SendData()
    return (
        <Box>
            <Head>
                <title>Asosiy Sahifa</title>
            </Head>
            <Layout>
                <HomeComponent/>
            </Layout>
        </Box>
    )
}
