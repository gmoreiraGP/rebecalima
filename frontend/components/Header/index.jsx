import { Button } from '@chakra-ui/button'
import { Flex, Heading } from '@chakra-ui/layout'
import { FaExclamationCircle, FaPlusSquare } from 'react-icons/fa'

const Header = props => {
  const { title, add } = props
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
          <Button leftIcon={<FaPlusSquare />} variant='tan'>
            new
          </Button>
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
