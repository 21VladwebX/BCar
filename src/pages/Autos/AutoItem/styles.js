export default theme => ({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    border: '1px solid #4e3b3b0d',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#dadada'
    }
  },
  imgWrapper: {
    width: 100,

    '& img': {
      width: '100%'
    }
  },
  infoWrapper: {
    padding: '0 15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start'
  },
  model: {
    textTransform: 'uppercase'
  },
  engine: {
    color: '#5c5b5b',
  }
})
