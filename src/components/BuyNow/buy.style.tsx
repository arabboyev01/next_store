import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
    buyNowWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '1230px',
        margin: '100px auto',
        '@media(max-width: 650px)': {
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '400px',
            margin: '50px 10px',
            width: "100%",
        },
    },
    inputFile: {
        flex: 0.6,
        '@media(max-width: 650px)': {
            flex: 1,
            width: "95%",
        },
    },
    summaryFile: {
        flex: 0.4,
        '@media(max-width: 650px)': {
            flex: 1,
            width: "95%",
        },
    },
}))