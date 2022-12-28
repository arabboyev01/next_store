import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    modalWrapper: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '604px',
        background: '#FBFBFB',
        border: 'none',
        padding: "40px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "15px",
        '@media(max-width: 650px)': {
            maxWidth: '360px',
        },
    },
    title: {
        fontSize: "26px",
        lineHeight: "31px",
        maxWidth: "426px",
        textAlign: "center",
        paddingTop: "20px",
    },
    delete: {
        width: "90px",
        height: "90px",
        background: '#F7DDE2',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "50%",
    },
    deleteIcon: {
        fontSize: "30px",
        marginTop: "30px",
        color: "#D80027",
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingTop:'30px',
        gap: "30px",
        '@media(max-width: 650px)': {
            flexDirection: "column",
        },
    },
    goBack: {
        background: "#D80027",
        padding: '15px 47px',
        color: '#fff',
        border: "none",
        borderRadius: "10px",
        '&:hover': {
            background: "#D80027 !important",
            opacity: 0.9,
            cursor: 'pointer',
        }
    },
    yesDelete: {
        background: "#fff",
        padding: '15px 47px',
        color: '#7E8187',
        border: ".2px solid #7E8187",
        borderRadius: "10px",
        '&:hover': {
            background: "#fff !important",
            opacity: 0.9,
            cursor: 'pointer',
        }
    },
}))
