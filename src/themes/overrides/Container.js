// ----------------------------------------------------------------------

export default function Container(theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          '&.MuiContainer-maxWidthXl': {
            backgroundColor: "#000"
          }
        },
        maxWidthXl: {
          background: "black !important"
          // width: '1600px'
        }
      }
    }
  }
}
