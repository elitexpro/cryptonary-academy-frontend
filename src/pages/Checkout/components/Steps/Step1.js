import React from "react"
import {
  Box,
  Typography,
  OutlinedInput,
  Checkbox,
  FormControlLabel,
} from "@mui/material"
import { ReactComponent as ArrowRight } from "assets/image/arrow_right.svg"
import { inputStyles } from "../../styles"
import MButton from "components/CustomMaterial/MButton"
import { LabelForCheckbox } from "../LabelForCheckbox"
import { useDispatch } from "react-redux"
import { login, signupCheckout, getRecurlyUser } from "redux/modules/auth/actions"

const Step1 = ({
  termsAndPolicy,
  changeTerms,
  setStep,
  formData,
  onChangeFormData,
  setError
}) => {
  const dispatch = useDispatch()

  const onSubmit = () => {
    dispatch(
      login({
        body: {
          email: formData.email,
          password: formData.password,
        },
        success: ({ data: { data: { id } } }) => {
          dispatch(getRecurlyUser({
            id: `code-${id}`,
            success: () => {
              setStep(2)
            },
            fail: () => {
              dispatch(
                  signupCheckout({
                    body: {
                      email: formData.email,
                      username: formData.name,
                      code: id,
                    },
                    success: () => {
                      setStep(2)
                    },
                  })
                )
            }
          }))
        },
        fail: ({ data: { error }}) => {
          setError(error)
        }
      })
    )
  }

  return (
    <>
      {formData.error && <Typography color="#FFF" textAlign="center" py="10px" mb="15px" bgcolor="red">{formData.error}</Typography>}
      <Typography color="#555555">Name</Typography>
      <OutlinedInput
        placeholder="Enter full name"
        sx={inputStyles}
        value={formData.name}
        onChange={onChangeFormData("name")}
      />

      <Typography color="#555555" mt="10px">
        Email Address
      </Typography>
      <OutlinedInput
        placeholder="Enter email address"
        sx={inputStyles}
        value={formData.email}
        onChange={onChangeFormData("email")}
      />

      <Typography color="#555555" mt="10px">
        Password
      </Typography>
      <OutlinedInput
        placeholder="Set your account password"
        sx={inputStyles}
        value={formData.password}
        onChange={onChangeFormData("password")}
      />
      <Box display="flex" my="15px" width="100%" justifyContent="space-between">
        <OutlinedInput
          placeholder="Enter zipcode"
          sx={{ ...inputStyles, width: "48%" }}
          value={formData.zipcode}
          onChange={onChangeFormData("zipcode")}
        />
        <OutlinedInput
          placeholder="United Kindom"
          sx={{ ...inputStyles, width: "48%" }}
          value={formData.country}
          onChange={onChangeFormData("country")}
        />
      </Box>
      <FormControlLabel
        control={
          <Checkbox
            onChange={changeTerms}
            checked={termsAndPolicy}
            sx={{
              color: "#858585",
              "&:hover": {
                bgcolor: "#FFF",
              },
              "&.Mui-checked": {
                color: "#4AAF47",
              },
            }}
          />
        }
        label={<LabelForCheckbox />}
      />
      <MButton
        variant="contained"
        color="success"
        disabled={!termsAndPolicy}
        onClick={onSubmit}
        sx={{ fontSize: "16px", px: 2, color: "white", mb: "15px" }}
      >
        Continue to payment <ArrowRight />
      </MButton>
    </>
  )
}

export default Step1
