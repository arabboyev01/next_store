import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    secondaryCartWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: '20px',
        maxWidth: "1230px",
        overflowX: "scroll",
        overflowY: "hidden",
    },
    secondaryCart: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "135.8px",
        height: "200px",
        background: "#fff",
        borderRadius: "10px",
        position: "relative",
        '@media(max-width: 650px)' : {
            height: '180px',
        },
    },
    itemImage: {
        objectFit: "contain",
        paddingTop: "10px",
    },
    favoriteIcon: {
        position: "absolute",
        right: "2%",
    },
    text: {
        fontSize: "16px",
        lineHeight: "19px",
        fontWeight: 400,
        paddingTop: "8px",
        textAlign: "center",
        '@media(max-width: 650px)' : {
            fontSize: "14px",
            lineHeight: "16px",
            fontWeight: 400,
            paddingTop: "10px",
        },
    },
}))
