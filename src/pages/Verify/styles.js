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
  sliderArea: {
    backgroundColor: '#F6F8FE',
  },
  sliderItemArea: {
    marginBottom: '24px !important',
    background: 'transparent !important',
    border: 'none !important',
    boxShadow: 'none !important',
    width: '500px',
    height: '550px',
  },
  fieldArea: {
    maxWidth: '448px',
    width: '448px',
    marginTop: '24px',
    marginBottom: '24px',
    textAlign: 'center'
  },
  verfiyIcon: {
    borderRadius: '50%',
    width: '48px !important',
    height: '48px !important',
    background: '#F1F9F0',
    color: '#4AAF47 !important',
    padding: '10px',
  },
  title: {
    fontWeight: '500',
    fontSize: '20px',
    marginBottom: '40px',
  },
  description: {
    fontSize: '16px',
    color: '#555',
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
    textAlign: 'center',
    color: '#858585 !important',
    '& > * button': {
      color: '#62BE5F !important',
      fontSize: '16px !important',
      textDecoration: 'unset !important'
    }
  },
}))
