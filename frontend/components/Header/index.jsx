import { Box, Flex, Heading } from '@chakra-ui/layout'
import { propNames } from '@chakra-ui/styled-system'
import { FaExclamationCircle } from 'react-icons/fa'

const Header = props => {
  return props.title ? (
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
          {props.title}
        </Heading>
      </Flex>
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
