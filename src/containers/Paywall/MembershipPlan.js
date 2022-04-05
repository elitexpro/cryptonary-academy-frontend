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
import { CRYPTO_MEMBERSHIP_PLAN, CARD_MEMBERSHIP_PLAN } from './membershipPlansData'
import { useHistory } from 'react-router'

const MembershipPlan = ({ isCrypto }) => {
  const history = useHistory()
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
        (isCrypto ? CRYPTO_MEMBERSHIP_PLAN : CARD_MEMBERSHIP_PLAN).map(({
          title,
          content,
          old_amount,
          amount,
          period,
          save_money,
          month_count,
          full_amount,
          save_percent,
          isPopular,
          under_button,
        }, index) => (
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
                    onClick={() => {
                      history.push('/checkout', { isCrypto, method: title })
                    }}
                  >Select {title}</MButton>
                </Hidden>
                  {isCrypto && <Stack direction="row" justifyContent="center" sx={{ height: 20, mt: 2.5 }}>
                    {full_amount !== save_money && (
                      <Typography color="#909090" sx={{ textDecoration: "line-through" }}>${save_money}</Typography>
                    )}
                    <Typography color="#FFF" sx={{ px: 0.5 }}>${full_amount}</Typography>
                    <Typography color="#909090">billed every {month_count} months</Typography>
                  </Stack>}
              </Box>
            </Stack>
        ))
      }
    </Stack>
  )
}

export default MembershipPlan
