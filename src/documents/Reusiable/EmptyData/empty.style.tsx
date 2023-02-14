import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    empty: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        maxWidth: "400px",
        margin: "10px auto",
        '@media(max-width: 600px)':{
            margin: "50px auto",
            flexDirection: "column",
            alignItems: "center",
        },
    },
    title: {
        fontSize: "28px",
        lineHeight: "34px",
        fontWeight: 400,
        marginTop: "50px",
        '@media(max-width: 600px)':{
            fontSize: "18px",
            lineHeight: "20px",
            marginTop: "10px",
        },
    },
    backBtn: {
        marginTop: "50px",
        height: "50px",
        width: "250px",
        '@media(max-width: 600px)':{
            width: "100%",
        },
    },
    lists: {
        marginTop: "50px",
        marginLeft: "20px",
        '@media(max-width: 600px)':{
            fontSize: "16px",
            lineHeight: "18px",
            marginTop: "10px",
        },
    },
    list: {
        fontSize: '15px',
        marginTop: "5px",
        '@media(max-width: 600px)':{
            fontSize: '12px',
        },
    },
}))
