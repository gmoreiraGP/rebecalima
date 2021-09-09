import { useEffect, useState } from 'react'
import { withRouter } from 'next/router'
import Layout from '@/components/Layout'
import { useToast } from '@chakra-ui/react'
import { Flex, Heading, Link, Stack } from '@chakra-ui/layout'
import { Alert, AlertDescription, AlertIcon } from '@chakra-ui/alert'
import { Table, Th, Thead, Tr, Tbody, Td, TableCaption } from '@chakra-ui/table'
import { FaEye } from 'react-icons/fa'
import { mask } from 'remask'
import directus from '@/lib/directus'

// const patternWhats =

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
    <Layout title='Clientes' add>
      <Flex alignSelf='flex-start' w='100%' p={4}>
        {!clients.length == 0 ? (
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
              {clients.map(({ id, name, email, whatsapp }) => {
                return (
                  <Tr key={id}>
                    <Td>{name}</Td>
                    <Td>{email}</Td>
                    <Td>
                      <a
                        href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
                      >
                        {mask(whatsapp, ['99 9.9999-9999'])}
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
        ) : (
          <Stack spacing={3}>
            <Alert status='warning' variant='left-accent'>
              <AlertIcon />
              <AlertDescription>
                Você ainda não cadastrou nenhum cliente.
              </AlertDescription>
            </Alert>
          </Stack>
        )}
      </Flex>
    </Layout>
  )
}

export default withRouter(Clientes)
