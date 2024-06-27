import React, { FC } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'
import IconButton from '@mui/material/IconButton'
import ArrowForward from '@mui/icons-material/ArrowForward'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useRouter } from 'next/router'


const HomeNewsLetter: FC = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('https://api.whatsapp.com/send/?phone=%2B6285270856088&text&type=phone_number&app_absent=0')
  }

  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
                Contact Us 
          </Typography>
          <Typography sx={{  mb: 5 }}>Belajar UKMPPAI tidak pernah semudah ini, Segera bergabung dengan kami</Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 560 },
              mx: 'auto',
            }}
          >
               <IconButton
                  color="primary"
                  onClick={handleClick}
                  sx={{ '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' } }}
                >
                  <WhatsAppIcon />
                </IconButton>

                <Typography sx={{ mb: 1, fontSize: { xs: 28, md: 28 } }}>
                Hubungi Kami 
                </Typography>
            <Box>              
              <IconButton
                  color="primary"
                  onClick={handleClick}
                  sx={{ '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' } }}
                >
                  <ArrowForward />
                </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
