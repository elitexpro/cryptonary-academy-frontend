import React from "react"
import { Link } from "react-router-dom"
import { Typography } from "@mui/material"

export const LabelForCheckbox = () => (
  <Typography color="#858585">
    I accept
    <Link to="/terms-conditions" target="_blank">
      <Typography
        color="#555555"
        component="span"
        sx={{ textDecoration: "underline", px: "2px" }}
      >
        terms
      </Typography>
    </Link>
    and
    <Link to="/privacy-policy" target="_blank">
      <Typography
        color="#555555"
        component="span"
        sx={{ textDecoration: "underline", px: "2px" }}
      >
        privacy policy
      </Typography>
    </Link>
  </Typography>
)
