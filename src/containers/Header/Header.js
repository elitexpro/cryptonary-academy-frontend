import React, { useState, Fragment } from 'react'
import useStyles from './styles.js'
import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Box,
  Stack,
  Container,
} from '@mui/material'
import { Logo } from 'components/Logo'
import { MButton } from 'components/CustomMaterial'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { UserAvatar } from 'components/UserAvatar'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import MenuBar from './MenuBar'
import Alpha from './Alpha'
import GlobalSearch from './GlobalSearch'
import { CRYPTONARY_HELP_CENTER } from 'helpers/utils'

const NavButtons = [
  { text: 'News', to: '/news' },
  { component: <Alpha text="Alpha" />, isCustomized: true },
  { component: <Alpha text="Education" />, isCustomized: true },
  { text: 'Ratings Guide', to: '/rating-guide', isForPro: true },
  { text: 'Pulse', to: '/pulse', isForPro: true },
  { component: <GlobalSearch />, isCustomized: true },
]

const Header = () => {
  const classes = useStyles()
  const history = useHistory()
  const currentUser = useSelector(currentUserSelector)
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = (open) => () => {
    setShowMenu(open)
  }

  return (
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
                    <Fragment key={key}>
                      {
                        !item.isForPro || (item.isForPro && currentUser?.role === "pro") ?
                          item.isCustomized ?
                            item.component :
                            <MButton
                              color='inherit'
                              sx={{ color: '#858585', fontSize: '16px' }}
                              onClick={() => history.push(item.to)}
                            >
                              {item.text}
                            </MButton>
                          : null
                      }
                    </Fragment>
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
                  <Fragment>
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
                  </Fragment>
                  :
                  <Fragment>
                    <MButton
                      variant='inherit'
                      sx={{ color: '#555', fontSize: '16px' }}
                      onClick={() => window.open(CRYPTONARY_HELP_CENTER, "_blank")}
                    >
                      Help Center
                    </MButton>
                    <UserAvatar />
                  </Fragment>
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
  )

}

export default Header