import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'

const Modal = ({
  isOpen,
  onClose,
  modalTitle,
  modalForm,
  modalContent,
  modalAction,
  modalActionContent,
}) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton _focus={{ boxShadow: 'none' }} />
        {modalForm ? (
          <ModalBody>{modalContent}</ModalBody>
        ) : (
          <>
            <ModalBody>{modalContent}</ModalBody>
            <ModalFooter>
              <Button variant='solid' colorScheme='tan' onClick={modalAction}>
                {modalActionContent}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal
