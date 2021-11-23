import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
  root: {

  },
  heroBox: {
    marginTop: '80px',
    padding: '0',
    color: 'black',
    flexGrow: 1,
    '@media (max-width:900px)': {
      padding: '0px 16px 0px 16px'
    },
  },
  fieldArea: {
    textAlign: 'center',
    maxWidth: '700px',
    width: '700px',
    marginTop: '24px',
    marginBottom: '24px',
  },
  title: {
    fontWeight: '500',
    color: '#141414',
    fontSize: '48px',
    marginBottom: '16px',
    marginTop: '32px',
    '@media (max-width:900px)': {
      fontSize: '40px',
    },
  },
  description: {
    fontSize: '18px',
    color: '#555',
  },
  startBtn: {
    color: '#fff !important',
    fontSize: '16px !important',
    height: '48px',
    width: '138px',
    marginTop: '32px !important',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 80px) !important',
  },
  back: {
    position: 'relative'
  },
  ethereumImg: {
    top: '-40px',
    left: '0px',
    position: 'absolute',
    zIndex: '-1',
    userSelect: 'none',
  },
  bitcoinImg: {
    top: '-40px',
    zIndex: '-1',
    right: '0px',
    userSelect: 'none',
    position: 'absolute'
  },
  unicornImg: {
    bottom: '0px',
    left: '0px',
    zIndex: '-1',
    userSelect: 'none',
    position: 'absolute'
  },
  blackCoinImg: {
    bottom: '0px',
    right: '0px',
    zIndex: '-1',
    userSelect: 'none',
    position: 'absolute'
  }
}))
