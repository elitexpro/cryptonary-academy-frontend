import React from 'react'
import {
  Box,
  Typography,
  Stack,
  Link,
} from '@mui/material'

const content = [
  {
    category: "White-papers/ Reports",
    data: [
      { link: "Mint.ly/hp2ning", description: "Miners are responsible for collecting new, pending transactions and grouping them." },
      { link: "Mint.ly/hp2ning", description: "Miners are responsible for collecting new, pending transactions and grouping them." },
      { link: "Mint.ly/hp2ning", description: "Miners are responsible for collecting new, pending transactions and grouping them." },
    ]
  },
  {
    category: "Useful Links",
    data: [
      { link: "Mint.ly/hp2ning", description: "Miners are responsible for collecting new, pending transactions and grouping them." },
      { link: "Mint.ly/hp2ning", description: "Miners are responsible for collecting new, pending transactions and grouping them." },
      { link: "Mint.ly/hp2ning", description: "Miners are responsible for collecting new, pending transactions and grouping them." },
    ]
  }

]

const Resource = ({ ...props }) => {

  return (
    <Box {...props}>
      <Stack spacing={6}>
        {
          content.map((item, key) => {
            const { category, data } = item

            return (
              <Stack spacing={3} key={key}>
                <Typography variant="subTitle1" sx={{ color: "#4AAF47" }}>
                  {category}
                </Typography>

                <Stack spacing={2}>
                  {
                    data.map((item, key) => {
                      const { link, description } = item

                      return (
                        <Typography variant="subTitle1" sx={{ color: "#858585" }} key={key}>
                          <Link href={link} target="_blank" underline="hover" sx={{ color: "#141414" }}>{link}</Link>
                          {` - ${description}`}
                        </Typography>
                      )
                    })
                  }


                </Stack>
              </Stack>
            )
          })
        }

      </Stack>

    </Box>
  )
}

export default Resource
