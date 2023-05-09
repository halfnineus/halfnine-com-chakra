import {
  Box,
  Heading,
  Flex,
  Text,
  SimpleGrid,
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import React from "react";
import FadeInBox from '../fadeInBox';

const devPractices = ({ currentStep, setCurrentStep }: any) => {
  const { locale } = useRouter();
  // const [activeTab, setActiveTab] = useState(0);
  const filteredData = data.filter((p) => p.locale === locale);
  return (
    <>
      <FadeInBox>
        <Flex direction="column-reverse" mb={2}>
          <Box
            as="hr"
            bg="blue.500"
            h="3px"
            w="64px"
            my={1}
          />
          {datax.filter(p => p.locale === locale).map((indexData, i) => (
            <div key={i}>
              <Heading pb={2}>
                {indexData.text}
              </Heading>
              <Text pb={4} color={'gray.600'} fontStyle={'oblique'}>
                {indexData.description}
              </Text>
            </div>
          ))}
        </Flex>
        {/* </FadeInBox> */}
        {/* <FadeInBox shadow={'xs'} w={'full'} rounded={'xl'} bg={'white'} p={4}> */}
        <SimpleGrid
          shadow={'xs'} w={'full'} rounded={'xl'} bg={'white'} p={4}
          columns={{ base: 2, md: 4, }}
          spacing={6}
        >
          {filteredData.map((tab, index) => (
            <div key={index}>
              {/* <FadeInBox delay={index * 0.15} key={index}> */}
              <Flex direction="column-reverse" mb={2}>
                <Box
                  as="hr"
                  bg="cyan.500"
                  h="2px"
                  w="46px"
                  my={1}
                />
                <Heading as={'h3'} fontSize={{ base: 'xl', md: '2xl' }}>
                  {/* <span style={{ fontSize: '0.6em', marginRight: '0.2em' }}>
                  {index + 1}.
                </span> */}
                  {tab.title}
                </Heading>
              </Flex>
              <Text pb={4}>
                {tab.description}
              </Text>
              {/* </FadeInBox> */}
            </div>
          ))}
        </SimpleGrid>
      </FadeInBox>
    </>
  );
}

export default devPractices;

const datax = [
  {
    locale: "en",
    text: "Our Development Process",
    description: "We are dedicated to providing support and guidance at every step of the way. Our team is here to help you achieve your goals through a thorough and transparent development process."
  },
  {
    locale: "es",
    text: "Nuestro Processo de Desarrollo",
    description: "Estamos dedicados a brindar apoyo y orientación en cada paso del camino. Nuestro equipo está aquí para ayudarlo a lograr sus objetivos a través de un proceso de desarrollo completo y transparente."
  },
]

const data = [
  {
    locale: "en",
    title: "Requirements Gathering",
    description:
      "HalfNine prioritizes gathering all necessary requirements, resources, and information to begin every project.",
  },
  {
    locale: "en",
    title: "UI/UX Design",
    description:
      "Our team uses the latest design tools to create user-friendly and visually appealing designs.",
  },
  {
    locale: "en",
    title: "Prototype",
    description:
      "We develop a prototype that is sent for further development once the design is complete.",
  },
  {
    locale: "en",
    title: "Development",
    description:
      "Using the latest tools and technologies, we develop mobile applications, web solutions, and blockchain technology with transparency.",
  },
  {
    locale: "en",
    title: "Quality Assurance",
    description:
      "HalfNine values quality and provides 100% bug-free applications with no compromises.",
  },
  {
    locale: "en",
    title: "Deployment",
    description:
      "After trial and following all processes, your app is ready to launch on the App Store or Play Store.",
  },
  {
    locale: "en",
    title: "Support & Maintenance",
    description:
      "Our team offers all the necessary support, and we are always available to answer any queries after deployment.",
  },



  {
    locale: "es",
    title: "Recolección de requisitos",
    description:
      "HalfNine da prioridad a la recopilación de todos los requisitos, recursos e información necesarios para comenzar cada proyecto.",
  },
  {
    locale: "es",
    title: "Diseño de UI/UX",
    description:
      "Nuestro equipo utiliza las últimas herramientas de diseño para crear diseños amigables y atractivos visualmente.",
  },
  {
    locale: "es",
    title: "Prototipo",
    description:
      "Desarrollamos un prototipo que se envía para su desarrollo una vez que se completa el diseño.",
  },
  {
    locale: "es",
    title: "Desarrollo",
    description:
      "Utilizando las últimas herramientas y tecnologías, desarrollamos aplicaciones móviles, soluciones web y tecnología blockchain con transparencia.",
  },
  {
    locale: "es",
    title: "Seguro de calidad",
    description:
      "HalfNine valora la calidad y proporciona aplicaciones sin errores al 100% sin compromisos.",
  },
  {
    locale: "es",
    title: "Despliegue",
    description:
      "Después de la prueba y siguiendo todos los procesos, su aplicación está lista para ser lanzada en la App Store o Play Store.",
  },
  {
    locale: "es",
    title: "Soporte y mantenimiento",
    description:
      "Nuestro equipo ofrece todo el soporte necesario, y siempre estamos disponibles para responder cualquier consulta después del despliegue.",
  },

];