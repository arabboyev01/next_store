import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    button: {
        width: "130px",
        height: "40px",
        background: "#0D63F3",
        color: "#fff",
        '&:hover': {
            opacity: 0.8,
            background: "#0D63F3 !important",
        },
        '@media(max-width: 650px)': {
            width: "100px",
            height: "30px",
            fontSize: "12px",
            fontWeight: 400,
        },
    },
}))
