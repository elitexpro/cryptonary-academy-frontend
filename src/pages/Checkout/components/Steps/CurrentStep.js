import React from "react"
import Step1 from "./Step1"
import Step2 from "./Step2"

export const CurrentStep = ({ step, ...rest }) => {
  switch (step) {
    case 1:
      return <Step1 {...rest} />
    case 2:
      return <Step2 {...rest} />
    default:
      return null
  }
}
