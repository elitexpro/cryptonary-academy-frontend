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

const headerAuthButtons = [
  { text: 'My Notes', to: '#' },
  { text: 'Saved Items', to: '#' },
  { text: 'Quizzes', to: '#' },
]

const headerUnAuthButtons = [
  { text: 'Resources', to: '#' },
  { text: 'Faqs', to: '#' },
  { text: 'Help', to: '#' },
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
      <AppBar sx={{ background: 'white', py: '20px' }}>
        <Container maxWidth="xl">
          <Toolbar className={classes.toolbar} >
            <Logo />
            <Hidden mdDown>
              {
                currentUser &&
                <>
                  <MButton
                    color='inherit'
                    sx={{ mr: 2, ml: 8, color: '#858585', fontSize: '16px' }}
                    endIcon={<KeyboardArrowDownRoundedIcon style={{ fontSize: '24px' }} />}
                    onClick={handleTopicToggle}
                  >
                    Explore Topics
                  </MButton>
                  {
                    headerAuthButtons.map((item, key) =>
                      <MButton
                        key={key}
                        color='inherit'
                        sx={{ mx: 2, color: '#858585', fontSize: '16px' }}
                        onClick={() => history.push(item.to)}
                      >
                        {item.text}
                      </MButton>
                    )
                  }
                </>
              }
            </Hidden>

            <Box sx={{ flexGrow: 1 }} />

            <Hidden mdDown>
              {
                !currentUser
                  ?
                  <>
                    {
                      headerUnAuthButtons.map((item, key) =>
                        <MButton
                          key={key}
                          color='inherit'
                          sx={{ mx: 2, color: '#858585', fontSize: '16px' }}
                          onClick={() => history.push(item.to)}
                        >
                          {item.text}
                        </MButton>
                      )
                    }
                    <MButton
                      variant='outlined'
                      color='success'
                      sx={{ fontSize: '16px', px: 2 }}
                      onClick={() => history.push('/login')}
                    >
                      Log in
                    </MButton>
                  </>
                  :
                  <>
                    <Link
                      href="https://cryptonary.com"
                      color="black"
                      sx={{ color: '#000', mr: 3 }}
                      underline="hover"
                      target="_blank"
                    >
                      Cryptonary.com
                    </Link>
                    <UserAvatar />
                  </>
              }
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