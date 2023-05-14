import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Heading,
} from '@chakra-ui/react';
import { ReactNode, useEffect, useState } from 'react';
import { BsPiggyBank } from 'react-icons/bs';
import { TbTargetArrow } from 'react-icons/tb';
import { GiSpeedometer } from 'react-icons/gi';
import { useRouter } from 'next/router';

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, icon } = props;
  const [percentage, setPercentage] = useState(0);
  const targetPercentage = parseInt(props.stat);

  useEffect(() => {
    const intervalDuration = 1000 / targetPercentage;
    const interval = setInterval(() => {
      if (percentage < targetPercentage) {
        setPercentage((prevPercentage) => prevPercentage + 1);
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [percentage, targetPercentage]);

  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={"gray.200"}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontSize={'md'} fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber mt={-1} fontSize={"3xl"} fontWeight={"medium"}>
            {percentage}%
          </StatNumber>
        </Box>
        <Box my={"auto"} color={"gray.800"} alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}


export default function BasicStatistics() {
  const { locale } = useRouter();
  const filteredData = datax.filter((p) => p.locale === locale);
  return (
    <>
      {filteredData.map((indexData, index) => (
        <Box key={index} maxW="7xl" mx={'auto'}>
          <Flex pb={6} direction="column-reverse">
            <Box
              as="hr"
              bg="blue.500"
              h="3px"
              w="64px"
              my={1}
            />
            <Heading>{indexData.text}</Heading>
          </Flex>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 5, lg: 8 }}>
            <StatsCard
              title={indexData.b1}
              stat={'99'}
              icon={<TbTargetArrow size={'3em'} />}
            />
            <StatsCard
              title={indexData.b2}
              stat={'33'}
              icon={<BsPiggyBank size={'3em'} />}
            />
            <StatsCard
              title={indexData.b3}
              stat={'25'}
              icon={<GiSpeedometer size={'3em'} />}
            />
          </SimpleGrid>
        </Box>
      ))
      }
    </>
  );
}


const datax = [
  {
    locale: "en",
    text: "Benefits from Our Development Services",
    b1: "Less Trial and Error",
    b2: "Less Development Costs",
    b3: "Less Timeline on Updates",
  },
  {
    locale: "es",
    text: "Beneficios de Nuestros Servicios de Desarrollo",
    b1: "Menos Prueba y Error",
    b2: "Menos Costos de Desarrollo",
    b3: "Reduce Calendario de Actualizaciones",
  },
]