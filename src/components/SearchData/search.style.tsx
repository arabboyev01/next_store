import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    searchDataWrapper: {
        maxWidth: "1230px",
        margin: "50px auto",
        '@media(max-width: 600px)': {
            padding: "0 30px",
        },
    },
    empty: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "18vh 0",
        '@media(max-width: 600px)': {
            padding: "8vh 0",
        },
    },
    emptyText: {
        marginTop: "30px",
        fontSize: "20px",
        fontWeight: 500,
        lineHeight: '24px',
        '@media(max-width: 600px)': {
            textAlign:"center",
        },
    },
}))
