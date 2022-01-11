import React from 'react'
import {
  Stack,
  Box,
  Typography,
  Divider,
  Hidden
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { FiChevronRight } from 'react-icons/fi'

const MEMBERSHIP_PLAN = [
  {
    title: "7-day Trial",
    content: "Get onboard in minutes ✨",
    amount: 9.99,
    period: " for 7 days",
    isPopular: false
  },
  {
    title: "Monthly",
    content: "Stay ahead of the curve 🔥",
    amount: 59.99,
    period: " /month",
    save_percent: 20,
    isPopular: false
  },
  {
    title: "Yearly",
    content: "Join the crypto revolution 🚀",
    old_amount: 719,
    amount: 492,
    period: " /year",
    save_percent: 31,
    isPopular: true
  }
]

const MembershipPlan = () => {
  return (
    <Stack
      spacing={{ md: 6, xs: 1 }}
      sx={{
        flexDirection: {
          md: "row",
          xs: "column"
        },
        justifyContent: "center",
        alignItems: "flex-end",
        mb: { xs: 4 }
      }}
    >
      {
        MEMBERSHIP_PLAN.map((membership, index) => {
          const { title, content, old_amount, amount, period, save_percent, isPopular } = membership

          return (
            <Stack key={index} sx={{ width: "100%" }}>
              <Stack
                sx={{
                  background: "#F8B714",
                  borderRadius: "4px 4px 0 0",
                  height: 32,
                  color: "#141414",
                  display: { xs: !isPopular && "none" }
                }}
                justifyContent="center"
                alignItems="center"
                visibility={isPopular ? "show" : "hidden"}
              >
                Most Popular
              </Stack>
              <Box
                sx={{
                  border: isPopular ? "1px solid #F8B714" : {
                    md: "none",
                    xs: "1px solid #323232"
                  },
                  borderRadius: {
                    md: "0 0 4px 4px",
                    xs: !isPopular && "4px"
                  },
                  p: { md: 4, xs: 2 },
                  mb: { md: 3 }
                }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Stack spacing={{ md: 2, xs: 1 }}>
                    <Typography variant="subTitle3" color="#FFF">{title}</Typography>
                    <Typography variant="subTitle" color="#E4E4E4">{content}</Typography>
                  </Stack>
                  <Hidden mdUp>
                    <FiChevronRight style={{ width: 24, height: 24, color: "#4AAF47" }} />
                  </Hidden>
                </Stack>
                <Divider sx={{ my: { md: 3, xs: 2 }, background: "#E4E4E4", opacity: { md: 0.4, xs: 0.1 } }} />
                <Box sx={{ mb: 1 }}>
                  <Typography
                    variant="subTitle1"
                    color="#858585"
                    visibility={old_amount ? "show" : "hidden"}
                    sx={{
                      textDecoration: "line-through"
                    }}
                  >
                    ${old_amount}
                  </Typography>
                </Box>
                <Stack direction="row" justifyContent="space-between" sx={{ mb: { md: 3 } }}>
                  <Stack direction="row" alignItems="end" spacing={0.5}>
                    <Typography
                      color="#FFF"
                      sx={{
                        fontSize: { md: 32, xs: 24 },
                        lineHeight: "initial"
                      }}
                    >${amount}</Typography>
                    <Typography color="#FFF" sx={{ fontSize: { md: 16, xs: 14 } }}>{period}</Typography>
                  </Stack>
                  {save_percent &&
                    <Stack
                      sx={{
                        borderRadius: 20,
                        color: "#4AAF47",
                        minWidth: 90,
                        height: 32,
                        border: "1px solid #4AAF47"
                      }}
                      alignItems="center"
                      justifyContent="center"
                    >
                      Save {save_percent}%
                    </Stack>
                  }
                </Stack>
                <Hidden mdDown>
                  <MButton
                    variant={isPopular ? "contained" : "outlined"}
                    color={isPopular ? "success" : "inherit"}
                    fullWidth
                    sx={{
                      color: "#FFF",
                      height: 48
                    }}
                  >Select {title}</MButton>
                </Hidden>
              </Box>
            </Stack>
          )
        })
      }
    </Stack>
  )
}

export default MembershipPlan
