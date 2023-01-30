import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    signUpWrapper: {
        maxWidth: "1330px",
        margin: '0 auto 120px auto',
        '@media(max-width: 600px)': {
            margin: '0 auto 50px auto',
        },
    },
    title: {
        padding: "120px 0 30px 0",
        textAlign: "center",
        fontSize: "48px",
        lineHeight: "52px",
        fontWeight: 600,
        '@media(max-width: 600px)': {
            padding: "50px 0 20px 0",
            fontSize: "24px",
            lineHeight: "26px",
            fontWeight: 600,
        },
    },
    contentWrapper: {
        maxWidth: "800px",
        margin: "0 auto",
    },
    itemsContainer: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        gap: "30px",
        marginTop: "30px",
        '@media(max-width: 600px)': {
            flexDirection: "column",
            alignItems: "center",
        },
    },
    fieldContainer: {
        width: "350px",
    },
    submit: {
        width: "350px",
        height: "50px",
        marginTop: "30px",
    },
}))
