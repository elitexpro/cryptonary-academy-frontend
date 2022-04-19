import React from "react"
import { Box, Typography } from "@mui/material"
import { ReactComponent as ProgressStep1Bar } from "assets/image/checkout-step-one.svg"
import { ReactComponent as ProgressStep2Bar } from "assets/image/checkout-step-two.svg"
import { getTodayPlusSeveralMonth } from "helpers"

const Progress = ({ step, plan, changeBooleanData }) => {
  let Bar
  switch (step) {
    case 1:
      Bar = ProgressStep1Bar
      break
    case 2:
      Bar = ProgressStep2Bar
      break
    default:
      Bar = null
  }
  return (
    <>
      <Box mt="50px" mb="40px">
        <Bar />
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
    </>
  )
}

export default Progress
