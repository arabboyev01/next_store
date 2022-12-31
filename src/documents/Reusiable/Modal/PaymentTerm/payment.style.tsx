import {makeStyles} from "@mui/styles";

export const ModalStyle = {
    background: "#fff",
}
export default makeStyles(() => ({
    contentWrapper: {
        padding: "30px 20px",
        '@media(max-width: 600px)': {
            padding: "20px 10px",
        },
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: "26px",
        lineHeight: "33.8px",
        fontWeight: 700,
        '@media(max-width: 600px)': {
            fontSize: "14px",
            lineHeight: "16.8px",
            fontWeight: 400,
        },
    },
    icon: {
        cursor: 'pointer',
    },
    mainText: {
        fontSize: "26px",
        lineHeight: "33.8px",
        fontWeight: 500,
        marginTop: "30px",
        '@media(max-width: 600px)': {
            fontSize: "18px",
            lineHeight: "21.8px",
            fontWeight: 600,
        },
    },
    descWrapper: {
        background: "#F9F9F9",
        padding: "25px 20px",
        borderRadius: "10px",
        '@media(max-width: 600px)': {
            padding: "15px 10px",
        },
    },
    mainDesc: {
        fontSize: "22px",
        lineHeight: "26.8px",
        fontWeight: 400,
        color: "#455262",
        '@media(max-width: 600px)': {
            fontSize: "14px",
            lineHeight: "18.8px",
        },
    },
    priceWrapper: {
        background: "#EEF1F4",
        padding: "25px 20px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "42px",
        '@media(max-width: 600px)': {
            marginTop: "32px",
        },
    },
    price: {
        fontSize: "48px",
        lineHeight: "57.8px",
        fontWeight: 700,
        '@media(max-width: 600px)': {
            fontSize: "18px",
            lineHeight: "18.8px",
        },
    },
    form: {
        maxWidth: "100%",
        margin: "15px auto",
        '@media(max-width: 600px)': {
            marginTop: "10px",
        },
    },
    range: {
        width: "100%",
        background: '#E4E7EE',
        WebkitAppearance: 'none',
        height: "20px",
        borderRadius: "50px",
        '&::-webkit-slider-thumb':{
            WebkitAppearance: 'none',
            backgroundColor: '#000',
            color: "#000",
            height: "35px",
            width: "35px",
            borderRadius: "50%",
            border: "5px solid #fff",
        },
    },
    nums: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    num: {
        marginTop: "10px",
        marginLeft: "2px",
    },
    footer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "35px",
    },
    button: {
        marginTop: "20px",
        width: "100%",
        justifyContent: "end",
        alignItems: "end",
        textAlign:'end'
    },
}))
