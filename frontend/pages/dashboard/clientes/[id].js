import { withRouter } from 'next/router'
import Layout from '@/components/Layout'
import { Flex, VStack, StackDivider, Link } from '@chakra-ui/layout'
import { clients } from '@/lib/directus'
import { Checkbox } from '@chakra-ui/checkbox'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { Button } from '@chakra-ui/button'
import { whatsapp } from '@/lib/mask'

function Client({ props }) {
  const { client } = props
  return (
    <Layout title={client.name}>
      <Flex flexDir='column' w='80%'>
        <Button w='30%' size='lg' colorScheme='tan' leftIcon={<FaWhatsapp />}>
          <Link
            _hover={{ textDecor: 'none' }}
            href={`https://api.whatsapp.com/send?phone=55${client.whatsapp}`}
          >
            {whatsapp(client.whatsapp)}
          </Link>
        </Button>
        <Button
          w='50%'
          size='lg'
          mt={4}
          colorScheme='tan'
          leftIcon={<FaEnvelope />}
        >
          <Link _hover={{ textDecor: 'none' }} href={`mailto:${client.email}`}>
            {client.email}
          </Link>
        </Button>
        {client.checklist_client.map(
          ({ id, shopping_list, menu, anamnesis }) => {
            return (
              <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                mt={4}
                align='stretch'
                key={id}
              >
                <Checkbox size='md' colorScheme='tan' value={anamnesis}>
                  Anamnese Nutricional
                </Checkbox>
                <Checkbox size='md' colorScheme='tan' value={menu}>
                  Cardápio
                </Checkbox>
                <Checkbox size='md' colorScheme='tan' value={shopping_list}>
                  Lista de compras
                </Checkbox>
              </VStack>
            )
          }
        )}
      </Flex>
    </Layout>
  )
}

Client.getInitialProps = async function (ctx) {
  const client = await clients.readOne(
    `${ctx.query.id}?fields=id,name,whatsapp,email,checklist_client.*`
  )

  return {
    props: {
      client,
    },
  }
}

export default withRouter(Client)
