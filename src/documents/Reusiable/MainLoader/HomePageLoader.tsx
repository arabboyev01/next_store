import { ProgressBar } from 'react-loader-spinner'
import { Box } from '@mui/system'
import Image from 'next/image'
import MainLogo from "../../../../public/assets/images/next_logo.png"
import { useMediaQuery } from '@mui/material'

const HomePageLoader = () => {
    const query = useMediaQuery('@media(max-width: 650px')
    return (
        <Box style={{
            position: 'absolute', top: 0, left: 0,
            width: '100%', height: '100vh',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            background: '#ECF4FF',
            zIndex: 2000,
        }}>
            <Image src={MainLogo.src} alt='logo' width={query ? 70 : 100} height={query ? 30 : 45} />
            <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperClass="progress-bar-wrapper"
                borderColor="#000"
                barColor="#51E5FF"
            />
        </Box>
    )
}
export default HomePageLoader