import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    mainCartWrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gridGap: '10px',
        '@media(max-width: 650px)': {
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 2fr))',
        },
    },
    carousel: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        overflowX: 'auto',
        gap: '10px',
        '@media(max-width: 650px)': {
            maxWidth: '400px',
        },
    },
    mainCart: {
        background: '#fff',
        height: '390px',
        maxWidth: '250px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        padding: '10px 25px',
        borderRadius: '10px',
        boxShadow: '0.5px 0.5px 2px rgba(0, 0, 0, 0.2)',
        transition: 'transform 300ms ease-in-out',
        marginTop: '30px',
        '@media(max-width: 650px)': {
            height: '310px',
            maxWidth: '230px',
            minWidth: '100px',
            padding: '20px 5px',
            alignItems: 'center',
            '&:hover': {
                transform: 'translateY(0)'
            },
        },
        '&:hover': {
            cursor: 'pointer',
            transform: 'translateY(-5px)',
        },
    },
    mainCartCarousel: {
        background: '#fff',
        height: '390px',
        maxWidth: '250px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        padding: '10px 25px',
        borderRadius: '10px',
        boxShadow: '0.5px 0.5px 2px rgba(0, 0, 0, 0.2)',
        transition: 'transform 300ms ease-in-out',
        marginTop: '30px',
        '@media(max-width: 650px)': {
            height: 'auto',
            maxWidth: '300px',
            minWidth: '180px',
            padding: '20px 5px',
            alignItems: 'center',
            '&:hover': {
                transform: 'none'
            },
        },
        '&:hover': {
            cursor: 'pointer',
            transform: 'translateY(-5px)',
        },
    },
    favoriteIcon: {
        position: 'absolute',
        right: '2%',
        marginTop: '17px',
        top: '-3px',
        backgroundImage: 'linear-gradient(to right, #4D5EF6, #F64D4D);',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        '@media(max-width: 650px)': {
            right: '8%',
        },
    },
    favoriteIconLiked: {
        position: 'absolute',
        right: '2%',
        marginTop: '17px',
        top: '-3px',
        color: '#bf0000',
        '@media(max-width: 650px)': {
            right: '8%',
        },
    },
    mainImage: {
        objectFit: 'contain',
        '@media(max-width: 650px)': {
            marginLeft: '5px',
        },
    },
    price: {
        color: '#0D63F3',
        fontSize: '18px',
        lineHeight: '21px',
        fontWeight: 400,
        '@media(max-width: 650px)': {
            fontSize: '14px',
            lineHeight: '16px',
        },
    },
    title: {
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: 400,
        paddingTop: '10px',
        height: '44px',
        overflow: 'hidden',
        '@media(max-width: 650px)': {
            height: '25px',
            overflow: 'hidden',
        },
    },
    order: {
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: 400,
        paddingTop: '23px',
        color: '#6C757D',
        '@media(max-width: 650px)': {
            paddingTop: '18px',
        },
    },
    footer: {
        paddingTop: '15px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    shoppingCart: {
        color: '#6C757D',
        fontSize: '25px',
        '@media(max-width: 650px)': {
            marginLeft: '25px',
            fontSize: '20px',
        },
    },
    sale: {
        position: 'absolute',
        background: '#FF0101',
        padding: '5px',
        color: '#fff',
        borderRadius: '4px',
        width: '89px',
        height: '29px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    new: {
        position: 'absolute',
        background: '#EB8528',
        padding: '5px',
        color: '#fff',
        borderRadius: '4px',
        width: '89px',
        height: '29px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10vh 0',
    },
    carouselLoader: {
        padding: '10vh 45%',
    },
    imageWrapper: {
        width: '180px',
        height: '180px',
        marginTop: '30px',
        '@media(max-width: 650px)': {
            width: '120px',
            height: '120px',
        }
    },
}))
