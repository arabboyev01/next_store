import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    fieldWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        padding: "80px 0",
        '@media(max-width: 600px)': {
            padding: "60px 0",
        },
    },
    title: {
        fontSize: "28px",
        lineHeight: "33px",
        color: "#000",
        fontWeight: 400,
        '@media(max-width: 600px)': {
           textAlign: "center",
        },
    },
    itemsContainer: {
        padding: "0 60px",
        marginTop: "20px",
        '@media(max-width: 600px)': {
            padding: 0,
        },
    },
    fieldContainer: {
        marginTop: "25px",
        height: "40px",
    },
    closeIcon: {
        position: "absolute",
        right: '25px',
        top: "25px",
        fontSize: "1.6rem",
        color: "#000",
        cursor: 'pointer',
    },
    submit: {
        marginTop: "50px",
        height: "40px",
        '@media(max-width: 600px)': {
            marginTop: "40px",
        },
    },
    forgot: {
        fontSize: '14px',
        lineHeight: "16px",
        color: '#0D63F3',
        marginTop: "16px",
        cursor: 'pointer',
    },
}))
