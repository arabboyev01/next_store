import {makeStyles} from "@mui/styles";

export const LoginModalStyle = {
    background: "#fff",
    borderRadius: "10px",
    zIndex: 1000,
}
export default makeStyles(() => ({
    contentWrapper: {
        padding: "80px 50px",
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        position: 'relative',
        '@media(max-width: 600px)': {
            padding: "80px 0",
        },
    },
    closeIcon: {
        position: "absolute",
        top: "25px",
        right: "25px",
        color: "#000",
        cursor: 'pointer',
        fontSize: "1.6rem",
    },
    title: {
        fontSize: "28px",
        lineHeight: "33px",
        color: "#000",
        marginBottom: "75px",
        '@media(max-width: 600px)': {
            textAlign: "center",
            marginBottom: "40px",
        },
    },
    button: {
        width: "100%",
        height: "40px",
        '@media(max-width: 600px)': {
            width: "250px",
        },
    },
    divider: {
        color: "#6C757D",
        margin: "12px 0",
    },
    link: {
        textDecoration: "none",
        width: '100%',
        '@media(max-width: 600px)': {
            width: "250px",
        },
    },
    signUp: {
        width: '100%',
        height: "40px",
        background: '-webkit-linear-gradient(270deg, #4def56, #f64d4d)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        border: '.5px solid #000',
        '&:before': {
            content: '',
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            zIndex: '-1',
            margin: '1px',
            borderRadius: 'inherit',
            background: '-webkit-linear-gradient(270deg, #4def56, #f64d4d)',
        },
        '@media(max-width: 600px)': {
            width: "250px",
        },
    },
}))
