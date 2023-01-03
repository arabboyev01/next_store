import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    cartWrapper: {
        maxWidth: "1230px",
        margin: "50px auto 100px auto",
        '@media(max-width: 650px)' : {
            padding: "0 20px",
            margin: "30px auto 0 auto",
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
        fontSize: "22px",
        lineHeight: "24px",
        fontWeight: 400,
        '@media(max-width: 650px)' : {
            fontSize: "20px",
            lineHeight: "24px",
        }
    },
    span: {
        fontSize: "22px",
        lineHeight: "24px",
        fontWeight: 400,
        color: "#0D63F3",
        '@media(max-width: 650px)' : {
            fontSize: "16px",
            lineHeight: "19.2px",
        },
    },
}))
