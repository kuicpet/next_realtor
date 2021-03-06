import React from 'react'
import { Box } from '@chakra-ui/react'


const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <Box
      textAlign='center'
      p='5'
      color='gray.600'
      borderTop='1px'
      borderColor='gray.100'
    >
      &copy; {date} Next-Realtor, Inc
    </Box>
  )
}

export default Footer
