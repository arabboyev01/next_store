import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    mainTitle:{
        fontSize: '28px',
        lineHeight: "33.2px",
        fontWeight: 600,
        padding: "10px 0",
        '@media(max-width: 650px)': {
            fontSize: "22px",
            lineHeight: "24px",
            fontWeight: 500,
        },
    }
}))
