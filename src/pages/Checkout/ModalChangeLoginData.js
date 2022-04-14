import React, { useEffect, useState } from "react" 
import { inputStyles } from "./styles" 
import { Box, Typography, OutlinedInput } from "@mui/material" 
import MButton from "components/CustomMaterial/MButton" 
import { ModalWrapper } from "./ModalWrapper" 

export const ModalChangeLoginData = ({
  isOpenModal,
  switchModal,
  name,
  email,
  password,
  zipcode,
  country,
}) => {
  const [data, setData] = useState({ name, email, password, zipcode, country }) 
  useEffect(() => {
    if (isOpenModal)
      setData({
        name,
        email,
        password,
        zipcode,
        country,
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
        defaultValue={data.name}
      />

      <Typography color="#555555" mt="10px">
        Email Address
      </Typography>
      <OutlinedInput
        placeholder="Enter email address"
        sx={inputStyles}
        defaultValue={data.email}
      />

      <Typography color="#555555" mt="10px">
        Password
      </Typography>
      <OutlinedInput
        placeholder="Set your account password"
        sx={inputStyles}
        defaultValue={data.password}
      />
      <Box display="flex" my="15px" width="100%" justifyContent="space-between">
        <OutlinedInput
          placeholder="Enter zipcode"
          sx={{ ...inputStyles, width: "48%" }}
          defaultValue={data.zipcode}
        />
        <OutlinedInput
          placeholder="United Kindom"
          sx={{ ...inputStyles, width: "48%" }}
          defaultValue={data.country}
        />
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <MButton
          variant="contained"
          color="success"
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
