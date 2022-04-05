import React, { useState } from 'react'
import {
  Typography,
  Accordion as AccordionItem,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import {
  Add as AddIcon,
  Remove as RemoveIcon
} from '@mui/icons-material'
import styles from './styles'

const Accordion = ({
  title,
  description,
  id,
}) => {
  const [expanded, setExpanded] = useState(null)

  const handleChange = (itemID) => expanded === itemID ? setExpanded(null) : setExpanded(itemID)

  return (
    <AccordionItem sx={styles.item} onChange={() => handleChange(id)}>
      <AccordionSummary
        expandIcon={
          expanded === id ? (
            <RemoveIcon sx={styles.icon} />
          ) : (
            <AddIcon sx={styles.icon} />
          )
        }
      >
        <Typography variant="body1">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={expanded === id ? styles.detailsExpanded : styles.details}
      >
        {description && (
          <Typography sx={styles.description} variant="body2" component="p">
            {description}
          </Typography>
        )}
      </AccordionDetails>
    </AccordionItem>
  )
}

export default Accordion