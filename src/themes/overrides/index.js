import { merge } from 'lodash'
import Button from './Button'
import Input from './Input'
import Typography from './Typography'
// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return merge(
    Button(theme),
    Input(theme),
    Typography(theme),
  )
}
