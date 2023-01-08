import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    carouselWrapper: {
        width: "100%",
        position: "relative",
    },
    swiper: {
        maxWidth: "1230px",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        borderRadius: "8px",
        marginBottom: "3%",
        "--swiper-pagination-color": "#fff !important",
        "--swiper-navigation-color": "#fff !important",
        '@media(max-width: 650px)':{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: 'no-repeat',
        },
    },
    navigateIcon: {
        color: "#fff",
        marginTop: "8px",
        fontSize: "17px",
        marginLeft: "5px",
    },
    arrowBack: {
        background: 'linear-gradient(to right, #4D5EF6, #F64D4D)',
        position: "absolute",
        left: "-50px",
        top: "45%",
        borderRadius: "50%",
        width: "32px",
        height: "32px",
        border: 'none',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        '@media(max-width: 1230px)':{
            display: 'none',
        },
    },
    arrowForward: {
        background: 'linear-gradient(to right, #4D5EF6, #F64D4D)',
        position: "absolute",
        right: "-50px",
        bottom: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "50%",
        width: "32px",
        height: "32px",
        border: 'none',
        cursor: "pointer",
        '@media(max-width: 1230px)':{
            display: 'none',
        },
    },
    carouselImage: {
        objectFit: "cover",
        borderRadius: "8px",
    },
}))
