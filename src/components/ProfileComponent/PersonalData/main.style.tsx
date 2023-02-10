import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
    mainWrapper: {
        padding: '30px 40px',
        background: '#fff',
        borderRadius: '10px',
        marginLeft: '20px',
        '@media(max-width: 650px)': {
            maxWidth: "360px",
            marginLeft: 0,
            marginTop: "20px",
             padding: '20px',
        },
    },
    title: {
        fontSize: '28px',
        lineHeight: '32px',
        fontWeight: 600,
        paddingBottom: "20px",
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
        color: "#455262",
        paddingBottom: "5px",
        paddingLeft: "5px",
    },
    singleField: {
        maxWidth: "346px",
    },
    shortField: {
        maxWidth: "150px",
    },
    additionalBox: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
    },
    button: {
        marginTop: "20px",
        marginLeft: '10px',
    },
}))