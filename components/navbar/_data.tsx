import { MdDevicesOther } from 'react-icons/md'
import { IoHardwareChipOutline } from 'react-icons/io5'
import { VscTerminalCmd } from 'react-icons/vsc'
import { GiMechanicalArm } from 'react-icons/gi'
import { BiPackage } from 'react-icons/bi'


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
        label: 'Electronic Engineering',
        description: 'Highly reliable innovative solutions that enable a digital transformation.',
        href: '/services/development/electronic-engineering',
        icon: <IoHardwareChipOutline />,
      },
      {
        label: 'Software Engineering',
        description: 'Highly reliable product design and development on the latest technology.',
        href: '/services/development/software-engineering',
        icon: <VscTerminalCmd />,
      },
      {
        label: 'Mechanical Engineering',
        description: 'Take product ideas from concepts to working prototypes.',
        href: '/services/development/mechanical-engineering',
        icon: <GiMechanicalArm />,
      },
      {
        label: 'Product Design',
        description: 'Innovative product design processes that bring ideas to life.',
        href: '/services/development/product-design',
        icon: <MdDevicesOther />,
      },
      {
        label: 'Packaging Design',
        description: 'Packaging can be the top-shelf difference in retail success.',
        href: '/services/development/packaging-design',
        icon: <BiPackage />,
      },
    ],
  },
  // { label: 'Pricing', href: '#' },
]
