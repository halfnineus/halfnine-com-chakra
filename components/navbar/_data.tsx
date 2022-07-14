import { MdDevicesOther } from 'react-icons/md'
import { VscTerminalCmd } from 'react-icons/vsc'
import { GiMechanicalArm } from 'react-icons/gi'
import { IoHardwareChipOutline } from 'react-icons/io5'

export interface Link {
  label: string
  href?: any
  children?: Array<{
    label: string
    description?: string
    href: string
    icon?: React.ReactElement
  }>
}

export const links: Link[] = [
  { label: 'Our Portfolio', href: '/portfolio/' },
  {
    label: 'Development',
    children: [
      {
        label: 'Electronic Engineering',
        description: 'Reliable and innovative solutions that enable a digital transformation.',
        href: '/services/development/electronic-engineering/',
        icon: <IoHardwareChipOutline />,
      },
      {
        label: 'Software Engineering',
        description: 'Reliable product development and design on the latest technology.',
        href: '/services/development/software-engineering/',
        icon: <VscTerminalCmd />,
      },
      {
        label: 'Mechanical Engineering',
        description: 'Take product ideas from concepts to working prototypes.',
        href: '/services/development/mechanical-engineering/',
        icon: <GiMechanicalArm />,
      },
      {
        label: 'Product Design',
        description: 'Innovative product design processes that bring ideas to life.',
        href: '/services/development/product-design/',
        icon: <MdDevicesOther />,
      },
    ],
  },
  { label: 'Manufacturing', href: '/services/manufacturing/', },
  { label: 'About Us', href: '/about/', },
]
