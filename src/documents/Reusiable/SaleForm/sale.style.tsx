import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    saleWrapper: {
        maxWidth: "782.8px",
        height: "643px",
        background: "#fff",
        padding: "50px 40px",
        borderRadius: "10px",
        width: "100%",
        '@media(max-width: 600px)': {
            maxWidth: "400px",
            height: "auto",
            padding: "30px 10px",
            width: "100%",
        },
    },
    header: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
    },
    headerTitle: {
        fontSize: "22px",
        lineHeight: "24px",
    },
    leftIcon:{
        marginRight: "30px",
        marginTop: "5px",
        width: "30px",
        height: "30px",
        '&:hover': {
            background: "#ddd",
            cursor: "pointer",
            borderRadius: "50px",
        },
        '@media(max-width: 600px)': {
            marginRight: "10px",
        },
    },
    forms: {
        display: "grid",
        gridTemplateColumns: 'repeat(auto-fit, minmax(306px, 1fr))',
        gridGap: '30px',
        marginTop: "30px",
        '@media(max-width: 600px)': {
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        },
    },
    fieldContainer: {},
    label: {
        marginBottom: "5px",
        color: "#000",
    },
    comment: {
        margin: "30px 0 20px 0",
        fontSize: "22px",
        lineHeight: "24px",
    },
    field: {
        width: '100%',
        height: "140px",
    },
    textArea: {
        width: '100%',
        height: '140px !important',
        borderRadius: "10px",
        border: ".5px solid rgba(0, 0, 0, 0.4)",
        '@media(max-width: 600px)': {
            height: '100px !important',
        },
    },
}))
