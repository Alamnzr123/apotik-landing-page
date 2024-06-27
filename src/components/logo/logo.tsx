import React, { FC } from 'react'
import { Box } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick}>
      
      <img style={{ width: '40%'}} src="/images/logo-bigsize.jpeg" alt="Logo" />

    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
