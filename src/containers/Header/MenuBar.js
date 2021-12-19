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
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import TopicSelectPaper from './TopicSelectPaper'
import { Scrollbar } from 'components/Scrollbar'
import { FiHash, FiEdit3, FiBookmark, FiUser, FiSliders, FiLogOut, FiHelpCircle } from 'react-icons/fi'
import { MdKeyboardArrowDown, MdOutlineQuiz, MdKeyboardArrowUp } from 'react-icons/md'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { RiFacebookFill, RiDiscordFill } from 'react-icons/ri'
import { CRYPTONARY_INSTAGRAM, CRYPTONARY_TWITTER, CRYPTONARY_FACEBOOK, CRYPTONARY_DISCORD } from 'helpers/utils'
import SvgCPro from 'assets/image/cryptonary-pro.svg'

const MENU = [
  { icon: <FiEdit3 style={{ fontSize: 24, color: "#141414" }} />, title: "My Notes" },
  { icon: <FiBookmark style={{ fontSize: 24, color: "#141414" }} />, title: "Saved Items" },
  { icon: <MdOutlineQuiz style={{ fontSize: 24, color: "#141414" }} />, title: "Quizzes" },
  { icon: <FiUser style={{ fontSize: 24, color: "#141414" }} />, title: "My Account" },
  { icon: <FiSliders style={{ fontSize: 24, color: "#141414" }} />, title: "My Preferences" },
  { icon: <FiLogOut style={{ fontSize: 24, color: "#141414" }} />, title: "Sign out" },
]

const SOCIAL_LINKS = [
  { icon: <AiOutlineTwitter style={{ color: '#141414', fontSize: 20 }} />, to: CRYPTONARY_TWITTER },
  { icon: <RiDiscordFill style={{ color: '#141414', fontSize: 20 }} />, to: CRYPTONARY_DISCORD },
  { icon: <AiFillInstagram style={{ color: '#141414', fontSize: 20 }} />, to: CRYPTONARY_INSTAGRAM },
  { icon: <RiFacebookFill style={{ color: '#141414', fontSize: 20 }} />, to: CRYPTONARY_FACEBOOK },
]

const MenuBar = ({ open, onClose }) => {
  const [openTopic, setOpenTopic] = useState(false)

  const handleTopicToggle = () => {
    setOpenTopic(prev => !prev)
  }

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 320, overflowX: "hidden" }}>
        <Scrollbar>
          <List
            sx={{ mt: 8 }}
            component="nav"
            dense
            disablePadding
          >
            <ListItemButton sx={{ py: 2 }} onClick={handleTopicToggle}>
              <ListItemIcon>
                <FiHash style={{ fontSize: 24, color: "#141414" }} />
              </ListItemIcon>
              <ListItemText primary="Explore Topics" />
              {
                !openTopic ?
                  <MdKeyboardArrowDown style={{ color: "#000", fontSize: 24 }} /> :
                  <MdKeyboardArrowUp style={{ color: "#000", fontSize: 24 }} />
              }
            </ListItemButton>
            <Collapse in={openTopic} timeout="auto" unmountOnExit>
              <TopicSelectPaper />
              <Box sx={{ px: 4, pb: 4, width: { xs: "100%", md: "auto" } }}>
                <MButton
                  variant="contained"
                  color="success"
                  sx={{ color: "#FFF", px: 4, py: 1, mt: 3, width: "100%" }}
                >Apply Filters</MButton>
              </Box>
            </Collapse>
            {
              MENU.map((item, index) => {
                const { icon, title } = item

                return (
                  <Box key={index}>
                    <Divider />
                    <ListItemButton sx={{ py: 2 }}>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText primary={title} />
                    </ListItemButton>
                  </Box>
                )
              })
            }
          </List>
          <Divider sx={{ mt: 3, borderColor: "#141414" }} />
          <Box sx={{ width: "100%", px: 2, mt: 4 }}>
            <Box sx={{ mb: 2 }}>
              <img src={SvgCPro} alt="" />
            </Box>
            <Box>
              <Typography variant="subTitle1" sx={{ color: "#141414" }}>
                Access trend analysis, expert advice, and a community of like-minded people.
              </Typography>
            </Box>
            <MButton
              color="success"
              variant="contained"
              sx={{ width: "100%", height: 48, color: "#FFF", mt: 3 }}
            >
              Subscribe
            </MButton>
            <Divider sx={{ mt: 4, mb: 1 }} />
            <Stack direction="row" sx={{ mb: 2 }} alignItems="center">
              <MButton
                color="inherit"
                sx={{ px: 2 }}
                startIcon={<FiHelpCircle style={{ color: "#141414", fontSize: 20 }} />}
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
