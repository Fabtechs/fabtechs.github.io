export type NavLink = {
  label: string
  to: string
}

export type HeroSlide = {
  eyebrow: string
  title: string
  subtitle: string
  description: string
  image: string
  primaryCta: { label: string; to: string }
  secondaryCta: { label: string; to: string }
}

export type ServiceArea = {
  id: string
  title: string
  blurb: string
  badge: string
}

export type WorkflowStep = {
  id: number
  title: string
  description: string
}

export type ProjectItem = {
  id: string
  title: string
  location: string
  image: string
}

export type Testimonial = {
  quote: string
  author: string
  role: string
}

export const siteBrand = {
  name: 'Fabtechs Enterprises',
  tagline: 'Engineering excellence in fabrication & erection',
  taglineShort: 'Fabrication · Erection · Surface Engineering',
  phone: '+91 9427003687',
  secondaryPhone: '+91 9429282598',
  email: 'work@fabtechs.co.in',
  address: 'GF 34, Krishna Complex, Near Rajpipla Chokadi, GIDC Ankleshwar – 393002',
  quoteMail: 'mailto:work@fabtechs.co.in?subject=Fabtechs%20Quote%20Request'
}

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Clients', to: '/testimonials' },
  { label: 'Contact', to: '/contact' }
]

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: 'Precision Fabrication',
    title: 'Industrial steel delivered to spec',
    subtitle: 'Pharma · Chemical · Infrastructure',
    description: 'Fit-up, alignment, and clean handovers delivered on time and on tolerance',
    image: '/img/hero/slider-1.jpg',
    primaryCta: { label: 'Explore Capabilities', to: '/projects' },
    secondaryCta: { label: 'Request a Quote', to: '/contact' }
  },
  {
    eyebrow: 'Integrated Delivery',
    title: 'Blasting, coating, and roofing under one accountable team',
    subtitle: 'Surface finishing · Sheet roofing',
    description: 'Cross-discipline crews keep critical assets protected and production-ready',
    image: '/img/hero/slider-2.jpg',
    primaryCta: { label: 'Review Services', to: '/about' },
    secondaryCta: { label: 'Talk to Engineering', to: '/contact' }
  },
  {
    eyebrow: 'Special Projects',
    title: 'Trusted by regulated facilities across South Gujarat',
    subtitle: 'Pharma · Renewables · Specialty chemicals',
    description: 'Sun Pharma, Neogen, Borosil, and other leaders rely on our project controls',
    image: '/img/hero/slider-3.jpg',
    primaryCta: { label: 'View Client Stories', to: '/testimonials' },
    secondaryCta: { label: 'Download Capability Deck', to: '/projects' }
  }
]

export const serviceAreas: ServiceArea[] = [
  {
    id: 'structure',
    title: 'Structure fabrication & erection',
    blurb: 'Dedicated fabrication bays, coded welders, and erection specialists delivering pipe racks, platforms, and heavy modules',
    badge: 'SF'
  },
  {
    id: 'surface',
    title: 'Blasting & coating systems',
    blurb: 'Controlled blasting, metallizing, and multi-coat systems that lock out corrosion in aggressive blocks',
    badge: 'BC'
  },
  {
    id: 'roofing',
    title: 'Sheet roofing (GI · FRP · UPVC)',
    blurb: 'Engineered GI, FRP, and UPVC roofing with skylights and envelope upgrades for long-span coverage',
    badge: 'SR'
  },
  {
    id: 'shutdown',
    title: 'Shutdown & specialty support',
    blurb: 'Rapid-response crews for brownfield tie-ins, equipment swaps, and high-risk turnaround scopes',
    badge: 'SS'
  }
]

export const workflowSteps: WorkflowStep[] = [
  { id: 1, title: 'Insight & planning', description: 'We map constraints, codes, and field realities before a single plate is ordered' },
  { id: 2, title: 'Design assist', description: 'Detailing support plus constructability reviews keep fabrication precise and installable' },
  { id: 3, title: 'Specialized execution', description: 'Dedicated bays and certified erection crews hold tolerances in harsh environments' },
  { id: 4, title: 'Commission & handover', description: 'Punch lists, coating dossiers, and as-built records close alongside site cleanup' }
]

