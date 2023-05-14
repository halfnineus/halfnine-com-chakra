import { MdWebAsset, MdOutlineDesktopWindows, MdSmartphone, MdCloudQueue, MdCode } from 'react-icons/md'
import { AiOutlineSecurityScan } from 'react-icons/ai'
import { BsPersonRolodex, BsShop } from 'react-icons/bs'
import { GiArtificialHive } from 'react-icons/gi'

export const items = [
  {
    locale: "en",
    title: 'Application Development',
    links: [
      {
        title: 'Web Applications',
        href: '/services/web-applications',
        icon: MdWebAsset,
      },
      {
        title: 'Mobile Applications',
        href: '/services/mobile-applications',
        icon: MdSmartphone,
      },
      {
        title: 'Desktop Applications',
        href: '/services/desktop-applications',
        icon: MdOutlineDesktopWindows,
      },
    ],
  },
  {
    locale: "en",
    title: 'Other Development',
    links: [
      {
        title: 'Cloud Computing',
        href: '/services/cloud-computing',
        icon: MdCloudQueue,
      },
      {
        title: 'Artificial Intelligence',
        href: '/services/artificial-intelligence',
        icon: GiArtificialHive,
      },
      {
        title: 'Internet of Things',
        href: '/services/internet-of-things',
        icon: MdCode,
      },
    ],
  },
  {
    locale: "en",
    title: 'Specialized Services',
    links: [
      {
        title: 'Staff Augmentation',
        href: '/services/staff-augmentation',
        icon: BsPersonRolodex,
      },
      {
        title: 'Cybersecurity Responses',
        href: '/services/cybersecurity',
        icon: AiOutlineSecurityScan,
      },
    ],
  },
  {
    locale: "es",
    title: 'Desarrollo de aplicaciones',
    links: [
      {
        title: 'Aplicaciones Web',
        href: '/services/web-applications',
        icon: MdWebAsset,
      },
      {
        title: 'Aplicaciones Móviles',
        href: '/services/mobile-applications',
        icon: MdSmartphone,
      },
      {
        title: 'Aplicaciones de escritorio',
        href: '/services/desktop-applications',
        icon: MdOutlineDesktopWindows,
      },
    ],
  },
  {
    locale: "es",
    title: 'Otro desarrollo',
    links: [
      {
        title: 'Computación en la nube',
        href: '/services/cloud-computing',
        icon: MdCloudQueue,
      },
      {
        title: 'Inteligencia Artificial',
        href: '/services/artificial-intelligence',
        icon: GiArtificialHive,
      },
      {
        title: 'Internet de las Cosas',
        href: '/services/internet-of-things',
        icon: MdCode,
      },
    ],
  },
  {
    locale: "es",
    title: 'Servicios Especializados',
    links: [
      {
        title: 'Aumento de Personal',
        href: '/services/staff-augmentation',
        icon: BsPersonRolodex,
      },
      {
        title: 'Respuestas de Ciberseguridad',
        href: '/services/cybersecurity',
        icon: AiOutlineSecurityScan,
      },
    ],
  }


]
