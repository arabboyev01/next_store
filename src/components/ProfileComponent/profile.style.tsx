import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
    mainWrapper: {
        display: 'flex',
        alignItems: 'start',
        maxWidth: "1230px",
        margin: '60px auto',
        '@media(max-width: 900px)': {
            flexDirection: "column",
            alignItems: 'center',
        },
    },
    stickyMain: {
        flex: 0.3,
        position: "sticky",
        top: "100px",
        '@media(max-width: 900px)': {
            flex: 1,
            position: "relative",
            top: 0,
        },
    },
    sideBar: {
        flex: 0.3,
        '@media(max-width: 900px)': {
            flex: 1,
        },
    },
    content:{
        flex: 0.7,
        '@media(max-width: 900px)': {
             flex: 1,
        },
    },
}))