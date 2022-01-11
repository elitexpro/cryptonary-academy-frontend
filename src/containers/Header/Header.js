import React, { useState } from 'react'
import useStyles from './styles.js'
import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Box,
  Popper,
  ClickAwayListener,
  Grow,
  Paper,
  Link,
  Stack,
  Container,
} from '@mui/material'
import { Logo } from 'components/Logo'
import { MButton } from 'components/CustomMaterial'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import TopicSelectPaper from './TopicSelectPaper'
import { UserAvatar } from 'components/UserAvatar'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import MenuBar from './MenuBar'
import Alpha from './Alpha'
import Education from './Education'
import { CRYPTONARY_HELP_CENTER } from 'helpers/utils'

const NavButtons = [
  { text: 'News', to: '/news' },
  { text: 'Ratings Guide', to: '/rating-guide' },
  { component: <Alpha />, isCustomized: true },
  { component: <Education />, isCustomized: true },
  { text: 'Podcasts', to: '/podcasts' },
  // { text: 'Pulse', to: '/pulse', isForAuthed: true },
]

const Header = () => {
  const classes = useStyles()
  const history = useHistory()
  const currentUser = useSelector(currentUserSelector)
  const [openTopic, setOpenTopic] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [showMenu, setShowMenu] = useState(false)

  const handleTopicToggle = (e) => {
    setOpenTopic(prev => !prev)
    setAnchorEl(e.currentTarget)
  }

  const toggleMenu = (open) => () => {
    setShowMenu(open)
  }

  return (
    <>
      <AppBar sx={{ background: 'white', py: '20px', boxShadow: "none", borderBottom: "1px solid #c3c3c3" }} position='absolute'>
        <Container maxWidth="xl">
          <Toolbar className={classes.toolbar} >
            <Box sx={{ mr: 7 }}>
              <Logo />
            </Box>
            <Hidden mdDown>
              <Stack direction="row" spacing={4}>
                {
                  NavButtons.map((item, key) => {
                    return (
                      <Box key={key}>
                        {
                          !item.isForAuthed ?
                            item.isCustomized ?
                              item.component :
                              <MButton
                                color='inherit'
                                sx={{ color: '#858585', fontSize: '16px' }}
                                onClick={() => history.push(item.to)}
                              >
                                {item.text}
                              </MButton>
                            : <></>
                        }

                      </Box>
                    )
                  })
                }
              </Stack>
            </Hidden>

            <Box sx={{ flexGrow: 1 }} />

            <Hidden mdDown>
              <Stack direction="row" spacing={2}>
                {
                  !currentUser
                    ?
                    <>
                      <MButton
                        variant='inherit'
                        sx={{ fontSize: '16px', px: 2, color: '#555' }}
                        onClick={() => history.push('/login')}
                      >
                        Sign in
                      </MButton>
                      <MButton
                        variant='contained'
                        color='success'
                        sx={{ fontSize: '16px', px: 2, color: 'white' }}
                        onClick={() => history.push('/signup')}
                      >
                        Get Started
                      </MButton>
                    </>
                    :
                    <>
                      <MButton
                        variant='inherit'
                        sx={{ color: '#555', fontSize: '16px' }}
                        onClick={() => window.open(CRYPTONARY_HELP_CENTER, "_blank")}
                      >
                        Help Center
                      </MButton>
                      <UserAvatar />
                    </>
                }
              </Stack>
            </Hidden>

            <Hidden mdUp>
              <IconButton onClick={toggleMenu(true)}>
                <MenuRoundedIcon color="black" />
              </IconButton>
            </Hidden>

            <MenuBar open={showMenu} onClose={toggleMenu(false)} />
          </Toolbar>
        </Container>
      </AppBar>

      <Popper
        open={openTopic}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement='bottom-start'
        className={classes.topicPoper}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={() => setOpenTopic(false)}>
                <Box>
                  <TopicSelectPaper />
                </Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )

}

export default Header