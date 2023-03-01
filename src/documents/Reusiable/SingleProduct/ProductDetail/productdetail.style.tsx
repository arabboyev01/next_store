import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    detailWrapper: {
        maxWidth: "560px",
        margin: "0 auto",
        marginLeft: "100px",
        '@media(max-width: 650px)': {
            maxWidth: "380px",
            marginLeft: 0,
            marginTop: "20px",
            padding: "0 20px",
        },
    },
    mainTitle: {
        fontSize: "28px",
        fontWeight: 600,
        lineHeight: "34px",
        borderBottom: "1px solid #E4E7EE",
        paddingBottom: "10px",
        '@media(max-width: 650px)': {
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "19px",
        },
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
        '@media(max-width: 650px)': {
            justifyContent: "start",
        },
    },
    box: {
        width: "46px",
        height: "46px",
        borderRadius: "4px",
        '@media(max-width: 650px)': {
            width: "64px",
        },
    },
    price: {
        fontSize: "48px",
        fontWeight: 600,
        lineHeight: "58px",
        marginTop: "40px",
        '@media(max-width: 650px)': {
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "29px",
            marginTop: "20px",
        },
    },
    activeBox:{
        width: "46px",
        height: "46px",
        borderRadius: "4px",
        border: "2px solid #fff",
        boxShadow: "1px 1px 1px 0.5px #fff",
        padding: "-30px",
        '@media(max-width: 650px)': {
            width: "64px",
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
            maxWidth: "330px",
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
        '@media(max-width: 650px)': {
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "19px",
        },
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
            flexDirection: "row",
            padding:0,
            gap: '20px',
        },
    },
    add:{
        border: ".5px solid #0D63F3",
        width: "250px",
        height: "48px",
        '@media(max-width: 650px)': {
            width: "150px",
            fontSize: "12px",
        },
    },
    buyBtn: {
        height: "48px",
        width: "250px",
        '@media(max-width: 650px)': {
            width: "150px",
        },
    },
    delivery: {
        width: "551px",
        height: "127px",
        borderRadius: "10px",
        '@media(max-width: 650px)': {
            width: "320px",
        },
    },
}))
