export const site = {
  name: 'Chirayu Health Awareness & Research Centre',
  shortName: 'Chirayu',
  tagline: 'Live long life...',
  description:
    'Building a healthier society through awareness, prevention, and community care.',
  email: 'chirayuhealthcare07@gmail.com',
  phones: [
    { label: 'Mobile', display: '+91 97431 92939', href: 'tel:+919743192939' },
    { label: 'Mobile', display: '+91 94814 73804', href: 'tel:+919481473804' },
    { label: 'Landline', display: '0836-2442939', href: 'tel:+918362442939' },
  ],
  address: {
    line1: 'Jayanagar 2nd Cross',
    line2: 'Dharwad, 580 007',
    city: 'Dharwad, Karnataka, India',
    mapsQuery: 'Jayanagar 2nd Cross, Dharwad 580007',
  },
  facebook: 'https://www.facebook.com/share/1Hw3ejKscP/',
} as const

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/contact', label: 'Contact' },
] as const

export const photos = {
  hero: '/images/gallery/community-event.webp',
  whoWeAre: '/images/gallery/rural-outreach.webp',
  about: '/images/gallery/student-checkup.webp',
  programs: '/images/gallery/eye-exam.webp',
  getInvolved: '/images/gallery/school-screening.webp',
  contact: '/images/gallery/yoga-camp.webp',
} as const

export const galleryPhotos = [
  {
    src: '/images/gallery/student-checkup.webp',
    alt: 'Health worker screening a school student',
    caption: 'School health screening',
    place: 'Dharwad',
  },
  {
    src: '/images/gallery/school-screening.webp',
    alt: 'Schoolgirls gathered around a health camp table',
    caption: 'Student health camp',
    place: 'School outreach',
  },
  {
    src: '/images/gallery/students-with-banner.webp',
    alt: 'Students standing with the Chirayu camp banner',
    caption: 'Students at a Chirayu camp',
    place: 'Dharwad',
  },
  {
    src: '/images/gallery/camp-banner.webp',
    alt: 'Chirayu health camp banner at a school',
    caption: 'Preventive health camp',
    place: 'School campus',
  },
  {
    src: '/images/gallery/camp-staff.webp',
    alt: 'Chirayu team conducting check-ups with students',
    caption: 'Community screening desk',
    place: 'Dharwad',
  },
  {
    src: '/images/gallery/school-queue.webp',
    alt: 'School children waiting for a health check-up',
    caption: 'School health programme',
    place: 'Dharwad',
  },
  {
    src: '/images/gallery/registration-desk.webp',
    alt: 'Registration desk at a Chirayu health camp',
    caption: 'Camp registration',
    place: 'Health camp',
  },
  {
    src: '/images/gallery/rural-outreach.webp',
    alt: 'Team taking medical supplies to a rural household',
    caption: 'Rural outreach',
    place: 'Community visit',
  },
  {
    src: '/images/gallery/community-event.webp',
    alt: 'Community gathering with Chirayu banner',
    caption: 'Community programme',
    place: 'Dharwad',
  },
  {
    src: '/images/gallery/health-meeting.webp',
    alt: 'Health meeting with a doctor in a community centre',
    caption: 'Health awareness meeting',
    place: 'Community centre',
  },
  {
    src: '/images/gallery/screening-cots.webp',
    alt: 'Basic screening camp with examination cots',
    caption: 'Basic health screening',
    place: 'Camp hall',
  },
  {
    src: '/images/gallery/eye-exam.webp',
    alt: 'Doctor examining an elderly woman’s eyes',
    caption: 'Eye screening for seniors',
    place: 'Community camp',
  },
  {
    src: '/images/gallery/yoga-camp.webp',
    alt: 'Health screening during International Yoga Day camp',
    caption: 'Yoga Day health camp',
    place: 'Dharwad, 2018',
  },
] as const

export function mapsEmbedUrl() {
  const q = encodeURIComponent(site.address.mapsQuery)
  return `https://maps.google.com/maps?q=${q}&z=16&output=embed`
}
