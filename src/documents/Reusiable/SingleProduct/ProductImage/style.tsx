import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
    swiperWrapper: {
        // maxWidth: '500px',
        // height: '500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '@media(max-width: 650px)': {
            maxWidth: '400px',
            height: '250px',
            position: 'relative',
        },
    },
    mainImage: {
        width: '500px',
        weight: '400px',
        marginLeft: "100px",
        '@media(max-width: 650px)': {
            marginTop: 0,
        },
    },
    mainImages: {
        width: '400px',
        height: '400px',
        objectFit: 'contain',
        '@media(max-width: 650px)': {
            width: '200px',
            height: '200px',
        }
    },
    images: {
        width: '80px',
        height: '80px',
        objectFit: 'contain',
        marginLeft: '30px',
        '@media(max-width: 650px)': {
            width: '50px',
            height: '50px',
        }
    },
    activeImages: {
        width: '80px',
        height: '80px',
        objectFit: 'contain',
        border: '1px solid rgba(0, 0, 0, 0.5)',
        marginLeft: '30px',
        '@media(max-width: 650px)': {
            width: '50px',
            height: '50px',
        }
    },
    tinyImages: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '@media(max-width: 650px)': {
            position: 'absolute',
            bottom: 0,
        },
    },
}))