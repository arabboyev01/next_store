import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    categoryWrapper: {
        maxWidth: "1230px",
        margin: "0 auto",
    },
    title: {
        fontSize: "22px",
        lineHeight: "24px",
        fontWeight: 400,
        marginTop:"100px",
        '@media(max-width: 650px)' : {
            fontSize: "18px",
            lineHeight: "20px",
            marginTop:"30px",
            paddingLeft: "20px",
        },
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
    contentWrapper:{
        display: "flex",
        flexDirection: "row",
        alignItems:"start",
        marginTop: '25px',
        '@media(max-width: 650px)' : {
            flexDirection: "column",
            padding: '0 15px',
        },
    },
    category: {
        display: "flex",
        flexDirection: "column",
        alignItems:"start",
        flex: 0.2,
        gap: '20px',
        '@media(max-width: 650px)' : {
            flexDirection: "row",
            alignItems:"center",
            overflowX: "auto",
            flex: 1,
            marginRight:0,
            gap: "20px",
            width: '100%',
            paddingBottom: "20px",
        },
    },
    categoryBox: {
        maxWidth:'210px',
        height: '220px',
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center",
        borderRadius: "15px",
        '@media(max-width: 650px)' : {
            width:'210px',
            height: '170px',
        },
    },
    name: {
        color: '#6C757D',
        textAlign: "center",
        marginBottom: '10px',
        marginTop: '10px',
        '@media(max-width: 650px)' : {
            marginBottom:0,
            marginTop: '5px',
        },
    },
    productWrapper: {
        flex: 0.8,
        marginBottom: "50px",
        '@media(max-width: 650px)' : {
           flex: 1,
            paddingLeft: 0,
            width: "100%",
        },
    },
}))
