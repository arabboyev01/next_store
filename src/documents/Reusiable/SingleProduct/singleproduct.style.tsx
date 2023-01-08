import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    singleProducts: {
        maxWidth: "1230px",
        margin: "50px auto 0 auto",
    },
    imageWrapper: {
        maxWidth: "550px",
        maxHeight: "546px",
        background: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
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
}))
