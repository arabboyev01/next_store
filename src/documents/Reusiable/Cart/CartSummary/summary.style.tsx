import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    summaryWrapper: {
        maxWidth: "397px",
        height: "428px",
        borderRadius: "10px",
        background: "#fff",
        padding: "50px 20px",
        marginLeft: "20px",
        width: "100%",
        '@media(max-width: 650px)' : {
            padding: "20px 10px",
            marginLeft: 0,
            marginTop: "20px",
        },
    },
    sticky: {
        maxWidth: "397px",
        height: "428px",
        borderRadius: "10px",
        background: "#fff",
        padding: "50px 20px",
        marginLeft: "20px",
        width: "100%",
        position: "sticky",
        top: "85px",
        '@media(max-width: 650px)' : {
            position: "static",
            padding: "20px 10px",
            marginLeft: 0,
            marginTop: "20px",
        },
    },
    name: {
        fontSize: "28px",
        fontWeight: 600,
        lineHeight: "33.6px",
    },
    total: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "27px 0 10px 0",
        borderBottom: "1px dashed #E4E7EE",
    },
    delivery: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "27px 0 10px 0",
        borderBottom: "1px solid #E4E7EE",
    },
    summa: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 0 10px 0",
    },
    text: {
        fontSize: "14px",
        lineHeight: "16px",
        color: "#455262",
    },
    price: {
        fontSize: "22px",
        lineHeight: "26px",
        fontWeight: 600,
        paddingLeft: "41px"
    },
    textCenter: {
        fontSize: "14px",
        lineHeight: "16px",
        color: "#455262",
        textAlign: "center",
    },
    priceCenter: {
        fontSize: "22px",
        lineHeight: "26px",
        fontWeight: 600,
        paddingLeft: 0,
        textAlign: "center",
        marginTop: "20px",
    },
    buyBtn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
        width: "100%",
    },
}))
