import { makeStyles } from '@mui/styles'

export const LoginModalStyle = {
    width: '1230px',
    margin: '70px auto 0 auto',
    height: '90vh',
}
export default makeStyles(() => ({
    mainWrapper: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "1230px",
        margin: "0 auto",
    },
    mainSection: {
        flex: 0.25,
        background: 'linear-gradient(to left, rgba(77, 94, 246, 0.2), rgba(246, 77, 77, 0.2))',
        height: "90vh",
        marginTop: "-15px",
        marginLeft: '-15px',
        padding: "20px 0 0 50px",
    },
    descSection: {
        flex: 0.7,
    },
    title: {
        marginTop: "20px",
        cursor: "pointer",
        padding: "0 18px",
    },
    activeTitle: {
        background: '#fff',
         marginTop: "20px",
        cursor: "pointer",
        padding: "12px 18px",
        borderRadius: "4px 0px 0px 4px",
    },
    catalogDescWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
    },
    categorySubTitles: {
        flex: 0.3,
    },
    descTitle: {
        marginTop: "20px",
        cursor: "pointer",
        padding: "0 18px",
        fontWeight: 600,
    },
    subtitle: {
        marginTop: "20px",
        cursor: "pointer",
        padding: "0 18px",
    },
}))