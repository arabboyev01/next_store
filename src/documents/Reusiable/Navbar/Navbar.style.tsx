import {makeStyles} from "@material-ui/styles";

export default makeStyles(() => ({
    navWrapper: {
        width: "100%",
        height: "70px",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.5)",
        background: "#fff !important",
        zIndex: 100,
        overflow: "hidden",
    },
    link:{
        paddingTop: "2px",
    },
    icon: {
        color: "#000",
        fontSize: "1.7rem",
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
    loginButton: {
        background: 'linear-gradient(270deg, rgba(77, 94, 246, 0.2), rgba(246, 77, 77, 0.2))',
        color: "#000",
        width: "109px",
        height: "46px",
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
        '@media(max-width: 900px)': {
            display: 'none',
        },
    },
    searchInput: {
        maxWidth: "336px",
        width: "100%",
        padding: "10px 5px",
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
    drawerWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        position: 'absolute',
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
    navLinks:{
        height: "100vh",
        width: "80vw !important",
        paddingTop: "30px",
    },

    navHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 0.2,
    },
    hamburger: {
        display: "none",
    },
    linksContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 0.8,
    },
}));
