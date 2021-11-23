import React from 'react'
import useStyles from './styles.js'
import {
  Box,
  Grid,
  Hidden,
} from '@mui/material'
import {
  MButton,
} from 'components/CustomMaterial'
import { Header } from 'containers/Header'
import { useHistory } from 'react-router-dom'
import handSvg from 'assets/image/hand.svg'
import ethereumImg from 'assets/image/ethereum-coin.png'
import bitcoinImg from 'assets/image/bitcoin-coin.png'
import blackCoinImg from 'assets/image/black-coin.png'
import unicornImg from 'assets/image/unicorn-coin.png'
import ethereumMobImg from 'assets/image/ethereum-coin-mob.png'
import bitcoinMobImg from 'assets/image/bitcoin-coin-mob.png'
import blackCoinMobImg from 'assets/image/black-coin-mob.png'
import unicornMobImg from 'assets/image/unicorn-coin-mob.png'


const Welcome = () => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <>
      <Header />
      <div className={classes.back}>
        <Box className={classes.heroBox}>
          <Grid container spacing={0}>
            <Grid item md={12} xs={12}>
              <div className={classes.center}>
                <div className={classes.fieldArea}>
                  <img src={handSvg} alt='' className={classes.hand} />
                  <p className={classes.title}>Welcome to Crypto Academy!</p>
                  <p className={classes.description}>We’re excited to start delivering you insightful crypto knowledge.
                    Answer a few questions to help us recommend personalized content to you.</p>

                  <MButton
                    color='success'
                    variant='contained'
                    className={classes.startBtn}
                    onClick={() => history.push('/preference')}
                  >
                    Start here
                  </MButton>
                </div>
              </div>

            </Grid>
          </Grid>
        </Box>
        <Hidden mdUp>
          <img src={ethereumMobImg} alt='' className={classes.ethereumImg} />
          <img src={bitcoinMobImg} alt='' className={classes.bitcoinImg} />
          <img src={unicornMobImg} alt='' className={classes.unicornImg} />
          <img src={blackCoinMobImg} alt='' className={classes.blackCoinImg} />
        </Hidden>
        <Hidden mdDown>
          <img src={ethereumImg} alt='' className={classes.ethereumImg} />
          <img src={bitcoinImg} alt='' className={classes.bitcoinImg} />
          <img src={unicornImg} alt='' className={classes.unicornImg} />
          <img src={blackCoinImg} alt='' className={classes.blackCoinImg} />
        </Hidden>
      </div>
    </>
  )
}

export default Welcome
