import { Button } from '@chakra-ui/button'
import { Flex, Heading } from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/hooks'
import { FaExclamationCircle, FaPlusSquare } from 'react-icons/fa'
import Modal from '@/components/Modal'

const Header = props => {
  const {
    title,
    add,
    modalTitle,
    modalContent,
    modalAction,
    modalActionContent,
  } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  return title ? (
    <Flex
      h='100px'
      w='100%'
      justifyContent='space-between'
      alignItems='center'
      p={4}
      bg='tan.100'
      color='white'
    >
      <Flex
        justifyContent='center'
        alignItems='center'
        flexDirection='row'
        padding={2}
      >
        <FaExclamationCircle size={25} />
        <Heading as='h1' ml={4}>
          {title}
        </Heading>
      </Flex>
      {add && (
        <Flex>
          <Button onClick={onOpen} variant='tan' _focus={{ boxShadow: 'none' }}>
            <FaPlusSquare size={30} />
          </Button>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            modalForm={true}
            modalTitle={modalTitle}
            modalContent={modalContent}
            modalAction={modalAction}
            modalActionContent={modalActionContent}
          />
        </Flex>
      )}
    </Flex>
  ) : (
    <Flex
      h='100px'
      w='100%'
      alignItems='center'
      alignSelf='start'
      p={4}
      bg='tan.100'
      color='white'
    >
      <Flex
        justifyContent='center'
        alignItems='center'
        flexDirection='row'
        padding={2}
      >
        <FaExclamationCircle size={25} />
        <Heading as='h1' ml={4}>
          Dashboard
        </Heading>
      </Flex>
    </Flex>
  )
}

export default Header
