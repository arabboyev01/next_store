import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
    mainWrapper: {
        maxWidth: '1230px',
        margin: '60px auto',
        background: '#fff',
        borderRadius: '10px',
        padding: '40px 20px',
        '@media(max-width: 650px)': {
            maxWidth: '350px',
        },
    },
    title: {
        fontSize: '28px',
        lineHeight: '34px',
    },
    mainProductWrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gridGap: '10px',
        marginTop: '20px',
        '@media(max-width: 650px)': {
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        },
    },
    singleProduct: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '14px',
        '@media(max-width: 650px)': {
            flexDirection: 'column',
            alignItems: 'start',
        },
    },
    subTitle: {
        fontSize: '18px',
        lineHeight: '21px',
        margin: '20px 0',
    },
    desc: {
        lineHeight: '19.8px',
        color: '#6C757D',
        width: '170px',
    },
    line: {
        width: '258px',
        height: '20px',
        borderBottom: '1px dashed #E4E7EE',
        margin: '0 10px',
    },
    code: {
        fontWeight: 700,
        color: '#1E1E1E',
    }
}))