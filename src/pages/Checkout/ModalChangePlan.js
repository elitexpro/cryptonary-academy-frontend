import React from "react" 
import {
  CARD_MEMBERSHIP_PLAN,
  CRYPTO_MEMBERSHIP_PLAN,
} from "containers/Paywall/membershipPlansData" 
import { Box, Typography, Checkbox } from "@mui/material" 
import { ReactComponent as CircleCheckedFilled } from "assets/image/check.svg" 
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked" 
import { ModalWrapper } from "./ModalWrapper" 
import { checkedIcon } from "./styles" 
import { getTodayPlusSeveralMonth } from "helpers" 

export const ModalChangePlan = ({
  isOpenModal,
  switchModal,
  isCrypto,
  paymentMethod,
  setPaymentMethod,
}) => (
  <ModalWrapper
    isOpenModal={isOpenModal}
    switchModal={switchModal}
    title="Change subscription plan"
  >
    <Box>
      {(isCrypto ? CRYPTO_MEMBERSHIP_PLAN : CARD_MEMBERSHIP_PLAN).map(
        (
          {
            title,
            full_amount,
            old_amount,
            save_money,
            save_percent,
            month_count,
            isPopular,
          },
          id
        ) => (
          <>
            {isPopular && (
              <Box
                bgcolor="#F8B714"
                textAlign="center"
                py="5px"
                borderRadius="4px 4px 0 0"
              >
                Popular
              </Box>
            )}
            <Box
              key={id}
              sx={{
                bgcolor: "#FCFCFC",
                width: "100%",
                p: "22px 16px",
                borderWidth: "1px",
                borderStyle: "solid",
                "&:not(:last-of-type)": {
                  mb: "8px",
                },
                borderRadius: isPopular ? "0 0 4px 4px" : "4px",
                ...(isPopular
                  ? {
                      borderColor: "#F8B714",
                    }
                  : {
                      borderColor:
                        paymentMethod !== title ? "#FCFCFC" : "#4AAF47",
                    }),
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  onClick={setPaymentMethod(title)}
                >
                  <Typography color="#555555" fontSize="18px">
                    {title}
                  </Typography>
                  {(old_amount || save_money) && (
                    <Typography
                      color="#909090"
                      mx="3px"
                      sx={{ textDecoration: "line-through" }}
                      component="span"
                    >
                      ${old_amount || save_money}
                    </Typography>
                  )}
                  <Typography color="#555555" fontWeight="500" mr="16px">
                    ${full_amount}
                  </Typography>
                  {save_percent && (
                    <Box
                      sx={{
                        color: "#4AAF47",
                        p: "6px 16px",
                        bgcolor: "#EAF6E9",
                        borderRadius: "20px",
                      }}
                    >
                      Save {save_percent}%
                    </Box>
                  )}
                </Box>
                <Checkbox
                  icon={<CircleUnchecked />}
                  checkedIcon={
                    <Box sx={checkedIcon}>
                      <CircleCheckedFilled />
                    </Box>
                  }
                  checked={paymentMethod === title}
                  onChange={setPaymentMethod(title)}
                />
              </Box>
              {paymentMethod === title && (
                <>
                  <Box
                    sx={{
                      height: "1px",
                      width: "100%",
                      bgcolor: "#E4E4E4",
                      mb: "37px",
                      mt: "16px",
                    }}
                  />
                  <Box
                    m="16px 20px"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Typography color="#4AAF47">Pay now</Typography>
                    <Typography color="#4AAF47">${full_amount}</Typography>
                  </Box>
                  <Box
                    m="16px 20px"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Typography color="#555555">
                      Next payment on {getTodayPlusSeveralMonth(month_count)}
                    </Typography>
                    <Typography color="#555555">
                      ${old_amount || save_money || full_amount}
                    </Typography>
                  </Box>
                </>
              )}
            </Box>
          </>
        )
      )}
    </Box>
  </ModalWrapper>
) 
