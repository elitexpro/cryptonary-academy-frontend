import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
  root: {

  },
  heroBox: {
    padding: '48px 80px 48px 80px',
    backgroundColor: "#141414",
    color: 'white',
    flexGrow: 1,
    '@media (max-width:900px)': {
      padding: '35px 16px 35px 16px'
    },
  },
  startButton: {
    marginTop: '32px !important',
    color: 'white !important',
    width: '136px',
    height: '48px',
    fontSize: '16px !important',
    '@media (max-width:900px)': {
      width: '200px',
    },
  },
  headerText: {
    fontWeight: '500',
    fontSize: '40px',
  },
  subHeaderText: {
    maxWidth: '720px',
    fontSize: '16px'
  },
  containerBox: {
    padding: '40px 40px 40px 40px',
    '@media (max-width:900px)': {
      padding: '32px 16px 32px 16px',
    },
  },
  basicsBox: {
    padding: '0px 40px 0px 40px',
    '@media (max-width:900px)': {
      padding: '0px 16px 0px 16px',
    },
  },
  quizBox: {
    height: '330px',
    padding: '0px 40px 0px 40px',
    '@media (max-width:900px)': {
      padding: '0px 0px 0px 0px',
      height: '380px',
    },
  },
  quizArea: {
    paddingTop: '66px',
    paddingBottom: '66px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 'calc(100% - 40px)',
    position: 'absolute',

    '@media (max-width:900px)': {
      width: '100%',
      padding: '50px 16px 50px 16px',
    },
  },
  sectionTitle: {
    color: '#141414',
    fontSize: '32px',
  },
  quizTitle: {
    fontSize: '40px',
    color: 'white',
    marginBottom: '16px',
  },
  quizContent: {
    fontSize: '16px',
    color: 'white',
    maxWidth: '540px'
  }
}))
