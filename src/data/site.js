// Central content for the site. Edit here to update copy, photos and videos.

export const profile = {
  name: 'Oluwadara Onanuga',
  shortName: 'Dara',
  roles: ['Creative Director', 'Cinematographer', 'Visual Storyteller', 'Video Editor'],
  tagline: 'Creative Director & Visual Storyteller',
  email: 'joshuaonanuga@gmail.com',
  phone: '+234 704 986 7435',
  location: 'Lagos, Nigeria · Available worldwide',
  intro:
    'I craft innovative, industry-standard, user-centered audio-visual masterpieces — designs and stories that drive engagement, emotion and conversion.',
  about:
    'I am a professional visual storyteller, renowned for a keen eye for detail and a deep understanding of design principles. I specialise in crafting visually compelling solutions that resonate with audiences across every digital platform — cinematic storytelling that consistently exceeds expectations.',
  cv: 'Oluwadara-Onanuga-Portfolio.pdf'
}

export const stats = [
  { value: '6+', label: 'Years directing & shooting' },
  { value: '80+', label: 'Stories shot & edited' },
  { value: '12+', label: 'Brands & airlines served' },
  { value: '4', label: 'Countries filmed in' }
]

export const services = [
  {
    icon: 'film',
    title: 'Cinematography',
    text: 'Directing and shooting high-resolution, cinematic footage for films, events, commercials and brand campaigns.'
  },
  {
    icon: 'scissors',
    title: 'Video Editing',
    text: 'Crafting rhythm, pace and emotion in post — trailers, promos, documentaries and social-first content.'
  },
  {
    icon: 'compass',
    title: 'Creative Direction',
    text: 'Leading media teams and shaping the visual language of a story from concept through to final delivery.'
  },
  {
    icon: 'sparkles',
    title: 'Motion Graphics',
    text: 'Designing compelling motion graphics and visual effects that make every frame work harder.'
  },
  {
    icon: 'camera',
    title: 'Photography',
    text: 'On-site event, tourism and glam photography with meticulous composition and colour.'
  },
  {
    icon: 'megaphone',
    title: 'Content & Marketing',
    text: 'Building content strategies and audiovisual assets that grow audiences and win proposals.'
  }
]

export const skills = [
  'Adobe Premiere Pro',
  'Final Cut Pro',
  'DaVinci Resolve',
  'Adobe After Effects',
  'CapCut Pro',
  'Filmora Pro',
  'Canva Pro',
  'Keyframing',
  'Colour Grading',
  'Camera Operating'
]

// Marquee words that scroll across the hero/section breaks
export const marquee = [
  'Cinematography',
  'Storytelling',
  'Video Editing',
  'Motion Graphics',
  'Creative Direction',
  'Colour',
  'Photography'
]

export const experience = [
  {
    role: 'Video Editor',
    org: 'The New London',
    period: 'Apr 2025 — Present',
    detail:
      'Shoot and edit all audio-visual content for the organisation; coordinate on-site and off-site video shoots.'
  },
  {
    role: 'Cinematographer',
    org: 'Kenya Airways · Royal Air Maroc · Tourist Culture Media',
    period: '2024 — 2025',
    detail:
      'Spotlighted airline delegates at Akwaaba 2025, directed route-launch events, and shot commercial films for Marriott Kigali, Four Points by Sheraton and more.'
  },
  {
    role: 'Cinematographer & Video Editor',
    org: '“Something About The Briggs” (Cinema Film)',
    period: '2024 — 2025',
    detail:
      'Led the PR media team, coordinated glam shoots, cut the movie trailer and promotional films, and directed the premiere coverage.'
  },
  {
    role: 'Media Lead & Multimedia Designer',
    org: 'Phenom Communications',
    period: '2024 — 2026',
    detail:
      'Led the media team, shot and edited high-resolution video, and built content strategies that delivered results.'
  },
  {
    role: 'Creative Director of Media',
    org: 'The Afrikaans TV',
    period: '2023 — 2024',
    detail:
      'Team lead for shooting and editing; producer of the “Escapades Podcast” and tourism coverage of Ojude-Oba, Osun-Osogbo and New Yam festivals.'
  },
  {
    role: 'Video Editor & On-site Producer',
    org: 'NTA — Nigeria Television Authority',
    period: '2023 — 2024',
    detail:
      'Shot and edited high-resolution video, produced on-air programmes, and led camera operators at high-profile events.'
  }
]

export const courses = [
  { title: 'Visual Storytelling', org: 'Kigali Film & Television School', year: '2025' },
  { title: 'Art of Storytelling', org: 'KAP Film & Television Academy', year: '2023' },
  { title: 'Digital Media & Marketing Strategies', org: 'GetFundedAfrica', year: '2023' },
  { title: 'Digital Storytelling: Filmmaking for the Web', org: 'University of Birmingham', year: '2022' }
]

