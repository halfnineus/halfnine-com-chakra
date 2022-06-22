// This is JUST a Development File

import {
    Input,
    Container,
    Flex,
    Box,
    useColorModeValue,
    Stack,
    InputLeftAddon,
    Icon,
    InputGroup,
    Button,
    FormControl,
    Divider
} from '@chakra-ui/react'
import { EmailIcon, InfoIcon, LockIcon } from '@chakra-ui/icons'


const dev = () => {
    return (
        <>
            <Container>
                <Flex>
                    <Box
                        borderRadius='2xl'
                        m={{ sm: 4, md: 16, lg: 10 }}
                        p={{ sm: 5, md: 5, lg: 16 }}
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        boxShadow={'lg'}>
                        <form action={'submit'}>
                            <Stack spacing={'2'}>
                                <FormControl isRequired>
                                    <InputGroup>
                                        <InputLeftAddon children={<InfoIcon name='info' />} />
                                        <Input type={'name'} placeholder={'First Name'} aria-lable={'Name'} />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired>
                                    <InputGroup>
                                        <InputLeftAddon children={<InfoIcon name='info' />} />
                                        <Input type={'name'} placeholder={'Last Name'} aria-lable={'Last Name'} />
                                    </InputGroup>
                                </FormControl>
                                <Divider />
                                <FormControl isRequired>
                                    <InputGroup>
                                        <InputLeftAddon children={<EmailIcon name='email' />} />
                                        <Input type={'email'} placeholder={'Email'} aria-lable={'Email'} />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired>
                                    <InputGroup>
                                        <InputLeftAddon children={<LockIcon name='lock' />} />
                                        <Input type={'password'} placeholder={'Password'} aria-label={'Password'} />
                                    </InputGroup>
                                </FormControl>
                                <Divider />
                                <Button children={'Sign up'} type='submit' _hover={{ boxShadow: "md" }} />
                            </Stack>
                        </form>

                    </Box>
                </Flex>
            </Container >
        </>
    )
}

export default dev
