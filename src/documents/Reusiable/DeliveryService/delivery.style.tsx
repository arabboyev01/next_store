import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    deliveryWrapper: {
        width: "100%",
        height: "100%",
        background: "#fff",
        padding: "6px 20px",
        borderRadius: "10px",
        '@media(max-width: 650px)': {
            padding: "6px 10px",
        },
    },
    singleLine: {
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
    },
    icon: {
        fontSize: "20px",
        marginRight:"20px",
        '@media(max-width: 650px)': {
            fontSize: "18px",
            marginRight:"10px",
        },
    },
    name: {
        fontSize: "18px",
        lineHeight: "22px",
        color: "#6C757D",
        '@media(max-width: 650px)': {
            fontSize: "15px",
            lineHeight: "16px",
        },
    },
    brandName: {
        fontSize: "18px",
        lineHeight: "22px",
        color: "#000",
        fontWeight: 600,
        marginLeft: '10px',
        '@media(max-width: 650px)': {
            fontSize: "15px",
            lineHeight: "16px",
            fontWeight: 400,
        },
    },
    deliveryInfo: {
        fontSize: "18px",
        lineHeight: "22px",
        color: "#2CB708",
        fontWeight: 600,
        marginLeft: '10px',
        '@media(max-width: 650px)': {
            fontSize: "15px",
            lineHeight: "16px",
            fontWeight: 400,
        },
    },
}))
