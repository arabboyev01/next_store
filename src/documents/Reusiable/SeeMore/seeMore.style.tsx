import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    button: {
        maxWidth: "1230px",
        width: "100%",
        height: "50px",
        background: "#fff",
        fontSize: "18px",
        lineHeight: "22px",
        fontWeight: 600,
        color: "#000",
        '&:hover': {
            background: "#fff !important",
            opacity: 0.7,
        },
    }
}))
