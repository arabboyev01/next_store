import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
    mainWrapper: {
        display: 'flex',
        maxWidth: '1230px',
        margin: '60px auto',
        '@media(max-width: 650px)': {
            flexDirection: "column",
            margin: "60px 10px",
        },
    },
    filters: {
        flex: 0.3,
        '@media(max-width: 650px)': {
            flex: 1,
        },
    },
    datas: {
        flex: 1,
        '@media(max-width: 650px)': {
            flex: 1,
        },
    },
    filterWrapper: {
        maxWidth: '250px',
        height: 'auto',
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        '@media(max-width: 650px)': {
            maxWidth: "400px",
            margin: "0 10px",
        },
    },
    rangePrices: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px',
    },
    price: {
        color: '#1E1E1E',
        border: '1px solid #E4E7EE',
        width: '100px',
        paddingLeft: '5px',
        fontSize: '14px',
    },
    filterType: {
        fontSize: '18px',
        lineHeight: '22px',
        marginTop: '10px',
    },
    selector: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px',
        gap: '10px',
    },
    hr: {
        margin: '30px 0 20px 0',
        color: '#E4E7EE',
    },
    clear: {
        background: "#0D63F3",
        color: "#fff",
        '&:hover': {
            opacity: 0.8,
            background: "#0D63F3 !important",
        },
    },
    pagination: {
        margin: "20px 0",
        justifyContent: "flex-end",
    },
}))