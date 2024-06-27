import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Komprehensif',
    content:
      'Materi pelajaran yang lengkap, terstruktur, dan mendalam untuk memastikan Anda siap menghadapi UKMPPAI',
    user: {
      id: 1,
      name: 'Gede Parisudha Tegeh Putra',
      professional: 'Industrial Pharmacy Practitioner',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Interaktif',
    content:
      'Platform yang interaktif dengan berbagai alat pembelajaran untuk memfasilitasi pemahaman yang mendalam',
    user: {
      id: 1,
      name: 'Saidah Usman Balbeid',
      professional: 'Clinical Pharmacy Practitioner',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Didukung oleh Profesional',
    content:
      'Tim Coach berpengalaman yang siap membantu Anda meraih keberhasilan. ',
    user: {
      id: 1,
      name: 'Nur Fadhilah',
      professional: 'Community Pharmacy Practitioner',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Terpercaya',
    content:
      'Kami telah membantu banyak calon apoteker meraih hasil yang memuaskan dalam ujian UKMPPAI. ',
    user: {
      id: 1,
      name: 'Diana Jordan',
      professional: 'SEO Expert',
      photo: '4.jpg',
    },
  },
]
