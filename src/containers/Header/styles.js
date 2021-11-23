import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
  root: {

  },
  appBar: {
    padding: '20px',
    background: 'white !important',
  },
  toolbar: {
    minHeight: 'unset !important',
    height: '40px',
    [theme.breakpoints.down('md')]: {
      padding: '0px !important',
    }
  },
  button: {
    color: '#858585 !important',
    fontSize: '16px !important',
    lineHeight: '24px !important',
  },
  topicPoper: {
    zIndex: '1102',
    width: '420px',
    marginTop: '20px !important',
  },
  topicSelectPaper: {
    padding: '40px'
  }
}))
