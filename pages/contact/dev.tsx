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


const Dev = () => {
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
                                        <InputLeftAddon  >
                                            <InfoIcon name='info' />
                                        </InputLeftAddon>
                                        <Input type={'name'} placeholder={'First Name'} aria-label={'Name'} />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired>
                                    <InputGroup>
                                        <InputLeftAddon >
                                            <InfoIcon name='info' />
                                        </InputLeftAddon>
                                        <Input type={'name'} placeholder={'Last Name'} aria-label={'Last Name'} />
                                    </InputGroup>
                                </FormControl>
                                <Divider />
                                <FormControl isRequired>
                                    <InputGroup>
                                        <InputLeftAddon >
                                            <EmailIcon name='email' />
                                        </InputLeftAddon>
                                        <Input type={'email'} placeholder={'Email'} aria-label={'Email'} />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired>
                                    <InputGroup>
                                        <InputLeftAddon >
                                            <LockIcon name='lock' />
                                        </InputLeftAddon>
                                        <Input type={'password'} placeholder={'Password'} aria-label={'Password'} />
                                    </InputGroup>
                                </FormControl>
                                <Divider />
                                <Button type='submit' _hover={{ boxShadow: "md" }} >
                                    Sign up
                                </Button>
                            </Stack>
                        </form>

                    </Box>
                </Flex>
            </Container >
        </>
    )
}

export default Dev
