import * as React from 'react'
import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { MdWeb } from 'react-icons/md'

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
        label: 'production',
        description: 'Product design and development processes that bring ideas to life.',
        href: '/services/manufacturing/production',
        icon: <IoHelpBuoy />,
      },
      {
        label: 'logistics',
        description: 'Manufacturing processes make or break product success.',
        href: '/services/manufacturing/logistics',
        icon: <IoGrid />,
      },
    ],
  },
  { label: 'About Us', href: '/about' },
]
