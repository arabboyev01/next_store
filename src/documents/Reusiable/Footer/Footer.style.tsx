import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    footerWrapper: {
        width: "100%",
        height: "auto",
        background: 'linear-gradient(to left, rgba(77, 94, 246, 0.2), rgba(246, 77, 77, 0.2))',
        paddingBottom: "42px",
    },
    contentWrapper: {
        maxWidth:"1230px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
        gridGap: '10px',
        borderBottom: "1px solid rgba(0, 0, 0, 0.5)",
        paddingBottom: "40px",
        '@media(max-width: 1230px)': {
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            paddingLeft: "20px",
        },
    },
    singleContent: {
        paddingTop: "60px",
    },
    title: {
        fontSize: "16px",
        lineHeight: "19.22px",
        fontWeight: 600,
    },
    sub: {
        fontSize: "16px",
        lineHeight: "19.22px",
        fontWeight: 400,
        paddingTop: "20px",
    },
    socialIcons: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        gap: "26px",
        paddingTop: '27px',
    },
    icon: {
        fontSize: "36px",
        '@media(max-width: 650px)': {
            fontSize: "26px",
        },
    },
}))
