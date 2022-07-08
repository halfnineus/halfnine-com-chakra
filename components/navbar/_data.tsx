import { MdDevicesOther } from 'react-icons/md'
import { VscTerminalCmd } from 'react-icons/vsc'
import { GiMechanicalArm } from 'react-icons/gi'
import { BiPackage } from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { IoConstructOutline, IoSwapHorizontalOutline, IoHardwareChipOutline, IoInformation } from 'react-icons/io5'

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
  // { label: 'For Facilities', href: '/facilities' },
  // { label: 'For Factories', href: '/factories' },
  // { label: 'For Retail', href: '/retail' },
  // { label: 'For Consumers', href: '/consumers' },
  { label: 'Our Portafolio', href: '/portafolio' },
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
        description: 'Highly reliable product development and design on the latest technology.',
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
      // {
      //   label: 'Packaging Design',
      //   description: 'Packaging can be the top-shelf difference in retail success.',
      //   href: '/services/development/packaging-design',
      //   icon: <AiOutlineCloseCircle />,
      //   // icon: <BiPackage />,
      // },
    ],
  },
  // {
  //   label: 'Manufacturing',
  //   children: [
  //     {
  //       label: 'Production',
  //       description: 'Products and quality that live up to the expectations of all customers.',
  //       href: '/services/manufacturing/production',
  //       icon: <IoConstructOutline />,
  //     },
  //     {
  //       label: 'Logistics',
  //       // description: 'Product storage, distribution and supply chain management. ',
  //       description: 'Product storage and supply chain management. ',
  //       href: '/services/manufacturing/logistics',
  //       icon: <AiOutlineCloseCircle />,
  //       // icon: <IoSwapHorizontalOutline />,
  //     },
  //   ],
  // },
  { label: 'Manufacturing', href: '/services/manufacturing', },
  { label: 'About Us', href: '/about', },
]
