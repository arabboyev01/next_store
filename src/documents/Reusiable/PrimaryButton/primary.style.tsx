import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    button: {
        width: '100%',
        height: "100%",
        background: "#0D63F3",
        color: "#fff",
        borderRadius: "8px",
        fontSize: "14px",
        '&:hover': {
            opacity: 0.8,
            background: "#000 !important",
            color: "#fff",
        },
        '@media(max-width: 650px)': {
            fontSize: "12px",
            fontWeight: 400,
        },
    },
}))
