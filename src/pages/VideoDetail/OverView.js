import React from 'react'
import {
  Box,
  Typography,
  Stack,
} from '@mui/material'

const content = [
  { time: "00:00", statement: "Introduction" },
  { time: "00:00", statement: "What is Bitcoin mining?" },
  { time: "00:00", statement: "How to start mining Bitcoin" },
  { time: "00:00", statement: "How much a Bitcoin miner earns" },
  { time: "00:00", statement: "Mining pools" },
  { time: "00:00", statement: "Cloud mining" },
]

const OverView = ({ ...props }) => {

  return (
    <Box {...props}>
      <Typography variant="subTitle1" sx={{ color: "#555" }}>
        When a user creates a new Bitcoin transaction, they need to wait for other network users (nodes) to
        verify and confirm its validity. Miners are responsible for collecting new, pending transactions and
        grouping them into a <Typography variant="subTitle1" sx={{ color: "#4AAF47" }}>candidate block </Typography>
        (a new block that is yet to be validated).
      </Typography>

      <Stack spacing={1} sx={{ mt: 4 }}>
        {
          content.map((item, key) => {
            const { time, statement } = item

            return (
              <Stack direction="row" spacing={1} key={key}>
                <Typography variant="subTitle1" sx={{ color: "#4AAF47" }}>
                  {time}
                </Typography>
                <Typography variant="subTitle1" sx={{ color: "#555" }}>
                  {statement}
                </Typography>
              </Stack>
            )
          })
        }

      </Stack>

    </Box>
  )
}

export default OverView
