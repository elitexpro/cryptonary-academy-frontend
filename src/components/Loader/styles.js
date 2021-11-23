import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
  root: {
  },
  loading: {
    // position: 'absolute',
    background: 'white',
    height: '4px',
    width: '100%',
    opacity: '0.3',
    zIndex: '1',
  },
  backdrop: {
    position: 'absolute',
    margin: 'auto',
    padding: 'auto'
  }
}))
