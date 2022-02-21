import React, { useState, useCallback } from 'react'
import {
  Box,
  FormControlLabel,
  Link,
  Typography,
  Stack,
} from '@mui/material'
import {
  MButton,
  MInput,
  MCheckbox,
  MAlert,
} from 'components/CustomMaterial'
import { BackLoader } from 'components/Loader'
import { Link as RouterLink } from 'react-router-dom'
import { validator } from 'helpers/validator'
import { useDispatch } from 'react-redux'
import { signup } from 'redux/modules/auth/actions'

const FieldSection = () => {
  const dispatch = useDispatch()
  const [isChecked, setIsChecked] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validationStr, setValidationStr] = useState([])
  const [openAlert, setOpenAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState('Error on create an account!')
  const [isLoading, setIsloading] = useState(false)

  const doSignup = useCallback(() => {
    setIsloading(true)
    dispatch(signup({
      body: {
        firstName, lastName, email, password
      },
      success: (res) => {
        setIsloading(false)
      },
      fail: (e) => {
        if (e.status === 422) {
          setErrorMessage(e.data.error)
          setOpenAlert(true)
        } else {
          setOpenAlert(true)
        }
        setIsloading(false)
      }
    }))
  }, [dispatch, firstName, lastName, email, password])

  const handleSignup = () => {
    let validation_str = []
    validation_str.push(validator(firstName, ['require']))
    validation_str.push(validator(lastName, ['require']))
    validation_str.push(validator(email, ['require', 'email']))
    validation_str.push(validator(password, ['require', 'password']))

    setValidationStr(validation_str)

    const isValid = !validation_str.filter(item => item).length
    if (!isValid) {
      return
    }

    doSignup()
  }

  return (
    <Stack justifyContent="center" alignItems="center">
      <MAlert open={openAlert} setOpen={setOpenAlert} message={errorMessage} type="error" />
      <BackLoader open={isLoading} />

      <Box sx={{ maxWidth: '560px', width: '100%', mt: { md: 9, xs: 4 }, mb: 4, mx: 5 }}>
        <Stack sx={{ mb: 2 }} spacing={2}>
          <Typography variant="h2" sx={{ color: "#141414", fontWeight: 500, fontSize: { md: "32px", xs: "24px" } }}>
            Create your free account
          </Typography>
          <Typography variant="subTitle" sx={{ color: "#555" }}>
            Lets get you all setup so you can start using Crypto school for FREE!!
          </Typography>
        </Stack>

        <MInput
          label='First Name'
          placeholder='Enter first Name'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          error={validationStr[0]}
        />
        <MInput
          label='Last Name'
          placeholder='Enter last name'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          error={validationStr[1]}
        />
        <MInput
          label='Email Address'
          placeholder='Enter email address'
          value={email}
          onChange={e => setEmail(e.target.value)}
          error={validationStr[2]}
        />
        <MInput
          type='password'
          label='Password'
          placeholder='Set your account password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          error={validationStr[3]}
        />

        <FormControlLabel
          value={isChecked}
          sx={{ mt: 2 }}
          control={<MCheckbox color='success' />}
          onChange={() => setIsChecked(prev => !prev)}
          label={
            <Typography variant="subTitle" sx={{ color: "#858585" }}>I accept <Link
              href="/terms" target="_blank" color="#000">terms
            </Link> and <Link href="/terms" target="_blank" color="#000">privacy policy</Link>
            </Typography>
          }
        />

        <MButton
          color='success'
          variant='contained'
          fullWidth
          disabled={!isChecked}
          sx={{ height: 48, my: 4, color: '#FFF', fontSize: 16 }}
          onClick={handleSignup}
        >
          Create free account
        </MButton>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="subTitle1" sx={{ color: "#555" }}>Already have an account? <RouterLink to="/login">
            <Link component="button" color="#62BE5F" sx={{ fontSize: "1.125rem" }}>Sign in</Link></RouterLink>
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Typography variant="subTitle4" sx={{ color: "#858585" }}>Cryptonary respects your privacy. No spam.
            For more information, see our <Link href="/terms" target="_blank" color="#555">Privacy policy.</Link>
          </Typography>
        </Box>
      </Box>
    </Stack>
  )
}

export default FieldSection
