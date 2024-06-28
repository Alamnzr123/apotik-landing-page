import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Komprehensif',
    description: 'Materi pelajaran yang lengkap, terstruktur, dan mendalam untuk memastikan Anda siap menghadapi UKMPPAI',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Interaktif',
    description: 'Platform yang interaktif dengan berbagai alat pembelajaran untuk memfasilitasi pemahaman yang mendalam',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Didukung oleh Profesional',
    description: 'Tim Coach berpengalaman yang siap membantu Anda meraih keberhasilan.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Terpercaya',
    description: 'Kami telah membantu banyak calon apoteker meraih hasil yang memuaskan dalam ujian UKMPPAI.',
    icon: <ContactSupportIcon />,
  },
]