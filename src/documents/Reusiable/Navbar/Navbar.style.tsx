import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    navWrapper: {
        width: "100%",
        height: "70px",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.5)",
        background: "#fff",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
    },
    contentWrapper: {
        maxWidth: "1230px",
        margin: "0 auto",
        paddingTop: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
    },
    catalogButton: {
        background: 'linear-gradient(to right, #4D5EF6, #F64D4D)',
        color: "#fff",
        width: "149px",
        height: "46px",
        '@media(max-width: 650px)': {
            display: 'none',
        },
    },
    loginButton: {
        background: 'linear-gradient(270deg, rgba(77, 94, 246, 0.2), rgba(246, 77, 77, 0.2))',
        color: "#000",
        width: "109px",
        height: "46px",
        '@media(max-width: 650px)': {
            display: 'none',
        },
    },
    catalogIcon: {
        marginRight: "15px",
    },
    searchInputWrapper: {
        maxWidth: "396px",
        maxHeight: "46px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
    },
    searchInput: {
        maxWidth: "336px",
        width: "100%",
        padding: "10px 5px",
        border: "1px solid #E4E7EE",
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px",
        '@media(max-width: 650px)': {
            maxWidth: "106px",
        },
    },
    searchIcon: {
        fontSize: '17px',
        color: "#fff",
    },
    submitButton: {
        background: "#0D63F3",
        border: "none",
        height: "37px",
        width: "60px",
        marginLeft: "-4px",
        borderTopRightRadius: '8px',
        borderBottomRightRadius: "8px",
        cursor: "pointer",
    },
    likeButton: {
        width: "46px",
        height: "36px",
        background: "#ECF4FF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "8px",
        '@media(max-width: 650px)': {
            display: 'none',
        },
    },
    likeIcon: {
        marginTop: "8px",
        fontSize: "18px",
        color: "#0D63F3",
    },
}));
