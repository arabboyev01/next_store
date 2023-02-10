import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
    mainWrapper: {
        padding: '30px 40px',
        background: '#fff',
        borderRadius: '10px',
        marginLeft: '20px',
    },
    title: {
        fontSize: '28px',
        lineHeight: '32px',
        fontWeight: 600,
    },
    mainData: {
        marginTop: '50px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(346px, 1fr))',
        gridGap: '10px',
    },
}))