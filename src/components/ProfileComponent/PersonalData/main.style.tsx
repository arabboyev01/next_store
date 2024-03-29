import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
    mainWrapper: {
        padding: '30px 40px',
        background: '#fff',
        borderRadius: '10px',
        marginLeft: '20px',
        '@media(max-width: 650px)': {
            maxWidth: '430px',
            margin: '20px auto 0 auto',
            padding: '15px',
        },
    },
    title: {
        fontSize: '28px',
        lineHeight: '32px',
        fontWeight: 600,
        paddingBottom: '20px',
    },
    subTitle: {
        fontSize: '24px',
        lineHeight: '28.8px',
        fontWeight: 500,
        marginTop: '50px',
    },
    mainData: {
        marginTop: '30px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(346px, 1fr))',
        gridGap: '10px',
        '@media(max-width: 650px)': {
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
        },
    },
    sub: {
        fontSize: '16px',
        lineHeight: '18.8px',
        fontWeight: 500,
        color: '#455262',
        paddingBottom: '5px',
        paddingLeft: '5px',
    },
    singleField: {
        maxWidth: '346px',
    },
    shortField: {
        maxWidth: '150px',
    },
    additionalBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        marginTop: '20px',
        marginLeft: '10px',
    },
    saveButton: {
        maxWidth: '250px',
        height: '64px',
        marginTop: '30px',
    },
    success: {
        background: 'green',
        padding: '10px',
        borderRadius: '8px',
        color: '#fff',
        fontSize: '20px',
        fontWeight: 500,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '58%',
        '@media(max-width: 650px)': {
            maxWidth: '100%',
            fontSize: '16px',
            fontWeight: 400,
        },
    },
}))