// Photography grid. `size` controls the masonry span for visual rhythm.
const photoMeta = [
  { file: 'dara-01', title: 'On Set', cat: 'Behind the Scenes', size: 'wide' },
  // { file: 'dara-06', title: 'Golden Hour', cat: 'Events' },
  { file: 'dara-07', title: 'The Delegation', cat: 'Events' },
  // { file: 'dara-08', title: 'Frame & Light', cat: 'Events', size: 'tall' },
  { file: 'dara-09', title: 'In Conversation', cat: 'Events' },
  // { file: 'dara-10', title: 'The Stage', cat: 'Events', size: 'wide' },
  { file: 'dara-11', title: 'Portrait', cat: 'Portrait' },
  // { file: 'dara-12', title: 'Details', cat: 'Events' },
  { file: 'dara-13', title: 'The Crowd', cat: 'Events' },
  // { file: 'dara-21', title: 'Studio', cat: 'Portrait', size: 'tall' },
  { file: 'dara-23', title: 'Coverage', cat: 'Events' },
  { file: 'dara-24', title: 'Backstage', cat: 'Behind the Scenes' },
  // { file: 'dara-14', title: 'Composition', cat: 'Events', size: 'wide' },
  // { file: 'dara-26', title: 'The Moment', cat: 'Portrait', size: 'tall' },
  { file: 'dara-27', title: 'Ambience', cat: 'Events' },
  { file: 'dara-28', title: 'Motion', cat: 'Portrait' },
  { file: 'dara-29', title: 'Reflection', cat: 'Portrait' }
]

export const photos = photoMeta.map((p) => ({
  ...p,
  thumb: `images/thumb/${p.file}.jpg`,
  full: `images/full/${p.file}.jpg`
}))

// Behind-the-scenes / about imagery
export const aboutImages = {
  primary: 'images/full/dara-05.jpg',
  secondary: 'images/full/dara-03.jpg'
}

export const heroImages = [
  'images/full/dara-04.jpg',
  'images/full/dara-02.jpg',
  'images/full/dara-25.jpg',
  'images/full/dara-10.jpg'
]

// BRANDS — organisations & brands worked with. The numbered logo files follow
// the display order below. If a logo is missing, the tile shows the brand name.
const brandMeta = [
  { name: 'Phenom Communications', slug: 'phenom-communications' },
  { name: 'Kenya Airways', slug: 'kenya-airways' },
  { name: 'Royal Air Maroc', slug: 'royal-air-maroc' },
  { name: 'Oludidit', slug: 'oludidit' },
  { name: 'Kigali Inclusion Conference', slug: 'kigali-inclusion-conference' },
  { name: 'FAAN', slug: 'faan' },
  { name: 'FNAC', slug: 'fnac' },
  { name: 'Uganda Airlines', slug: 'uganda-airlines' },
  { name: 'Tourist Culture Media', slug: 'tourist-culture-media' },
  { name: 'The New London', slug: 'the-new-london' },
  { name: 'NTA', slug: 'nta' },
  { name: 'Medmatics Prisons Initiative', slug: 'medmatics-prisons-initiative' },
  { name: 'The Afrikaans TV', slug: 'the-afrikaans-tv' },
  { name: 'ToyDam Communications', slug: 'toydam-communications' },
  { name: 'Trucks Transit Parks', slug: 'trucks-transit-parks' },
  { name: 'Brooks & Blakes', slug: 'brooks-and-blakes' },
  { name: 'BURN Stoves Nigeria Limited', slug: 'burn-stoves-nigeria' },
  { name: 'AMVCA', slug: 'amvca' },
  { name: 'Marriott Kigali', slug: 'marriott-kigali' },
  { name: 'Four Points by Sheraton Kigali', slug: 'four-points-sheraton-kigali' },
  { name: 'The Retreat Rwanda', slug: 'the-retreat-rwanda' },
  { name: 'Morocco National Tourism Board (MNTO)', slug: 'morocco-national-tourism-board' },
  { name: 'Ubongo Kids', slug: 'ubongo-kids' },
  { name: 'Easy247 Travels', slug: 'easy247-travels' },
  { name: 'Purple Group', slug: 'purple-group' },
  { name: 'Nazeef Homes', slug: 'nazeef-homes' },
  { name: 'DriveOne Media', slug: 'driveone-media' }
]

export const brands = brandMeta.map((b, index) => ({
  ...b,
  logo: `images/brand/${index + 1}.png`
}))

// VIDEO BANK — placeholders. Replace `src` with a real MP4 URL or a
// YouTube/Vimeo embed URL later, and set `type` to 'file' or 'embed'.
export const videos = [
  {
    title: 'Showreel 2025',
    category: 'Cinematography',
    poster: 'images/full/dara-04.jpg',
    type: 'placeholder',
    src: ''
  },
  {
    title: 'Route Launch — Royal Air Maroc',
    category: 'Event Film',
    poster: 'images/full/dara-10.jpg',
    type: 'placeholder',
    src: ''
  },
  {
    title: '“Something About The Briggs” — Trailer',
    category: 'Film Trailer',
    poster: 'images/full/dara-25.jpg',
    type: 'placeholder',
    src: ''
  },
  {
    title: 'Kigali Financial Inclusion Conference',
    category: 'Documentary',
    poster: 'images/full/dara-07.jpg',
    type: 'placeholder',
    src: ''
  },
  {
    title: 'Tourism Series — East Africa',
    category: 'Travel',
    poster: 'images/full/dara-14.jpg',
    type: 'placeholder',
    src: ''
  },
  {
    title: 'Escapades Podcast',
    category: 'Series',
    poster: 'images/full/dara-13.jpg',
    type: 'placeholder',
    src: ''
  }
]

export const socials = [
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'YouTube', href: '#', icon: 'youtube' },
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  { name: 'Behance', href: '#', icon: 'behance' }
]
