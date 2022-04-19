import React, { useEffect, useState } from "react"
import { inputStyles } from "../../styles"
import { Box, Typography, OutlinedInput } from "@mui/material"
import MButton from "components/CustomMaterial/MButton"
import { ModalWrapper } from "./ModalWrapper"
import { login } from "redux/modules/auth/actions"
import { useDispatch } from "react-redux"

export const ModalChangeLoginData = ({
  isOpenModal,
  switchModal,
  name,
  email,
  password,
  zipcode,
  country,
}) => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    name,
    email,
    password,
    zipcode,
    country,
    error: "",
  })

  const onChange = (field) => (e) =>
    setData({ ...data, [field]: e.target.value, error: "" })

  const changeAuth = () => {
    dispatch(
      login({
        body: {
          email: data.email,
          password: data.password,
        },
        success: () => {
          switchModal()
        },
        fail: ({ data: { error } }) => {
          setData({ ...data, error })
        },
      })
    )
  }

  useEffect(() => {
    if (isOpenModal)
      setData({
        name,
        email,
        password,
        zipcode,
        country,
        error: "",
      }) // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenModal])
  return (
    <ModalWrapper
      isOpenModal={isOpenModal}
      switchModal={switchModal}
      title="Edit account information"
    >
      <Typography color="#555555">Name</Typography>
      <OutlinedInput
        placeholder="Enter full name"
        sx={inputStyles}
        disabled
        value={data.name}
        onChange={onChange("name")}
      />

      <Typography color="#555555" mt="10px">
        Email Address
      </Typography>
      <OutlinedInput
        placeholder="Enter email address"
        sx={inputStyles}
        value={data.email}
        onChange={onChange("email")}
      />

      <Typography color="#555555" mt="10px">
        Password
      </Typography>
      <OutlinedInput
        placeholder="Set your account password"
        sx={inputStyles}
        value={data.password}
        onChange={onChange("password")}
      />
      <Box display="flex" my="15px" width="100%" justifyContent="space-between">
        <OutlinedInput
          placeholder="Enter zipcode"
          sx={{ ...inputStyles, width: "48%" }}
          value={data.zipcode}
          onChange={onChange("zipcode")}
        />
        <OutlinedInput
          placeholder="United Kindom"
          sx={{ ...inputStyles, width: "48%" }}
          value={data.country}
          onChange={onChange("country")}
        />
      </Box>
      {data.error && (
        <Typography
          color="#FFF"
          textAlign="center"
          mt="15px"
          bgcolor="red"
          py="10px"
        >
          {data.error}
        </Typography>
      )}
      <Box display="flex" justifyContent="flex-end">
        <MButton
          variant="contained"
          color="success"
          disabled={!data.email || !data.password}
          onClick={changeAuth}
          sx={{
            fontSize: "16px",
            px: "37px",
            py: "12px",
            color: "white",
            mt: "15px",
          }}
        >
          Save changes
        </MButton>
      </Box>
    </ModalWrapper>
  )
}
