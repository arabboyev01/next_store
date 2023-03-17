import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const style = {
    position: "fixed",
    top:'74px',
    left:0,
    width: '100%',
    '@media(max-width: 650px)': {
        top: 0,
    },
}
const MainLoader = () => {
    return (
        <Box sx={style}>
            <LinearProgress/>
        </Box>
    )
}

export default MainLoader;
