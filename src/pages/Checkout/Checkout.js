import React, { useState } from "react" 
import {
  Stack,
  Box,
  Typography,
  OutlinedInput,
  Checkbox,
  FormControlLabel,
} from "@mui/material" 
import Accordion from "components/Accordion/Accordion" 
import { accordionData } from "./accordionData" 
import { ReactComponent as StripeSvg } from "assets/logo/stripe.svg" 
import { ReactComponent as CoinbaseSvg } from "assets/logo/coinbase.svg" 
import { ReactComponent as Lock } from "assets/image/lock.svg" 
import { ReactComponent as ProgressBar } from "assets/image/checkout-step-one.svg" 
import { ReactComponent as ArrowRight } from "assets/image/arrow_right.svg" 
import { useLocation } from "react-router" 
import {
  CARD_MEMBERSHIP_PLAN,
  CRYPTO_MEMBERSHIP_PLAN,
} from "containers/Paywall/membershipPlansData" 
import { inputStyles, accordionWrapper, logosWrapper, mainFormWrapper } from "./styles" 
import MButton from "components/CustomMaterial/MButton" 
import { ModalChangePlan } from "./ModalChangePlan" 
import { ModalChangeLoginData } from "./ModalChangeLoginData" 
import { getTodayPlusSeveralMonth } from "helpers" 
import { LabelForCheckbox } from "./LabelForCheckbox"

const Checkout = () => {
  const { state } = useLocation() 
  const method = state.method ?? "Monthly" 
  const isCrypto = state.isCrypto ?? false 

  const [booleanData, setBooleanData] = useState({
    modalPlan: false,
    modalLoginData: false,
    termsAndPolicy: false,
  }) 
  const { modalPlan, modalLoginData, termsAndPolicy } = booleanData 
  const changeBooleanData = (method) => () =>
    setBooleanData({ ...booleanData, [method]: !booleanData[method] }) 

  const [plan, setPlan] = useState({
    method,
    isCrypto,
    currentBlock: (isCrypto
      ? CRYPTO_MEMBERSHIP_PLAN
      : CARD_MEMBERSHIP_PLAN
    ).find(({ title }) => title === method),
  }) 
  const setPaymentMethod = (method) => () =>
    setPlan({
      ...plan,
      method,
      currentBlock: (isCrypto
        ? CRYPTO_MEMBERSHIP_PLAN
        : CARD_MEMBERSHIP_PLAN
      ).find(({ title }) => title === method),
    }) 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    zipcode: "",
    country: "",
  }) 
  const onChangeFormData = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value }) 

  return (
    <Stack
      minHeight="calc(100vh - 80px)"
      display="flex"
      width="100%"
      flexDirection="row"
      justifyContent="center"
    >
      <ModalChangePlan
        isOpenModal={modalPlan}
        switchModal={changeBooleanData("modalPlan")}
        isCrypto={plan.isCrypto}
        paymentMethod={plan.method}
        setPaymentMethod={setPaymentMethod}
      />
      <ModalChangeLoginData
        isOpenModal={modalLoginData}
        switchModal={changeBooleanData("modalLoginData")}
        {...formData}
      />
      <Stack maxWidth="50%" width="100%">
        <Box sx={mainFormWrapper}>
          <Box mt="50px" mb="40px">
            <ProgressBar />
          </Box>
          <Typography color="#555555" mb="16px">
            Select Plan
          </Typography>
          <Box display="flex" justifyContent="space-between" mb="16px">
            <Box display="flex" alignItems="center">
              <Typography color="#141414" fontSize="20px" fontWeight="500">
                {plan.method}
              </Typography>
              <Typography
                color="#909090"
                fontSize="20px"
                mx="3px"
                sx={{ textDecoration: "line-through" }}
                component="span"
              >
                ${plan.currentBlock.old_amount || plan.currentBlock.save_money}
              </Typography>
              <Typography
                color="#555555"
                fontSize="20px"
                fontWeight="500"
                mr="16px"
              >
                ${plan.currentBlock.full_amount}
              </Typography>
              {plan.currentBlock.save_percent && (
                <Box
                  sx={{
                    color: "#4AAF47",
                    p: "6px 16px",
                    bgcolor: "#F8FCF8",
                    borderRadius: "20px",
                  }}
                >
                  Save {plan.currentBlock.save_percent}%
                </Box>
              )}
            </Box>
            <Typography
              lineHeight="36px"
              color="#909090"
              sx={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={changeBooleanData("modalPlan")}
            >
              Change
            </Typography>
          </Box>
          <Box bgcolor="#FAFAFA" borderRadius="4px">
            <Box m="16px 20px" display="flex" justifyContent="space-between">
              <Typography color="#4AAF47">Pay now</Typography>
              <Typography color="#4AAF47">
                ${plan.currentBlock.full_amount}
              </Typography>
            </Box>
            <Box m="16px 20px" display="flex" justifyContent="space-between">
              <Typography color="#555555">
                Next payment on{" "}
                {getTodayPlusSeveralMonth(plan.currentBlock.month_count)}
              </Typography>
              <Typography color="#555555">
                $
                {plan.currentBlock.old_amount ||
                  plan.currentBlock.save_money ||
                  plan.currentBlock.full_amount}
              </Typography>
            </Box>
          </Box>
          <Box height="1px" my="24px" width="100%" bgcolor="#E4E4E4" />
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
          <Box
            display="flex"
            my="15px"
            width="100%"
            justifyContent="space-between"
          >
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
                onChange={changeBooleanData("termsAndPolicy")}
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
            sx={{ fontSize: "16px", px: 2, color: "white", mb: "15px" }}
          >
            Continue to payment <ArrowRight />
          </MButton>
        </Box>
      </Stack>
      <Stack maxWidth="50%" width="100%">
        <Box sx={accordionWrapper}>
          <div> {accordionData.map((data) => <Accordion {...data} />)} </div>
          <Box sx={logosWrapper}>
            <Lock />
            <Typography mx="15px" color="#909090">
              Secure and encrypted payments
            </Typography>
            <Box mr="10px" display="flex" alignItems="flex-end">
              <StripeSvg />
            </Box>
            <CoinbaseSvg />
          </Box>
        </Box>
      </Stack>
    </Stack>
  ) 
} 

export default Checkout 
