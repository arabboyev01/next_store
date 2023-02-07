import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    likeWrapper: {
        width: "100%",
        marginLeft: "30px",
        '@media(max-width: 900px)': {
             marginLeft: 0,
        },
    },
    contentWrapper: {
        width: "100%",
        margin: "0 auto",
        '@media(max-width: 600px)': {
            maxWidth: "430px",
            padding: "10px",
        },
    },
    ordinaryText: {
        fontSize: "28px",
        lineHeight: "33.2px",
        fontWeight: 400,
        marginBottom: '30px',
        '@media(max-width: 650px)' : {
            fontSize: "20px",
            lineHeight: "24px",
            marginBottom: '20px',
        }
    },
    content: {
        width: "100%",
        height: "286px",
        background: "#fff",
        borderRadius: "10px",
        marginTop: "15px",
        padding: "25px",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        justifyContent: "space-between",
        '@media(max-width: 600px)': {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
            padding: "10px",
            maxWidth: "360px",
        },
    },
    mainContent: {
        marginLeft: "15px",
        maxWidth: "400px",
        '@media(max-width: 600px)': {
            width: "300px",
        },
    },
    name: {
        fontSize: "20px",
        lineHeight: "26px",
        fontWeight: 500,
        paddingBottom: "10px",
        borderBottom: "1px solid #E4E7EE",
    },
    price: {
        fontSize: "28px",
        lineHeight: "32px",
        fontWeight: 400,
        paddingTop: "10px",
    },
    color: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        paddingTop: "10px",
        paddingBottom: "10px",
        borderBottom: "1px dashed #E4E7EE",
    },
    boxColor: {
        width: "22px",
        height: "22px",
        background: "#BEBBC2",
        borderRadius: "4px",
        marginRight: "10px",
    },
    colorName: {
        fontSize: '18px',
        lineHeight: "21px",
        color: '#455262',
    },
    storeName: {
        fontSize: "18px",
        color: "#6C757D",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        paddingTop: "20px",
        '@media(max-width: 650px)' : {
            fontSize: '14px',
            lineHeight: "16px",
        },
    },
    icon: {
        marginRight: "10px",
    },
    span: {
        fontSize: '18px',
        lineHeight: "21px",
        color: "#000",
        fontWeight: 600,
        marginLeft: "10px",
        '@media(max-width: 650px)' : {
            fontSize: '14px',
            lineHeight: "16px",
        },
    },
    buttons: {
        maxWidth: "500px",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        gap: '10px',
        marginTop: "180px",
        '@media(max-width: 600px)': {
            marginTop: "30px",
        },
    },
    button: {
        maxWidth: "250px",
        '@media(max-width: 600px)': {
            maxWidth: "360px"
        },
    },
    buynow: {
        border: "1px solid #D80027",
        width: "132px",
        height: "29",
        fontSize: "12px",
        color: "#D80027",
        background: "#F7DDE2",
        '@media(max-width: 600px)': {
           fontSize: "12px",
        },
    },
    close: {
        position: "absolute",
        right: '10px',
        width: "40px",
        height: "40px",
        background: "#F7DDE2",
        borderRadius: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        '@media(max-width: 600px)': {
            right: '10px',
            top: "20px",
            width: "30px",
            height: "30px",
        },
    },
    closeIcon: {
        marginTop: "8.5px",
        color: "#D80027",
        '@media(max-width: 600px)': {
            marginTop: "4.5px",
            fontSize: '20px',
        },
    },
    loader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10vh 0",
    },
}))
