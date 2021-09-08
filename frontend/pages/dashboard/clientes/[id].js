import { useCallback, useEffect, useState } from 'react'
import { useRouter, withRouter } from 'next/router'
import Layout from '@/components/Layout'
import { Flex } from '@chakra-ui/layout'
import { useToast } from '@chakra-ui/react'
import directus from '@/lib/directus'

function Client({ props }) {
  return (
    <Layout title={props.client.name}>
      <Flex>{props.client.name}</Flex>
    </Layout>
  )
}

Client.getInitialProps = async function (ctx) {
  const client = await directus.items('clients').readOne(ctx.query.id)
  return {
    props: {
      client,
    },
  }
}

export default withRouter(Client)
