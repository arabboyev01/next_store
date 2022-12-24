import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    brandsWrapper: {
        display: "grid",
        gridTemplateColumns: 'repeat(auto-fit, minmax(188px, 1fr))',
        gridGap: '20px',
        '@media(max-width: 650px)':{
            gridTemplateColumns: 'repeat(auto-fit, minmax(135.89px, 1fr))',
        }
    },
    brandItem: {
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "8px",
        height: "100px",
        width: "100%",
    },
}))
