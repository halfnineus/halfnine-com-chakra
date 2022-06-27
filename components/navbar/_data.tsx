import * as React from 'react'
import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { MdWeb } from 'react-icons/md'

export interface Link {
  label: string
  href?: string
  children?: Array<{
    label: string
    description?: string
    href: string
    icon?: React.ReactElement
  }>
}

export const links: Link[] = [
  // { label: 'For Designers', href: '#' },
  // { label: 'For Teams', href: '#' },
  {
    label: 'Development',
    children: [
      {
        label: 'electronic-engineering',
        description: 'Product design and development processes that bring ideas to life.',
        href: '/services/development/electronic-engineering',
        icon: <IoHelpBuoy />,
      },
      {
        label: 'software-engineering',
        description: 'Get updates, articles and insights from the team.',
        href: '/services/development/software-engineering',
        icon: <MdWeb />,
      },
      {
        label: 'mechanical-engineering',
        description: 'Manufacturing processes make or break product success.',
        href: '/services/development/mechanical-engineering',
        icon: <IoGrid />,
      },
      {
        label: 'packaging-design',
        description: 'Discover and join your local Sketch community.',
        href: '/services/development/packaging-design',
        icon: <IoCalendar />,
      },
      {
        label: 'product-design',
        description: 'Get updates, articles and insights from the team.',
        href: '/services/development/product-design',
        icon: <MdWeb />,
      },
    ],
  },
  // { label: 'Pricing', href: '#' },
]
