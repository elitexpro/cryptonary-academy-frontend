import React, { useState } from 'react'
import {
  Drawer,
  Typography,
  Stack,
  Box,
  Divider,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  IconButton,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { Scrollbar } from 'components/Scrollbar'
import { FiHelpCircle } from 'react-icons/fi'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { RiFacebookFill } from 'react-icons/ri'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import {
  CRYPTONARY_INSTAGRAM,
  CRYPTONARY_TWITTER,
  CRYPTONARY_FACEBOOK,
  COINDRIP_STORE,
  CRYPTONARY_YOUTUBE
} from 'helpers/utils'
import { useHistory } from 'react-router-dom'
import ImgPremium from 'assets/image/premium-icon.png'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { logout } from 'redux/modules/auth/actions'
import { useSelector, useDispatch } from 'react-redux'
import { authClear } from 'helpers/localCheck'
import GlobalSearch from './GlobalSearch'

const SOCIAL_LINKS = [
  { icon: <AiFillInstagram style={{ color: '#A2A2A2', fontSize: 20 }} />, to: CRYPTONARY_INSTAGRAM },
  { icon: <AiOutlineTwitter style={{ color: '#A2A2A2', fontSize: 20 }} />, to: CRYPTONARY_TWITTER },
  { icon: <TiSocialYoutubeCircular style={{ color: '#A2A2A2', fontSize: 20 }} />, to: CRYPTONARY_YOUTUBE },
  { icon: <RiFacebookFill style={{ color: '#A2A2A2', fontSize: 20 }} />, to: CRYPTONARY_FACEBOOK },
]

const menuItemStyle = { color: "#858585", fontSize: "18px", display: 'inline-flex', alignItems: 'center' }

const MenuBar = ({ open, onClose }) => {
  const currentUser = useSelector(currentUserSelector)
  const dispatch = useDispatch()
  const history = useHistory()
  const [openSubMenu, setOpenSubMenu] = useState(0)

  const handleOpenSubMenu = (val) => {
    openSubMenu === val ? setOpenSubMenu(0) : setOpenSubMenu(val)
  }

  const handleUrl = (url) => {
    history.push(url)
    onClose()
  }

  const handleNewTag = (tag) => {
    window.open(tag)
    onClose()
  }

  const handleSignOut = () => {
    dispatch(logout())
    authClear()
    handleUrl('/')
  }

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: '85vw', overflowX: "hidden", px: 2 }}>
        <Scrollbar sx={{ height: '100vh', flexDirection: 'column', display: 'flex' }}>
          <List
            sx={{ mt: 6 }}
            component="nav"
            dense
            disablePadding
          >
            <ListItemButton sx={{ py: 1.5 }} onClick={() => handleUrl('/news/all')}>
              <ListItemText primary="News" primaryTypographyProps={menuItemStyle} />
            </ListItemButton>
            <Divider />

            <ListItemButton sx={{ py: 1.5 }} onClick={() => handleOpenSubMenu(1)}>
              <ListItemText
                primary={<>Alpha<img src={ImgPremium} alt='' style={{ marginLeft: '8px' }} /></>}
                primaryTypographyProps={menuItemStyle}
              />
              {
                openSubMenu === 1 ?
                  <MdKeyboardArrowUp style={{ color: "#A2A2A2", fontSize: 24 }} /> :
                  <MdKeyboardArrowDown style={{ color: "#A2A2A2", fontSize: 24 }} />
              }
            </ListItemButton>

            <Collapse in={openSubMenu === 1} timeout="auto" unmountOnExit>
              <ListItemButton sx={{ py: 1.5, pl: 3 }} onClick={() => handleUrl('/research-reports')}>
                <ListItemText primary="Crypto Research" primaryTypographyProps={menuItemStyle} />
              </ListItemButton>
              <ListItemButton sx={{ py: 1.5, pl: 3 }} onClick={() => handleUrl('/analysis/technical-analysis')}>
                <ListItemText primary="Market Analysis" primaryTypographyProps={menuItemStyle} />
              </ListItemButton>
            </Collapse>
            <Divider />

            <ListItemButton sx={{ py: 1.5 }} onClick={() => handleOpenSubMenu(2)}>
              <ListItemText
                primary={<>Education<img src={ImgPremium} alt='' style={{ marginLeft: '8px' }} /></>}
                primaryTypographyProps={menuItemStyle}
              />
              {
                openSubMenu === 2 ?
                  <MdKeyboardArrowUp style={{ color: "#A2A2A2", fontSize: 24 }} /> :
                  <MdKeyboardArrowDown style={{ color: "#A2A2A2", fontSize: 24 }} />
              }
            </ListItemButton>
            <Collapse in={openSubMenu === 2} timeout="auto" unmountOnExit>
              <ListItemButton sx={{ py: 1.5, pl: 3 }} onClick={() => handleUrl('/education/crypto-school')}>
                <ListItemText primary="Crypto School" primaryTypographyProps={menuItemStyle} />
              </ListItemButton>
              <ListItemButton sx={{ py: 1.5, pl: 3 }} onClick={() => handleUrl('/education/crypto-school')}>
                <ListItemText primary="Course Library" primaryTypographyProps={menuItemStyle} />
              </ListItemButton>
            </Collapse>
            <Divider />

            <ListItemButton sx={{ py: 1.5 }} onClick={() => handleUrl('/rating-guide')}>
              <ListItemText primary="Ratings Guide" primaryTypographyProps={menuItemStyle} />
            </ListItemButton>
            <Divider />

            <ListItemButton sx={{ py: 1.5 }} onClick={() => handleUrl('#')}>
              <ListItemText primary="Podcasts" primaryTypographyProps={menuItemStyle} />
            </ListItemButton>
            <Divider />

            <ListItemButton sx={{ py: 1.5 }} onClick={() => handleNewTag(COINDRIP_STORE)}>
              <ListItemText primary="Shop" primaryTypographyProps={menuItemStyle} />
            </ListItemButton>
            <Divider />

            <ListItemButton sx={{ py: 1.5 }} onClick={() => handleUrl('/pulse')}>
              <ListItemText primary="Pulse" primaryTypographyProps={menuItemStyle} />
            </ListItemButton>
            <Divider />

            <ListItemButton sx={{ py: 1.5 }}>
              <GlobalSearch isMobile />
            </ListItemButton>
          </List>
          <Divider />

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ width: "100%" }}>
            {
              currentUser ?
                <MButton
                  color="inherit"
                  variant="contained"
                  sx={{ width: "100%", height: 48, color: "#555555", mt: 2 }}
                  onClick={handleSignOut}
                >
                  Sign out
                </MButton>
                :
                <>
                  <Typography variant="subTitle" sx={{ color: "#141414" }}>
                    Join today to get full access to our basics to advance crypto courses, exclusive insights, research & analysis.
                  </Typography>
                  <MButton
                    color="success"
                    variant="contained"
                    sx={{ width: "100%", height: 48, color: "#FFF", mt: 2 }}
                    onClick={() => handleUrl('/signup')}
                  >
                    Get Started
                  </MButton>
                  <MButton
                    color="inherit"
                    variant="contained"
                    sx={{ width: "100%", height: 48, color: "#555555", mt: 2 }}
                    onClick={() => handleUrl('/login')}
                  >
                    Sign In
                  </MButton>
                </>
            }

            <Divider sx={{ mt: 4, mb: 1 }} />
            <Stack direction="row" sx={{ mb: 2 }} alignItems="center">
              <MButton
                color="inherit"
                sx={{ px: 2 }}
                startIcon={<FiHelpCircle style={{ color: "#A2A2A2", fontSize: 20 }} />}
                onClick={() => history.push('/contact')}
              >
                Help
              </MButton>
              <Box sx={{ flexGrow: 1 }} />
              <Stack direction="row" alignItems="center">
                {
                  SOCIAL_LINKS.map((item, index) => {
                    const { icon, to } = item

                    return (
                      <IconButton key={index}>
                        <Link href={to} target="_blank" sx={{ height: 24, width: 24 }}>
                          {icon}
                        </Link>
                      </IconButton>
                    )
                  })
                }
              </Stack>
            </Stack>
          </Box>
        </Scrollbar>
      </Box>
    </Drawer>
  )
}

export default MenuBar
