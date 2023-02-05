import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
    mainWrapper: {
        display: 'flex',
        alignItems: 'start',
        maxWidth: "1230px",
        margin: '60px auto',
    },
    sideBar: {
        flex: 0.3,
    },
    content:{
        flex: 0.7,
    },
}))