const styles = {
  item: {
    bgcolor: '#FCFCFC',
    marginBottom: '8px',
    borderRadius: '4px',
    boxShadow: 'none',
    '&:before': {
      position: 'static'
    },
    '&.Mui-expanded': {
      mt: '0',
      mb: '8px',
    },
  },
  icon: { color: 'custom.white' },
  title: { color: '#555555' },
  description: { color: '#858585' },
  detailsExpanded: { padding: '0 24px 24px' },
  details: {
    paddingLeft: '24px',
    paddingRight: '24px',
  },
}

export default styles