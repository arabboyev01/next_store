import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    head: {
        position: 'relative',
        '@media(max-width: 650px)': {
            margin: "0 10px 10% 10px",
        },
    },
    swiper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '4%',
        borderRadius: '8px',
        maxWidth: "1230px",
        margin: "0 auto",
        '--swiper-pagination-color': '#fff !important',
        '--swiper-navigation-color': '#fff !important',
        padding: '0 30px',
        '@media(max-width: 650px)': {
            maxWidth: "400px",
            margin: "0 0 10% 0",
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
        },
    },
    navigateIcon: {
        color: '#fff',
        marginTop: '8px',
        fontSize: '17px',
        marginLeft: '5px',
    },
    arrowBack: {
        background: 'linear-gradient(to right, #4D5EF6, #F64D4D)',
        position: 'absolute',
        left: '-50px',
        top: '45%',
        borderRadius: '50%',
        width: '32px',
        height: '32px',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        '@media(max-width: 1230px)': {
            left: 3,
            top: '35%',
            zIndex: 2,
            background: 'transparent',
        },
    },
    arrowForward: {
        background: 'linear-gradient(to right, #4D5EF6, #F64D4D)',
        position: 'absolute',
        right: '-50px',
        bottom: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '50%',
        width: '32px',
        height: '32px',
        border: 'none',
        cursor: 'pointer',
        '@media(max-width: 1230px)': {
            right: 3,
            bottom: '50%',
            zIndex: 2,
            background: 'transparent',
        },
    },
    textContent: {
        '@media(max-width: 650px)': {
            maxWidth: '250px',
            margin: '0 auto',
        },
    },

    title: {
        fontSize: '54px',
        lineHeight: '50px',
        color: '#fff',
        maxWidth: "600px",
        '@media(max-width: 650px)': {
            fontSize: '28px',
            lineHeight: '30px',
            color: '#fff',
            maxWidth: '300px',
        },
    },
    sub: {
        fontSize: '18px',
        color: '#fff',
        marginTop: '20px',
    },
    images: {
        '@media(max-width: 650px)': {
            display: 'none',
        },
    },
}))
