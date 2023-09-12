import facebookLogo from '@/assets/svg/facebook.svg'
import googleLogo from '@/assets/svg/google.svg'
import twitterLogo from '@/assets/svg/twitter.svg'
import { StaticImageData } from 'next/image'

interface ILinkList {
  title: string
  icons?: boolean
  links: Array<{ label?: string; icon?: StaticImageData }>
}

export const linkList = [
  {
    title: 'Product',
    links: [
      { label: 'Popular' },
      { label: 'Trending' },
      { label: 'Guided' },
      { label: 'Products' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'Press' },
      { label: 'Mission' },
      { label: 'Strategy' },
      { label: 'About' }
    ]
  },
  {
    title: 'Info',
    links: [
      { label: 'Support' },
      { label: 'Custome Service' },
      { label: 'Get started' }
    ]
  },
  {
    title: 'Follow us',
    icons: true,
    links: [{ icon: facebookLogo }, { icon: googleLogo }, { icon: twitterLogo }]
  }
] as Array<ILinkList>
