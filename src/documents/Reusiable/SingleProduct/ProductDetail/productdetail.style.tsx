import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    detailWrapper: {
        maxWidth: "560px",
        margin: "0 auto",
        marginLeft: "40px",
        '@media(max-width: 650px)': {
            maxWidth: "360px",
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
    add:{
        marginTop: "62px",
        border: ".5px solid #0D63F3",
        '@media(max-width: 650px)': {
            marginTop: "31px",
        },
    },
}))
