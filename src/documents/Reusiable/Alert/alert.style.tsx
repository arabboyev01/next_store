import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    alert: {
        position: "fixed",
        bottom: "1%",
        left: "40%",
        maxWidth: "300px",
        zIndex: "1000",
        '@media(max-width: 650px)': {
            left: "10%",
        },
    }
}))
