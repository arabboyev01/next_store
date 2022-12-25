import {makeStyles} from "@mui/styles";
export default makeStyles(() => ({
    homeWrapper: {
        maxWidth: "1230px",
        height: "auto",
        margin: "120px auto 0 auto",
        '@media(max-width: 1230px)':{
            padding: "0 20px",
        },
    },
    contentWrapper: {
        marginTop: "40px",
    },
    seeMore: {
        marginTop: "20px",
    },
    mainSales: {
        paddingTop: "40px",
    },
    page: {
        paddingTop: "86px",
        paddingBottom: "40px",
    },
}))
