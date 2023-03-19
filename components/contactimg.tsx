import { Box, Button, Flex, Link, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdOutlineContacts } from "react-icons/md";

interface NavItem {
  locale: string;
  label: string;
  button: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    locale: "en",
    label: 'Take your business to the Next Level with Us',
    button: 'Talk with us!',
  },
  {
    locale: "es",
    label: 'Lleve su negocio al siguiente nivel con nosotros',
    button: 'Contáctanos!',
  },
]

const Contactimg = (children: any) => {
  const { locale } = useRouter();
  const { label, button } = NAV_ITEMS.find(p => p.locale === locale)!;

  return (
    <Flex direction="column" mt={6} w="full" /*maxH={80} */ height={'80'} rounded="xl" overflow="hidden">
      <Image src={children.pexelsrc} w="full" alt="Background Image" height={'80'} objectFit="cover" />
      <Box position="relative">
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          bg="blackAlpha.600"
          height={16}
          width="full"
          display="flex"
          alignItems="center"
          px={{ base: 2, md: 6 }}
          justifyContent="space-between"
        >
          <Text
            display="inline-block"
            fontWeight="bold"
            fontSize={{ base: "md", md: "xl", lg: "2xl", xl: "3xl" }}
            color="white"
            opacity={1}
            as="h1"
          >
            {children.label}
          </Text>
          <Link href="/contact">
            <Button rightIcon={<MdOutlineContacts size={20} />} >
              {button}
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}

export default Contactimg;
