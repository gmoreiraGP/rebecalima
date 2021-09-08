import { Flex, Heading } from '@chakra-ui/layout'
import Navbar from '@/components/Navbar'

const Sidebar = () => {
  return (
    <Flex
      flexDir='column'
      justifyContent='space-around'
      alignItems='center'
      h='100%'
      bg='tan.500'
    >
      <Heading mt={8}>LG</Heading>
      <Navbar />
    </Flex>
  )
}

export default Sidebar
