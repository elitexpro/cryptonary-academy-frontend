import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
  root: {

  },
  heroBox: {
    padding: '0',
    color: 'black',
    flexGrow: 1,
    '@media (max-width:900px)': {
      padding: '0px 16px 0px 16px'
    },
  },
  fieldArea: {
    textAlign: 'center',
    maxWidth: '850px',
    width: '850px',
    marginTop: '24px',
    marginBottom: '24px',
    '@media (max-width:900px)': {
      textAlign: 'left',
    },
  },
  steper: {
    color: '#858585',
    fontSize: '14px',
    margin: '0px',
  },
  title: {
    fontWeight: '500',
    color: '#141414',
    fontSize: '32px',
    marginBottom: '16px',
    marginTop: '8px',
    '@media (max-width:900px)': {
      fontSize: '20px',
    },
  },
  description: {
    fontSize: '16px',
    color: '#555',
  },
  gridArea: {
    justifyContent: 'center',
    '@media (max-width:900px)': {
      justifyContent: 'left',
    },
  },
  startBtn: {
    color: '#fff !important',
    fontSize: '16px !important',
    height: '48px',
    width: '138px',
    marginTop: '32px !important',
  },
  nextBtn: {
    fontSize: '18px !important',
    height: '48px',
    width: '160px',
    '@media (max-width:900px)': {
      width: '200px',
    },
  },
  backBtn: {
    height: '48px',
    width: '48px',
    marginRight: '8px !important',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 80px) !important',
    '@media (max-width:900px)': {
      alignItems: 'unset',
    },
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
