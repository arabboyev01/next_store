import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
    sidebar: {
        width: "397px",
        height: "514px",
        background: "#fff",
        borderRadius: '10px',
        '@media(max-width: 900px)': {
            maxWidth: "360px",
            margin: "0 auto",
        },
    },
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        padding: "30px",
        cursor: "pointer",
    },
    names: {
        fontSize: "26px",
        lineHeight: "31px",
        paddingTop: "10px",
    },
    links: {
        paddingTop: "10px",
    },
    linksWrapper: {
        display: "flex",
        alignItems: "center",
        padding: "0 40px",
        height: "70px",
        borderTop: ".5px solid #E4E7EE",
        cursor: "pointer",
    },
    activeLink: {
        display: "flex",
        alignItems: "center",
        padding: "0 40px",
        height: "70px",
        borderTop: ".5px solid #E4E7EE",
        cursor: "pointer",
        background: 'linear-gradient(270deg, rgba(235, 240, 246, 0) 0%, #EBF0F6 46.65%, rgba(235, 240, 246, 0) 100%)',
    },
    icons: {
        width: "33px",
        height: "33px",
    },
    linkName: {
        marginLeft: "15px",
    },
}))