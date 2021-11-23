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
    maxWidth: '448px',
    width: '448px',
    marginTop: '24px',
    marginBottom: '24px',
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
  signupBtn: {
    color: '#fff !important',
    fontSize: '16px !important',
    height: '48px',
    marginTop: '40px !important',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 80px) !important',
  },
  loginLink: {
    marginTop: '40px',
    marginBottom: '40px',
    heigth: '20px',
    display: 'flex',
    justifyContent: 'center',
    '& > svg': {
      marginRight: '8px'
    },
    '& > a': {
      display: 'flex !important',
      height: '20px !important',
      color: '#858585 !important',
      fontSize: '16px !important',
      textDecoration: 'unset !important'
    }
  },
}))
