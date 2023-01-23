import {makeStyles} from "@mui/styles";
export default makeStyles(() => ({
    suggestWrapper: {
        maxWidth: '1230px',
        margin: '60px auto',
        maxHeight: "574px",
        height: "100%",
        width: "100%",
        padding: "23px",
        background: "#fff",
        borderRadius: "10px",
    },
    category: {
        padding: "10px",
    },
    label: {
        marginLeft: "20px",
    },
    products: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #E4E7EE",
        paddingBottom: "5px",
        paddingTop: '10px',
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: 'start',
    },
    name: {
        fontSize: "14px",
        lineHeight: "16px",
        maxWidth: "372px",
        margin: "0 auto",
        paddingLeft: "20px",
    },
    shop: {
        fontSize: "16px",
        fontWeight: 700,
        textAlign: 'start',
    },
    price: {},
    status: {},
}))
