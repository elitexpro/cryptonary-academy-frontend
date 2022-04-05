import { makeStyles } from '@mui/styles'

export const smallHeaderGeneralStyles = {
  position: "fixed",
  left: 0,
  top: 0,
  zIndex: 1,
  width: "100%",
  backgroundColor: "#FFF",
  borderBottom: '1px solid #E4E4E4',
  p: '24px 20px',
  '@media screen and (min-width: 1500px)': {
    p: '16px 40px',
  }
}

export const contactLinkStyles = {
  mr: 2,
  fontSize: '14px',
  textDecoration: 'underline',
  cursor: 'pointer',
  '@media screen and (min-width: 1500px)': {
    mr: 4,
    fontSize: '16px',
  }
}

export const loginButtonStyles = {
  fontSize: '14px',
  px: 2, 
  color: '#555',
  '@media screen and (min-width: 1500px)': {
    fontSize: '16px',
  } 
}

export default makeStyles(theme => ({
  root: {

  },
  toolbar: {
    minHeight: 'unset !important',
    height: '40px !important',
    padding: '0px !important',
  },
  alphaPoper: {
    zIndex: '1102',
    width: 'calc(100vw - 18px)',
    paddingTop: '20px !important',
  },
  
}))
