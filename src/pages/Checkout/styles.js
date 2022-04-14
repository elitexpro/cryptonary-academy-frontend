export const inputStyles = {
  width: "100%",
  "& fieldset.MuiOutlinedInput-notchedOutline": {
    borderColor: "#EAEAEA",
    transition: "0.15s border-color ease-in-out",
  },
  "&:hover fieldset.MuiOutlinedInput-notchedOutline": {
    borderColor: "#A2A2A2",
  },
  "input::placeholder": { color: "#858585" },
} 

export const checkedIcon = {
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  bgcolor: "#4AAF47",
} 

export const accordionWrapper = {
  width: "100%",
  maxWidth: "504px",
  height: "100%",
  mx: "auto",
  mt: "50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
}

export const logosWrapper = {
  display: "flex",
  my: "24px",
  justifyContent: "flex-end",
  alignItems: "center"
}

export const mainFormWrapper = {
  width: "100%",
  maxWidth: "520px",
  height: "100%",
  mx: "auto",
  display: "flex",
  flexDirection: "column"
}