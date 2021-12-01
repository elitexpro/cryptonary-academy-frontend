import React from 'react'
import {
  Stack,
  Typography,
  Box,
  Link,
  Hidden,
  IconButton,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { RiFacebookFill } from 'react-icons/ri'
import { CRYPTONARY_INSTAGRAM, CRYPTONARY_TWITTER, CRYPTONARY_FACEBOOK } from 'helpers/utils'
import SvgCoinDrip from 'assets/image/coin-drip.svg'

const SOCIAL_LINKS = [
  { icon: <AiOutlineTwitter style={{ color: '#FFF', fontSize: 20 }} />, to: CRYPTONARY_TWITTER },
  { icon: <AiFillInstagram style={{ color: '#FFF', fontSize: 20 }} />, to: CRYPTONARY_INSTAGRAM },
  { icon: <RiFacebookFill style={{ color: '#FFF', fontSize: 20 }} />, to: CRYPTONARY_FACEBOOK },
]

const FooterSocial = () => {

  return (
    <Box>
      <Stack sx={{ mt: 8, p: 2, backgroundColor: "#141414", borderRadius: "2px" }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box sx={{ height: 24 }}><img src={SvgCoinDrip} alt="" /></Box>

          <Hidden mdDown>
            <Typography variant="subTitle" sx={{ color: "#FFF" }}>
              A timeless lifestyle brand for crypto-heads and everyone else, by Cryptonary.
            </Typography>

            <MButton color="black" variant="contained" sx={{ backgroundColor: "#FFFFFF1A", color: "#FFF", minWidth: "100px" }}>
              Visit Store
            </MButton>
            <Box sx={{ flexGrow: 1 }} />
          </Hidden>

          <Hidden mdUp>
            <Box sx={{ flexGrow: 1 }} />
          </Hidden>

          <Stack direction="row" spacing={2} alignItems="center">
            {
              SOCIAL_LINKS.map((item, index) => {
                const { icon, to } = item

                return (
                  <IconButton key={index} color="inherit">
                    <Link href={to} target="_blank" sx={{ height: 24, width: 24 }}>
                      {icon}
                    </Link>
                  </IconButton>
                )
              })
            }
          </Stack>
        </Stack>

        <Hidden mdUp>
          <Typography variant="subTitle" sx={{ mt: 2, color: "#FFF" }}>
            A timeless lifestyle brand for crypto-heads and everyone else, by Cryptonary.
          </Typography>
        </Hidden>
      </Stack>
    </Box>
  )
}

export default FooterSocial
