import { Flex, Grid } from '@chakra-ui/layout'
import Sidebar from '@/components/Sidebar'
import Main from '@/components/Main'
import Header from '@/components/Header'

const Layout = ({
  children,
  title,
  add,
  modalTitle,
  modalContent,
  modalAction,
  modalActionContent,
}) => {
  return (
    <Grid
      templateRows='1fr'
      templateColumns='1fr 4fr'
      templateAreas="
              'sidebar main'
          "
      h='100vh'
      justifyContent='center'
      alignItems='center'
    >
      <Sidebar />
      <Main>
        <Header
          title={title}
          add={add}
          modalContent={modalContent}
          modalAction={modalAction}
          modalTitle={modalTitle}
          modalActionContent={modalActionContent}
        />
        <Flex flex='1' justifyContent='center' alignItems='center' w='100%'>
          {children}
        </Flex>
      </Main>
    </Grid>
  )
}

export default Layout
