import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
    sidebar: {
        width: "397px",
        height: "514px",
        background: "#fff",
        borderRadius: '10px',
    },
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        padding: "30px",
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
    icons: {
        width: "33px",
        height: "33px",
    },
    linkName: {
        marginLeft: "15px",
    },
}))