import { Box, Button, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdOutlineContacts } from "react-icons/md";

const Contactimg = (children: any) => {
    const { locale } = useRouter()
    return (
        <>
            {NAV_ITEMS.filter(p => p.locale === locale).map((navItem) => (
                <>
                    <Flex
                        w={'full'}
                        h={80}
                        backgroundImage={`https://images.pexels.com/photos/${children.pexelsrc}?auto=compress&cs=tinysrgb&fit=crop&h=320&w=1300`}
                        border={'1px'}
                        rounded={'lg'}
                        overflow={'hidden'}
                        borderColor={'gray.400'}
                    >
                        <Box placeSelf={'end'} alignItems={'center'} bg={'blackAlpha.600'} height={20} width={'full'} display={'inherit'} px={6}>
                            <Text  fontWeight={'bold'} fontSize={{base:'md',md:'xl',lg:'2xl',xl:'3xl'}} color={'white'} opacity={'1'}>
                                {children.label || navItem.label}
                            </Text>
                            <Spacer />
                            <Link href={'/contact'}>
                                <Button rightIcon={<MdOutlineContacts size={20} />}>{children.button || navItem.button}</Button>
                            </Link>
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