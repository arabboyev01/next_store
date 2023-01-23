import {makeStyles} from "@mui/styles";
export default makeStyles(() => ({
    suggestWrapper: {
        maxWidth: '1230px',
        margin: '60px auto',
        height: "574px",
        width: "100%",
        padding: "23px",
        background: "#fff",
        borderRadius: "10px",
        '@media(max-width: 600px)': {
            maxWidth: '90%',
            padding: "20px",
            height: "auto",
        },
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
        '@media(max-width: 600px)': {
            flexDirection: "column",
            alignItems: "start",
        },
    },
    header: {
        display: "flex",
        // flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: '100px',
        textAlign: 'start',
        '@media(max-width: 600px)': {
            gap: '50px',
            marginTop: '30px',
        },
    },
    headers: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    name: {
        fontSize: "14px",
        lineHeight: "16px",
        maxWidth: "372px",
        margin: "0 auto",
        paddingLeft: "20px",
        '@media(max-width: 600px)': {
            maxWidth: "272px",
        },
    },
    shop: {
        fontSize: "16px",
        fontWeight: 700,
    },
    price: {
        color: '#1E1E1E',
    },
    status: {
        color: "#0D63F3",
    },
    button: {
        background: "#ECF4FF",
        color: "#0D63F3",
    },
}))
