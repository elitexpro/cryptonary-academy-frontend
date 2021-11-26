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


const headerButtons = [
  { text: 'My Notes', to: '#' },
  { text: 'Saved Items', to: '#' },
  { text: 'Quizzes', to: '#' },
]

const Header = () => {
  const classes = useStyles()
  const history = useHistory()
  const currentUser = useSelector(currentUserSelector)
  const [openTopic, setOpenTopic] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleTopicToggle = (e) => {
    setOpenTopic(prev => !prev)
    setAnchorEl(e.currentTarget)
  }

  return (
    <>
      <AppBar sx={{ background: 'white', py: '20px' }}>
        <Container maxWidth="xl">
          <Toolbar className={classes.toolbar} >
            <Logo />
            <Hidden mdDown>
              <MButton
                color='inherit'
                className={classes.button}
                sx={{ mr: 2, ml: 8 }}
                endIcon={<KeyboardArrowDownRoundedIcon style={{ fontSize: '24px' }} />}
                onClick={handleTopicToggle}
              >
                Explore Topics
              </MButton>
              {
                currentUser && headerButtons.map((item, key) =>
                  <MButton key={key} color='inherit' className={classes.button} sx={{ mx: 2 }} onClick={() => history.push(item.to)} >
                    {item.text}
                  </MButton>
                )
              }

            </Hidden>
            <Box sx={{ flexGrow: 1 }} />
            <Hidden mdDown>
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
            </Hidden>
            <Hidden mdUp>
              <IconButton>
                <MenuRoundedIcon color="black" />
              </IconButton>
            </Hidden>
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