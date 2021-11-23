import { makeStyles } from '@mui/styles'


export default makeStyles(theme => ({
  root: {

  },
  inherit: {
    color: '#858585 !important',
    fontSize: '16px !important',
    lineHeight: '24px !important',
    height: '64px',
    background: '#F8F8F8 !important',
    '@media (max-width:900px)': {
      height: '48px',
    },
  },
  success: {
    color: '#4AAF47 !important',
    fontSize: '16px !important',
    lineHeight: '24px !important',
    height: '64px',
    background: '#e8ffe8 !important',
    '@media (max-width:900px)': {
      height: '48px',
    },
  },
}))
