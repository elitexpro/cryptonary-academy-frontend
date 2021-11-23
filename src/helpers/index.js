// fill zero if number has only one digit, ex: '3' to '03'
export const padStart = (num, digits = 2) =>
  num.toString().padStart(digits, '0')

// get seconds from the string, ex: '150s' to 150
export const getSecsFromStr = (str) => parseFloat(str.slice(0, str.length - 1))

// convert second string or number format to time format hh:mm:ss,
// ex: '150s' to '02:30' or 150 to '02:30'
export const hhmmss = (val) => {
  const secs = typeof val === 'string' && val.includes('s') ? getSecsFromStr(val) : val
  const seconds = Math.floor(secs % 60)
  const minutes = Math.floor(secs / 60) % 60
  const hours = Math.floor(secs / 3600)
  return (hours ? padStart(hours) + ':' : '') +
    (minutes ? padStart(minutes) : '00') + ':' +
    padStart(seconds)
}
