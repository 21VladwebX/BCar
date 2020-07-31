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
        padding: '0 25%',
        border: '1px solid blue',
        maxWidth: 1120,
        margin: '0 auto',
    },
    open: {
        display: 'flex',
        justifyContent: 'center',
    }
})
