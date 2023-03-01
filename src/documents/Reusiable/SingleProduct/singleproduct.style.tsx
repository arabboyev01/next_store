import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    singleProducts: {
        maxWidth: "1230px",
        margin: "50px auto 0 auto",
    },
    imageWrapper: {
        maxWidth: "550px",
        height: "546px",
        background: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        '@media(max-width: 650px)': {
            width: "320px",
            height: "250px",
        },
    },
    productHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        '@media(max-width: 650px)': {
            flexDirection: "column",
            alignItems: "center",
            padding: "0 20px",
        },
    },
    image: {
        objectFit: "contain",
    },
    loader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20vh 0",
    },
    carousel: {
        marginTop: "60px",
        margin: "60px 20px 0 20px",
    },
    suggested: {
        maxWidth: '1230px',
        margin: "0 auto",
        '@media(max-width: 650px)': {
            marginLeft: "20px",
        },
    },
}))
