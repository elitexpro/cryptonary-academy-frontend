import { makeStyles } from '@mui/styles'


export default makeStyles(theme => ({
  root: {

  },
  title: {
    fontWeight: '500',
    fontSize: '24px',
    marginBottom: '16px',
  },
  description: {
    fontSize: '16px',
    color: '#858585',
  },
  resendLink: {
    marginTop: '40px',
    marginBottom: '40px',
    textAlign: 'center',
    '& > button': {
      color: '#62BE5F !important',
      fontSize: '16px !important',
      textDecoration: 'unset !important'
    }
  },
}))
