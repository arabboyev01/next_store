import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    navWrapper: {
        width: "100%",
        height: "70px",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.5)",
        background: "#fff !important",
        zIndex: 100,
        overflow: "hidden",
        position: "sticky",
        top: 0,
        left: 0,
    },
    active: {
        width: "100%",
        height: "280px",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.5)",
        background: "#fff !important",
        zIndex: 100,
        overflow: "hidden",
        position: "sticky",
        top: 0,
        left: 0,
        transition: "all 0.5s",
    },
    contentWrapper: {
        maxWidth: "1230px",
        margin: "0 auto",
        paddingTop: "10px",
        background: "#fff",
        border: "none",
        boxShadow: "none",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        width: "100%",
        '@media(max-width: 900px)': {
            padding: "10px 20px",
        },
    },
    link: {
        paddingTop: "2px",
        '@media(max-width: 900px)': {
            paddingTop: "10px",
        }
    },
    hamburger: {
        display: "none",
        '@media(max-width: 900px)': {
            display: 'block',
            transition: "all 1s easy-in-out",
        },
    },
    navLinks: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        flex: 0.9,
        justifyContent: "space-between",
        '@media(max-width: 900px)': {
            display: "none",
        },
    },
    activeNavLinks: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        flex: 0.9,
        justifyContent: "space-between",
        '@media(max-width: 900px)': {
            position: "absolute",
            left: 0,
            top: '100px',
            zIndex: 100,
        },
    },
    catalogButton: {
        background: 'linear-gradient(to right, #4D5EF6, #F64D4D)',
        color: "#fff",
        width: "149px",
        height: "46px",
        gap: '10px',
        '@media(max-width: 900px)': {
            display: 'none',
        },
    },
    searchInputWrapper: {
        maxWidth: "396px",
        maxHeight: "46px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        '@media(max-width: 900px)': {
            display: 'none',
        },
    },
    searchInput: {
        maxWidth: "336px",
        width: "100%",
        padding: "10px 15px",
        border: "1px solid #E4E7EE",
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px",
        '@media(max-width: 900px)': {
            maxWidth: "206px",
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
    linkWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        gap:"20px",
        '@media(max-width: 900px)': {
            display: "flex",
            flexDirection: "column",
            alignItems: 'start',
            padding: "0 20px"
        },
    },
    likeButton: {
        width: "46px",
        height: "36px",
        background: "#ECF4FF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "8px",
    },
    likeIcon: {
        marginTop: "8px",
        fontSize: "18px",
        color: "#0D63F3",
    },
    loginButton: {
        background: 'linear-gradient(270deg, rgba(77, 94, 246, 0.2), rgba(246, 77, 77, 0.2))',
        color: "#000",
        width: "109px",
        height: "46px",
    },
}))