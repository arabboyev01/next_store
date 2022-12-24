import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    mainCartWrapper: {
        display: "grid",
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gridGap: '10px',
        '@media(max-width: 650px)': {
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 2fr))',
        },
    },
    mainCart: {
        background: "#fff",
        height: "390px",
        display: "flex",
        flexDirection: "column",
        position: 'relative',
        padding: "10px 25px",
        borderRadius: "10px",
        '@media(max-width: 650px)': {
            padding: "5px 10px",
            height: "335px",
        },
    },
    favoriteIcon: {
        position: 'absolute',
        right: "2%",
        marginTop: "17px",
        top: "-10px",
        '@media(max-width: 650px)': {
            right: "8%",
        },
    },
    mainImage: {
        objectFit: 'contain',
        '@media(max-width: 650px)': {
            marginTop: "20px",
        },
    },
    price: {
        color: "#0D63F3",
        fontSize: "18px",
        lineHeight: "21px",
        fontWeight: 400,
    },
    title: {
        fontSize: "14px",
        lineHeight: '18px',
        fontWeight: 400,
        paddingTop: "10px",
    },
    order: {
        fontSize: "14px",
        lineHeight: '18px',
        fontWeight: 400,
        paddingTop: "33px",
        color: "#6C757D",
        '@media(max-width: 650px)': {
            paddingTop: "18px",
        },
    },
    footer: {
        paddingTop: "25px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    shoppingCart: {
        color: "#6C757D",
        fontSize: '20px',
    },
}))
