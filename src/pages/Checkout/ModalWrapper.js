import React from "react" 
import { ReactComponent as CloseBtn } from "assets/image/close_btn.svg" 
import { Box, Typography, Modal } from "@mui/material" 

export const ModalWrapper = ({ isOpenModal, switchModal, title, children }) => (
  <Modal open={isOpenModal}>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
    >
      <Box
        maxWidth="584px"
        width="100%"
        bgcolor="#FFFFFF"
        borderRadius="4px"
        p="32px"
      >
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
          mb="48px"
        >
          <Typography fontSize="20px" color="#141414">
            {title}
          </Typography>
          <CloseBtn onClick={switchModal} />
        </Box>
        {children}
      </Box>
    </Box>
  </Modal>
) 
