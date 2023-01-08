import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    detailWrapper: {
        maxWidth: "560px",
        margin: "0 auto",
        marginLeft: "40px",
        '@media(max-width: 650px)': {
            maxWidth: "380px",
            marginLeft: 0,
        },
    },
    mainTitle: {
        fontSize: "28px",
        fontWeight: 600,
        lineHeight: "34px",
    },
    text: {
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: "22px",
        marginTop: "20px",
    },
    colorBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        marginTop: "17px",
    },
    box: {
        width: "46px",
        height: "46px",
        borderRadius: "4px",
    },
    price: {
        fontSize: "48px",
        fontWeight: 600,
        lineHeight: "58px",
        marginTop: "40px",
        '@media(max-width: 650px)': {
            fontSize: "28px",
            fontWeight: 500,
            lineHeight: "38px",
            marginTop: "20px",
        },
    },
    boxPrice: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        width: "397px",
        borderRadius: "10px",
        boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
        marginTop: "20px",
        '@media(max-width: 650px)': {
            maxWidth: "350px",
        },
    },
    priceInfo: {
        padding: "20px 15px",
    },
    text1: {
        fontSize: "18px",
        fontWeight: 600,
        lineHeight: "22px",
    },
    text2: {
        marginTop: "15px",
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: "24px",
        color: "#455262",
    },
    price1: {
        marginTop: "24px",
        fontSize: "40px",
        fontWeight: 400,
        lineHeight: "24px",
    },
    arrow: {
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#EEF1F4",
        marginRight: "15px",
        borderRadius: "50px",
        cursor: "pointer",
    },
    btnWrapper: {
        display: "flex",
        alignItems: "center",
        margin: "62px 0",
        maxWidth: "400px",
        gap: "30px",
        '@media(max-width: 650px)': {
            flexDirection: "column",
            padding: "0 30px",
            gap: 0,
        },
    },
    add:{
        border: ".5px solid #0D63F3",
        width: "400px",
        '@media(max-width: 650px)': {
            marginTop: "31px",
            maxWidth: "300px",
        },
    },
}))
