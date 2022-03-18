import React, { useState } from 'react'
import { styled } from '@mui/styles'
import {
  Box,
  Grid,
  Divider,
  Stack,
  Typography,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { MdOutlineRemove, MdOutlineAdd, MdArrowForward } from 'react-icons/md'
import CryptoSchoolImage from 'assets/image/crypto-school.png'

const DATA = [
  {
    title: "Introduction to Cryptocurrency Course",
    content: `Learn the basics of cryptocurrency with our 60-minute course.
              Find answers to all of your crypto questions and understand Bitcoin, Ethereum, Defi, altcoins, crypto wallets, and more. `,
    to: 'https://www.cryptonary.com/crypto-course/introduction-to-cryptocurrency/'
  },
  {
    title: "Technical Analysis Course",
    content: `Understand the origins and definition of technical analysis.
              Learn about candlestick analysis, key levels, trendlines, moving averages, price patterns, and more.`,
    to: 'https://www.cryptonary.com/crypto-course/technical-analysis/'
  },
  {
    title: "Cryptocurrency Psychology Course",
    content: "Learn about the human psychology behind trading and investing and discover why an investor’s mental state is so important.",
    to: 'https://www.cryptonary.com/crypto-course/mental-fortitude/'
  },
  {
    title: "NFT Course",
    content: `Heard about NFTs or Non-Fungible Tokens?
              Learn more about what they are and what they’re used for in our dedicated NFT course.`,
    to: 'https://www.cryptonary.com/an-introduction-to-nfts/'
  }
]

const CustomAccordion = styled((props) => (
  <Accordion {...props} />
))(({ theme }) => ({
  '&.MuiAccordion-root:before': {
    backgroundColor: '#FCFCFC'
  },
}))

const EducationContent = ({ isLoading }) => {
  const [expanded, setExpanded] = useState(0)

  const handleChange = (index) => () => {
    setExpanded(index)
  }

  return (
    <Box sx={{ py: 5, px: 10, background: "#FCFCFC" }}>
      <Grid container spacing={6}>
        <Grid item md={6}>
          <Typography variant="subTitle4" sx={{ color: "#555" }}>
            LATEST COURSES
          </Typography>

          <Divider sx={{ mt: 1, mb: 4 }} />

          <Box>
            {DATA.map((item, index) => {
              const { title, content, to } = item

              return (
                <CustomAccordion
                  key={index}
                  sx={{
                    backgroundColor: "#FCFCFC",
                    border: expanded === index ? '1px solid #EAEAEA' : '1px solid #FCFCFC',
                    borderRadius: '4px'
                  }}
                  expanded={expanded === index}
                  onChange={handleChange(index)}
                  disableGutters
                  elevation={0}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === index ?
                        <Box sx={{ height: 20 }}>
                          <MdOutlineRemove style={{ fontSize: 20, color: '#141414' }} />
                        </Box> :
                        <Box sx={{ height: 20 }}>
                          <MdOutlineAdd style={{ fontSize: 20, color: '#141414' }} />
                        </Box>
                    }
                    sx={{
                      background: expanded === index ? "#FFFFFF" : "",
                      flexDirection: "row-reverse",
                      borderBottom: 'none',
                    }}
                  >
                    <Typography variant="subTitle" color="#141414" sx={{ ml: 2 }} >{title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ background: "#FFFFFF", pl: 6 }} >
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subTitle4" color="#909090">{content}</Typography>
                    </Box>
                    <Link
                      target="_blank"
                      href={to}
                      rel="noreferrer"
                      underline="none"
                      sx={{ color: "#4AAF47" }}
                    >
                      <Stack spacing={2} direction="row" alignItems="center">
                        <Typography variant="subTitle4">Start Learning</Typography>
                        <MdArrowForward style={{ fontSize: 20 }} />
                      </Stack>
                    </Link>
                  </AccordionDetails>
                </CustomAccordion>
              )
            })}
          </Box>
        </Grid>

        <Grid item md={6}>
          <Typography variant="subTitle4" sx={{ color: "#555" }}>
            CRYPTO SCHOOL
          </Typography>

          <Divider sx={{ mt: 1, mb: 4 }} />
          <Link
            component={RouterLink}
            to="/education"
            underline="none"
          >
            <img src={CryptoSchoolImage} style={{ width: '100%' }} alt="Crypto School" />
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default EducationContent
