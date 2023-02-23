import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
    catalogWrapper: {
        position: "fixed",
        width: "100%",
        height: "100vh",
        background: "#fff",
        left: 0,
        top: 0,
        zIndex: 1000,
        transition: '2s ease-in-out',
    },
    catalogNot: {
        width: "100%",
        position: "fixed",
        height: "100vh",
        background: "transparent",
        left: '-100%',
        top: 0,
        zIndex: 0,
        transition: '2s ease-in-out',
    },
    title: {
        fontSize: "24px",
        lineHeight: "25px",
        padding: "30px 0 20px 0",
        borderBottom: ".2px solid rgba(0, 0, 0,0.2)",
        textAlign: 'center',
    },
    closeIcon: {
        position: "absolute",
        right: "30px",
        top: "30px",
        fontSize: "1.5rem",
    },
    dividedMenu: {
         display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: "10px 20px 10px 20px",
        borderBottom: ".1px solid rgba(0, 0, 0,0.1)",
    },
    chapters: {
         fontSize: '18px',
        lineHeight: '22px',
        fontWeight: 500,
        marginLeft: '10px',
    },
}))