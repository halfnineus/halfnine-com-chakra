import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
} from '@chakra-ui/react'

import router from 'next/router';
import { FiExternalLink } from 'react-icons/fi';


const MailModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay backdropFilter='blur(1px)' />
                <ModalContent>
                    <ModalHeader>Email us</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontWeight='bold' mb='1rem'>
                            {/* <Lorem count={2} /> */}
                            Dan Ochoa: dan@ochoa.pro
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={() => router.push("mailto:dan@ochoa.pro")} variant='ghost' rightIcon={<FiExternalLink />}>Send Mail</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    );
}

export default MailModal;