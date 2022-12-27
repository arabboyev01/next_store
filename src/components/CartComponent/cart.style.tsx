import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    cartWrapper: {
        maxWidth: "1230px",
        margin: "120px auto 0 auto",
        '@media(max-width: 650px)' : {
            padding: "0 20px",
            margin: "100px auto 0 auto",
        },
    },
    contentWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        margin: "25px 0 15px 0",
        '@media(max-width: 650px)' : {
            flexDirection: "column",
            alignItems: "center",
        },
    },
    ordinaryText: {
        fontSize: "28px",
        lineHeight: "32px",
        fontWeight: 600,
        '@media(max-width: 650px)' : {
            fontSize: "20px",
            lineHeight: "24px",
        }
    },
    span: {
        fontSize: "24px",
        lineHeight: "28.8px",
        fontWeight: 600,
        color: "#0D63F3",
        '@media(max-width: 650px)' : {
            fontSize: "16px",
            lineHeight: "19.2px",
        },
    },
}))
