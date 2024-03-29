import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    mobileNavWrapper: {
        width: '100%',
    },
    contentWrapper: {
        padding: '20px 20px 0 20px',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.5s',
    },
    stickyHeader: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '55px',
        background: '#fff',
        zIndex: 1000,
        padding: '0 20px',
        transition: 'all 0.5s ease-in-out',
    },
    likeIcon: {
        fontSize: '1.7rem',
        color: '#0D63F3',
    },
    link: {
        marginTop: '10px',
    },
    menuIcon: {
        fontSize: '1.7rem',
    },
    searchInputWrapper: {
        maxWidth: '850px',
        minWidth: '200px',
        maxHeight: '46px',
        width: '100%',
        heigth: '50px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '30px auto 0 auto',
    },
    searchInput: {
        maxWidth: '850px',
        minWidth: '150px',
        width: '100%',
        padding: '10px 15px',
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px',
        border: '1px solid #E4E7EE',
        fontSize: '18px',
    },
    searchIcon: {
        fontSize: '17px',
        color: '#fff',
    },
    submitButton: {
        background: '#0D63F3',
        border: 'none',
        height: '41.5px',
        width: '60px',
        marginLeft: '-4px',
        borderTopRightRadius: '8px',
        borderBottomRightRadius: '8px',
        cursor: 'pointer',
    },
    mainContent: {
        position: 'absolute',
        left: '-300px',
        top: '30px',
        width: '300px',
        height: '100vh',
        transition: '.2s ease-in-out',
    },
    activeMainContent: {
        position: 'fixed',
        left: 0,
        top: 0,
        width: '300px',
        height: '100vh',
        background: '#fff',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        padding: '30px 20px',
        transition: '.2s ease-in-out',
    },
    closeMenuIcon: {
        position: 'absolute',
        left: '250px',
        fontSize: '1.7rem',
    },
    loginButton: {
        background: 'linear-gradient(270deg, rgba(77, 94, 246, 0.2), rgba(246, 77, 77, 0.2))',
        color: '#000',
        width: '100%',
        height: '46px',
        marginTop: '55px',
    },
    chapter: {
        paddingTop: '25px',
        borderTop: '1px solid #E4E7EE',
        width: '100%',
        marginTop: '15px',
    },
    title: {
        fontSize: '24px',
        lineHeight: '22px',
        marginBottom: '5px',
        fontWeight: 600,
    },
    chapters: {
        fontSize: '18px',
        lineHeight: '22px',
        fontWeight: 500,
        marginTop: '20px',
        marginLeft: '10px',
    },
    contact: {
        position: 'absolute',
        bottom: '50px',
    },
    concatDetail: {
        color: '#0D63F3',
        marginTop: '5px',
    },
    dividedMenu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: "10px",
    },
}))
