import {makeStyles} from "@mui/styles";


export const modalWrapper = {
    background: '#FBFBFB',
    borderRadius: "15px",
}
export default makeStyles(() => ({
    contentWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px 30px",
        '@media(max-width: 650px)': {
            padding: "5px",
        },
    },
    title: {
        fontSize: "26px",
        lineHeight: "31px",
        maxWidth: "460px",
        textAlign: "center",
        paddingTop: "20px",
        '@media(max-width: 650px)': {
            maxWidth: '350px',
            fontSize: "14px",
            lineHeight: "18px",
            paddingTop: "10px",
        },
    },
    delete: {
        width: "90px",
        height: "90px",
        background: '#F7DDE2',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "50%",
        '@media(max-width: 650px)': {
            width: "60px",
            height: "60px",
        },
    },
    deleteIcon: {
        fontSize: "30px",
        marginTop: "30px",
        color: "#D80027",
        '@media(max-width: 650px)': {
            marginTop: "15px",
        },
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: '30px',
        gap: "30px",
    },
    goBack: {
        background: "#D80027",
        padding: '15px 47px',
        color: '#fff',
        border: "none",
        borderRadius: "10px",
        '&:hover': {
            background: "#D80027 !important",
            opacity: 0.9,
            cursor: 'pointer',
        },
        '@media(max-width: 650px)': {
            padding: '15px 17px',
            fontSize: "12px",
        },
    },
    yesDelete: {
        background: "#fff",
        padding: '15px 47px',
        color: '#7E8187',
        border: ".2px solid #7E8187",
        borderRadius: "10px",
        '&:hover': {
            background: "#fff !important",
            opacity: 0.9,
            cursor: 'pointer',
        },
        '@media(max-width: 650px)': {
            padding: '15px 17px',
            fontSize: "12px",
        },
    },
}))
