import React, { useCallback, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#efefef',
  '&:hover': {
    backgroundColor: '#e3e3e3',
  },
  marginLeft: 0,
  width: '100%',
  maxWidth: '400px',
  height: '48px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  height: '48px',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
    },
  },
}))

const debounce = (fn, delay) => {
  let timerId
  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => fn(...args), delay)
  }
}

const SearchBox = ({ placeholder, value, onChange }) => {
  const [inputValue, setInputValue] = useState(value)

  const handleChange = (value) => {
    setInputValue(value)
    debouncedHandler(value)
  }

  const debouncedHandler = useCallback(debounce(onChange, 500), [])

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholder ?? "Search ..."}
        inputProps={{ 'aria-label': 'search' }}
        value={inputValue}
        onChange={e => handleChange(e.target.value)}
      />
    </Search>
  )

}

export default SearchBox