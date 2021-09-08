import { useEffect, useState } from 'react'
import { withRouter } from 'next/router'
import Layout from '@/components/Layout'
import { useToast } from '@chakra-ui/react'
import { Flex, Heading, Link } from '@chakra-ui/layout'
import { Table, Th, Thead, Tr, Tbody, Td, TableCaption } from '@chakra-ui/table'
import { FaEye } from 'react-icons/fa'
import directus from '@/lib/directus'

function Clientes() {
  const [clients, setClients] = useState([])
  const error = useToast()

  useEffect(async () => {
    await directus
      .items('clients')
      .readMany()
      .then(response => {
        setClients(response.data)
      })
      .catch(err => {
        error({
          description: `${err}`,
          status: 'error',
        })
      })
  }, [])

  return (
    <Layout title='Clientes'>
      <Flex alignSelf='flex-start' w='100%' p={4}>
        <Table size='lg' colorScheme='blackAlpha' variant='striped'>
          <TableCaption placement='top'>
            <Heading as='h2' size='lg'>
              Todos os clientes
            </Heading>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th>WhatsApp</Th>
              <Th>Ver</Th>
            </Tr>
          </Thead>
          <Tbody>
            {clients.map(({ id, name, url }) => {
              return (
                <Tr key={id}>
                  <Td>{name}</Td>
                  <Td>{url}</Td>
                  <Td>
                    <a href='https://api.whatsapp.com/send?phone=5511947315901'>
                      (11) 9.4731-5901
                    </a>
                  </Td>
                  <Td>
                    <Link href={`/dashboard/clientes/${id}`}>
                      <FaEye size={25} />
                    </Link>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </Flex>
    </Layout>
  )
}

export default withRouter(Clientes)
