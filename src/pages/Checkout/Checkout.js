import React, { useState } from "react"
import { Stack, Box, Typography } from "@mui/material"
import Accordion from "components/Accordion/Accordion"
import { accordionData } from "./accordionData"
import { ReactComponent as StripeSvg } from "assets/logo/stripe.svg"
import { ReactComponent as CoinbaseSvg } from "assets/logo/coinbase.svg"
import { ReactComponent as Lock } from "assets/image/lock.svg"
import { useLocation } from "react-router"
import {
  CARD_MEMBERSHIP_PLAN,
  CRYPTO_MEMBERSHIP_PLAN,
} from "containers/Paywall/membershipPlansData"
import { accordionWrapper, logosWrapper, mainFormWrapper } from "./styles"
import { ModalChangePlan } from "./components/Modals/ModalChangePlan"
import { ModalChangeLoginData } from "./components/Modals/ModalChangeLoginData"
import { useSelector } from "react-redux"
import { currentUserSelector } from "redux/modules/auth/selectors"
import { CurrentStep } from "./components/Steps/CurrentStep"
import Progress from "./components/Progress"

const Checkout = () => {
  const currentUser = useSelector(currentUserSelector)
  const { state } = useLocation()
  const method = state.method ?? "Monthly"
  const isCrypto = state.isCrypto ?? false

  const [step, setStep] = useState(currentUser ? 2 : 1)
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
    error: "",
  })
  const setError = (error) => setFormData({...formData, error })
  const onChangeFormData = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value, error: "" })

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
        isCrypto={plan.isCrypto}
        paymentMethod={plan.method}
        setPaymentMethod={setPaymentMethod}
        switchModal={changeBooleanData("modalPlan")}
      />
      <ModalChangeLoginData
        {...formData}
        isOpenModal={modalLoginData}
        switchModal={changeBooleanData("modalLoginData")}
      />
      <ModalChangeLoginData
        isOpenModal={modalLoginData}
        switchModal={changeBooleanData("modalLoginData")}
        {...formData}
      />
      <Stack maxWidth="50%" width="100%">
        <Box sx={mainFormWrapper}>
          <Progress
            step={step}
            plan={plan}
            changeBooleanData={changeBooleanData}
          />
          <CurrentStep
            step={step}
            setStep={setStep}
            setError={setError}
            formData={formData}
            termsAndPolicy={termsAndPolicy}
            onChangeFormData={onChangeFormData}
            changeTerms={changeBooleanData("termsAndPolicy")}
          />
        </Box>
      </Stack>
      <Stack maxWidth="50%" width="100%">
        <Box sx={accordionWrapper}>
          <div>{accordionData.map((data) => <Accordion {...data} />)}</div>
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
