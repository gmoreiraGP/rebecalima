import { useRouter } from 'next/router'
import { Button } from '@chakra-ui/button'
import { Flex, Link, List, ListItem } from '@chakra-ui/layout'
import { MdAccountBalanceWallet } from 'react-icons/md'
import { HiHome, HiLogout, HiBookmark } from 'react-icons/hi'

const Navbar = () => {
  const { pathname } = useRouter()

  return (
    <Flex as='nav' flex='1' flexDirection='column' w='100%'>
      <List flex='1'>
        <ListItem>
          <Button
            colorScheme='tan'
            size='lg'
            mt={4}
            isFullWidth
            borderRadius={0}
            leftIcon={<HiHome />}
            isActive={pathname === '/dashboard' ? true : false}
            _active={{
              bg: 'tan.600',
              borderLeft: '6px',
              borderColor: 'white',
              borderStyle: 'solid',
            }}
            _focus={{
              boxShadow: 'unset',
              borderLeft: '3px',
              borderColor: 'white',
              borderStyle: 'solid',
            }}
          >
            <Link
              href='/dashboard'
              _hover={{ textDecor: 'none' }}
              _focus={{
                boxShadow: 'unset',
              }}
            >
              Home
            </Link>
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant='solid'
            colorScheme='tan'
            size='lg'
            mt={4}
            isFullWidth
            borderRadius={0}
            leftIcon={<HiBookmark />}
            isActive={pathname === '/dashboard/receitas' ? true : false}
            _active={{
              bg: 'tan.600',
              borderLeft: '6px',
              borderColor: 'white',
              borderStyle: 'solid',
            }}
            _focus={{
              boxShadow: 'unset',
              borderLeft: '3px',
              borderColor: 'white',
              borderStyle: 'solid',
            }}
          >
            <Link
              href='/dashboard/receitas'
              _hover={{ textDecor: 'none' }}
              _focus={{
                boxShadow: 'unset',
              }}
            >
              Receitas
            </Link>
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant='solid'
            colorScheme='tan'
            size='lg'
            mt={4}
            isFullWidth
            borderRadius={0}
            leftIcon={<MdAccountBalanceWallet />}
            isActive={pathname === '/dashboard/clientes' ? true : false}
            _active={{
              bg: 'tan.600',
              borderLeft: '6px',
              borderColor: 'white',
              borderStyle: 'solid',
            }}
            _focus={{
              boxShadow: 'unset',
              borderLeft: '3px',
              borderColor: 'white',
              borderStyle: 'solid',
            }}
          >
            <Link
              href='/dashboard/clientes'
              _hover={{ textDecor: 'none' }}
              _focus={{
                boxShadow: 'unset',
              }}
            >
              Clientes
            </Link>
          </Button>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Button
            variant='solid'
            colorScheme='tan'
            size='lg'
            mt={4}
            isFullWidth
            borderRadius={0}
            leftIcon={<HiLogout />}
            _focus={{
              boxShadow: 'unset',
              borderLeft: '3px',
              borderColor: 'white',
              borderStyle: 'solid',
            }}
          >
            Sair
          </Button>
        </ListItem>
      </List>
    </Flex>
  )
}

export default Navbar
