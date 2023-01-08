import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    singleProducts: {
        maxWidth: "1230px",
        margin: "120px auto 0 auto",
    },
    imageWrapper: {
        maxWidth: "550px",
        maxHeight: "546px",
    },
    productHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        '@media(max-width: 650px)': {
            flexDirection: "column",
            padding: "0 20px",
        },
    },
    loader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20vh 0",
    },
}))
