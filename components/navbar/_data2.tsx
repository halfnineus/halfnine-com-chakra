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
        description: 'Products and quality that live up to the expectations of all customers.',
        href: '/services/manufacturing/production',
        icon: <IoConstructOutline />,
      },
      {
        label: 'Logistics',
        description: 'Product storage, distribution and supply chain management. ',
        href: '/services/manufacturing/logistics',
        icon: <IoSwapHorizontalOutline />,
      },
    ],
  },
  { label: 'About Us', href: '/about', /* icon: <IoInformation /> */ },
]
