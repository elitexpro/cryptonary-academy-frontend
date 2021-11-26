import defaultTheme from "./default"
import { createTheme } from '@mui/material/styles'

const overrides = {
  typography: {
    fontFamily: 'CircularStd',
    fontWeight: 400,
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.64rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.285rem",
    },
    h6: {
      fontSize: "1.142rem",
    },
    subTitle: {
      fontSize: "1rem",
    },
    subTitle1: {
      fontSize: "1.125rem",
    },
    subTitle2: {
      fontSize: "0.75rem",
    },
    subTitle3: {
      fontSize: "1.25rem",
    },
  },
}

export default {
  default: createTheme({ ...defaultTheme, ...overrides }),
}
