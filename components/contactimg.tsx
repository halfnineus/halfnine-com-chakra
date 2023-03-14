import { Box, Button, Flex, Link, Spacer, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdOutlineContacts } from "react-icons/md";

const Contactimg = (children: any) => {
    const { locale } = useRouter()
    return (
        <>
            {NAV_ITEMS.filter(p => p.locale === locale).map((navItem) => (
                <>
                    <Flex direction="column" mt={6} w={"full"} /* h={80} */ rounded={'xl'} overflow={'hidden'}>
                        <Box position="relative">
                            <Image src={children.pexelsrc} w={'full'} maxH={80} alt="Background Image" objectFit="cover" />
                            <Box
                                position="absolute"
                                bottom={0}
                                left={0}
                                right={0}
                                bg={"blackAlpha.600"}
                                height={16}
                                width={"full"}
                                display={"flex"}
                                alignItems="center"
                                px={{ base: 2, md: 6 }}
                                justifyContent={'space-between'}
                            >
                                <Text
                                    display="inline-block"
                                    fontWeight={'bold'}
                                    fontSize={{ base: 'md', md: 'xl', lg: '2xl', xl: '3xl' }}
                                    color={'white'}
                                    opacity={'1'}
                                    as={'h1'}
                                >
                                    {children.label || navItem.label}
                                </Text>
                                <Link href={'/contact'}>
                                    <Button rightIcon={<MdOutlineContacts size={20} />}>{children.button || navItem.button}</Button>
                                </Link>
                            </Box>
                        </Box>
                    </Flex>
                </>
            ))}
        </>
    );
}

interface NavItem {
    locale: string;
    label: string;
    button: string;
}

const NAV_ITEMS: Array<NavItem> = [
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

export default Contactimg;



// import { Box, Button, Flex, Image, Link, Spacer, Text } from "@chakra-ui/react";
// import { MdOutlineContacts } from "react-icons/md";

// const Contactimg = ({ pexelsrc: src }) => {
//   return (
//     <Flex direction="column" mt={6} w={"full"} h={80} rounded={"xl"}>
//       <Box position="relative">
//         <Image src={src} alt="Background Image" objectFit="cover" />
//         <Box
//           position="absolute"
//           bottom={0}
//           left={0}
//           right={0}
//           bg={"blackAlpha.600"}
//           height={16}
//           width={"full"}
//           display={"flex"}
//           alignItems="center"
//           px={6}
//         >
//           <Text
//             fontWeight={"bold"}
//             fontSize={{ base: "md", md: "xl", lg: "2xl", xl: "3xl" }}
//             color={"white"}
//             opacity={"1"}
//           >
//             Text
//           </Text>
//           <Spacer />
//           <Link href={"/contact"}>
//             <Button rightIcon={<MdOutlineContacts size={20} />}>Button</Button>
//           </Link>
//         </Box>
//       </Box>
//     </Flex>
//   );
// };

// export default Contactimg;