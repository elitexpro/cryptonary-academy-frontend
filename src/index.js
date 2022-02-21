import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/AppContainer'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Themes from './themes'
import "simplebar/src/simplebar.css"
import 'react-lazy-load-image-component/src/effects/blur.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

ReactDOM.render(
  <ThemeProvider theme={Themes.default}>
    <CssBaseline />
    <App />
  </ThemeProvider>
  ,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
