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
    headTitle1: {
      fontWeight: 500,
      color: "#141414",
      fontSize: "3.5rem",
    },
    headTitle2: {
      fontWeight: 500,
      color: "#141414",
      fontSize: "2.5rem",
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
    subTitle4: {
      fontSize: "0.875rem",
    },
  },
}

export default {
  default: createTheme({ ...defaultTheme, ...overrides }),
}
