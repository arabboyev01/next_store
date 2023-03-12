import { ProgressBar } from 'react-loader-spinner'
import { Box } from '@mui/system'

const HomePageLoader = () => {
    return (
        <Box style={{
            position: 'absolute', top: 0, left: 0,
            width: '100%', height: '100vh',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            background: '#ECF4FF',
            zIndex: 2000,
        }}>
            <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{width: '300px'}}
                wrapperClass="progress-bar-wrapper"
                borderColor="#000"
                barColor="#51E5FF"
            />
        </Box>
    )
}
export default HomePageLoader