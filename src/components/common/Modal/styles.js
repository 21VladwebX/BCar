export default theme => ({
    wrapper: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, .1)',
        left: 0,
        top: 0,
        display: 'none',
    },
    content: {
        padding: 25,
        border: '1px solid blue',
        maxWidth: 1120,
        minWidth: 480,
        margin: 'auto',
        background: '#bbbbbb'
    },
    open: {
        display: 'flex',
        justifyContent: 'center',
    },
    modalTitle: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #cac9c9',

        '& span': {
            textAlign: 'center',
            flex: '0 0 98%',
        }
    },
    closeBtn: {
        flex: '0 0 2%',
        cursor: 'pointer',
    }
})
