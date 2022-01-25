import React, { useState } from 'react'
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import { styled } from '@mui/styles'
import { MdOutlineRemove, MdOutlineAdd } from 'react-icons/md'
import MacbookProSVG from 'assets/image/Macbook Pro.svg'

const DATA = [
  {
    title: "Introduction to Cryptocurrency Course",
    content: `Learn the basics of cryptocurrency with our 60-minute course.
              Find answers to all of your crypto questions and understand Bitcoin, Ethereum, Defi, altcoins, crypto wallets, and more. `,
  },
  {
    title: "Technical Analysis Course",
    content: `Understand the origins and definition of technical analysis.
              Learn about candlestick analysis, key levels, trendlines, moving averages, price patterns, and more.`,
  },
  {
    title: "Cryptocurrency Psychology Course",
    content: "Learn about the human psychology behind trading and investing and discover why an investor’s mental state is so important.",
  },
  {
    title: "NFT Course",
    content: `Heard about NFTs or Non-Fungible Tokens?
              Learn more about what they are and what they’re used for in our dedicated NFT course.`,
  }
]

const CustomAccordionSummary = styled((props) => (
  <AccordionSummary {...props} />
))(({ theme }) => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: "none",
  },
}))

const CryptoCourses = () => {
  const [expanded, setExpanded] = useState(0)

  const handleChange = (index) => () => {
    if (index === expanded) {
      index = null
    }
    setExpanded(index)
  }

  return (
    <Box sx={{ width: "100%", textAlign: { md: "center" } }}>
      <Typography variant="subTitle" color="#FFF">
        Learn or sharpen up your basics with our 1-hour basics course to get you warmed up for the community and research reports.
      </Typography>
      <Grid container sx={{ mt: 6 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ px: { xs: 4 } }}>
            <img src={MacbookProSVG} alt="" style={{ width: "100%" }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {DATA.map((item, index) => {
            const { title, content } = item

            return (
              <Accordion
                key={index}
                sx={{ backgroundColor: "#141414" }}
                expanded={expanded === index}
                onChange={handleChange(index)}
                disableGutters
              >
                <CustomAccordionSummary
                  expandIcon={
                    expanded === index ?
                      <Box sx={{ background: "#141414", borderRadius: 12, height: 20 }}>
                        <MdOutlineRemove style={{ fontSize: 20, color: "#FFF" }} />
                      </Box> :
                      <Box sx={{ background: "#141414", borderRadius: 12, height: 20 }}>
                        <MdOutlineAdd style={{ fontSize: 20, color: "#FFF" }} />
                      </Box>
                  }
                  sx={{
                    background: expanded === index ? "#1D1D1D" : "",
                    flexDirection: "row-reverse",
                    borderBottom: index !== 3 && "1px solid #1D1D1D"
                  }}
                >
                  <Typography color="#FFF" sx={{ ml: 2, fontSize: { md: 18, xs: 16 } }} >{title}</Typography>
                </CustomAccordionSummary>
                <AccordionDetails sx={{ background: "#1D1D1D" }} >
                  <Typography variant="subTitle" color="#FFF">{content}</Typography>
                </AccordionDetails>
              </Accordion>
            )
          })}
        </Grid>
      </Grid>
    </Box >
  )
}

export default CryptoCourses