export const aboutHighlights = [
  {
    title: 'Professional liability',
    description: 'Statutory compliance, QAP documentation, and insured operations baked into every scope'
  },
  {
    title: 'Client dedication',
    description: 'Transparent schedules, single-point coordinators, and daily progress intelligence'
  },
  {
    title: 'Outstanding service',
    description: 'Multi-discipline crews that treat safety, housekeeping, and timelines as non-negotiables'
  }
]

export const stats = [
  { label: 'Years delivering', value: '5+' },
  { label: 'Projects executed', value: '120+' },
  { label: 'Skilled technicians', value: '70+' },
  { label: 'Repeat clientele', value: '90%' }
]

export const projects: ProjectItem[] = [
  { id: 'sun-pharma', title: 'Sun Pharma Industries Ltd', location: 'Ankleshwar · Panoli · Dahej', image: '/img/projects/1.jpg' },
  { id: 'neogen', title: 'Neogen Chemicals Ltd', location: 'SEZ-2 · Dahej', image: '/img/projects/2.jpg' },
  { id: 'borosil', title: 'Borosil Renewables Ltd', location: 'Jhagadia', image: '/img/projects/3.jpg' },
  { id: 'meghmani', title: 'Meghmani Novotech Pvt Ltd', location: 'Dahej', image: '/img/projects/4.jpg' },
  { id: 'aarti', title: 'Aarti Industries (Sub contractor)', location: 'Jhagadia · Dahej', image: '/img/projects/5.jpg' },
  { id: 'ganga', title: 'Ganga Rasayanie Pvt Ltd', location: 'Dahej', image: '/img/projects/6.jpg' },
  { id: 'mrf', title: 'MRF Tyre Ltd', location: 'Dahej', image: '/img/projects/7.jpg' },
  { id: 'akshar-chem-a', title: 'Akshar Chem (India) Ltd', location: 'Dahej', image: '/img/projects/8.jpg' },
  { id: 'akshar-chem-b', title: 'Akshar Chem (India) Ltd', location: 'Dahej', image: '/img/projects/9.jpg' },
  { id: 'akshar-chem-c', title: 'Akshar Chem (India) Ltd', location: 'Dahej', image: '/img/projects/10.jpg' }
]

export const partners = [
  '/img/partners/sun-pharma.png',
  '/img/partners/neogen-chemicals.png',
  '/img/partners/borosil-renewables.png',
  '/img/partners/meghmani-group.png',
  '/img/partners/aarti-industries.png',
  '/img/partners/ganga-rasayanie.png',
  '/img/partners/mrf.png',
  '/img/partners/aksil.png',
  '/img/partners/mullackal.png',
  '/img/partners/jindal-steel.png'
]

export const testimonials: Testimonial[] = [
  {
    quote: 'Fabtechs mobilized structural teams across two Panoli units simultaneously - zero safety deviations and reporting that mirrored our cadence',
    author: 'Operations Head, Sun Pharma',
    role: 'Sun Pharma Industries Ltd'
  },
  {
    quote: 'Sheet roofing and envelope upgrades executed inside a live chemical block under strict compliance and the crew closed the punch list ahead of monsoon season',
    author: 'Chief Engineer, Neogen Chemicals',
    role: 'Neogen Chemicals Ltd'
  },
  {
    quote: 'During our Dahej shutdown Fabtechs owned blasting, painting, and critical lifts while supervisors stayed on top of every schedule and quality conversation',
    author: 'Project Manager, Meghmani Novotech',
    role: 'Meghmani Novotech Pvt Ltd'
  }
]

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/fabtechs_enterprises/' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1CFJEQY5ez/' },
  { label: 'WhatsApp', href: 'https://wa.me/9427003687' }
]

export const contactChannels = [
  { label: 'Email', value: siteBrand.email, href: 'mailto:work@fabtechs.co.in' },
  { label: 'Primary phone', value: siteBrand.phone, href: 'tel:+919427003687' },
  { label: 'Secondary phone', value: siteBrand.secondaryPhone, href: 'tel:+919429282598' },
  { label: 'Address', value: siteBrand.address }
]

export const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.194829783462!2d73.0270755!3d21.635987099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be021b0368d353b%3A0xe90e56b0bfb36e76!2sFabtechs%20Enterprises!5e1!3m2!1sen!2sin!4v1741615879767!5m2!1sen!2sin'

export const web3FormsKey = '56936c6c-f850-4085-9e2b-a4766e6c7354'
