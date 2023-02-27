import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
    swiperWrapper: {
        maxWidth: '500px',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainImage: {
        maxWidth: '500px',
        maxHeight: '500px',
        marginTop: '150px',
        '@media(max-width: 650px)': {
             marginTop:0,
        }
    },
    mainImages: {
        width: '400px',
        height: '400px',
        objectFit: "contain",
        '@media(max-width: 650px)': {
            width: '200px',
            height: '150px',
        }
    },
    images: {
        width: '80px',
        height: '80px',
        opacity: 0.7,
        objectFit: "contain",
        '@media(max-width: 650px)': {
            width: '50px',
            height: '50px',
        }
    },
    activeImages: {
        width: '80px',
        height: '80px',
        objectFit: "contain",
        border: '1px solid #fff',
        opacity: 1,
        '@media(max-width: 650px)': {
            width: '50px',
            height: '50px',
        }
    },
    tinyImages: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
}))