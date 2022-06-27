import { IoConstructOutline, IoSwapHorizontalOutline, IoInformation } from 'react-icons/io5'

export interface Link2 {
  label: string
  href?: string
  children?: Array<{
    label: string
    description?: string
    href: string
    icon?: React.ReactElement
  }>
}

export const links2: Link2[] = [
  {
    label: 'Manufacturing',
    children: [
      {
        label: 'Production',
        description: 'Product design and development processes that bring ideas to life.',
        href: '/services/manufacturing/production',
        icon: <IoConstructOutline />,
      },
      {
        label: 'Logistics',
        description: 'Manufacturing processes make or break product success.',
        href: '/services/manufacturing/logistics',
        icon: <IoSwapHorizontalOutline />,
      },
    ],
  },
  { label: 'About Us', href: '/about', /* icon: <IoInformation /> */ },
]
