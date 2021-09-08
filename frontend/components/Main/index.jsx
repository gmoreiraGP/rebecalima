import { Flex } from '@chakra-ui/layout'

const Main = ({ children }) => {
  return (
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      h='100%'
      w='100%'
    >
      {children}
    </Flex>
  )
}
export default Main
