import Router from 'next/router'
import { useForm } from 'react-hook-form'
import { FormControl, FormErrorMessage } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { Divider, Flex, Grid, Heading, Link, Text } from '@chakra-ui/layout'
import { FaPaperPlane, FaGoogle } from 'react-icons/fa'
import Input from '@/components/Input'

const fullWidth = {
  width: '100%',
}

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function handleSignIn(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(values)
        Router.push('/dashboard')
        resolve()
      }, 3000)
    })
  }

  return (
    <Grid
      columns={2}
      templateRows='1fr 2fr 1fr'
      templateColumns='1fr 2fr 2fr 1fr'
      templateAreas="
                '. . . .'
                '. cta form .'
                '. . . .'
            "
      h='100vh'
      gap={4}
      p={16}
      justifyContent='center'
      alignItems='center'
    >
      <Flex gridArea='cta' h='100%' justifyContent='center' alignItems='center'>
        <Heading>Faça seu login</Heading>
      </Flex>
      <Flex
        gridArea='form'
        w='100%'
        h='100%'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <form onSubmit={handleSubmit(handleSignIn)} style={fullWidth}>
          <FormControl isInvalid={errors.email}>
            <Input
              id='email'
              type='email'
              autoComplete='email'
              {...register('email', {
                required: 'O email é necessário',
              })}
              htmlFor='email'
              label='Email'
              placeholder='Digite seu email'
              helpertext='Digite seu email no campo acima'
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password} mb={4}>
            <Input
              id='password'
              type='password'
              autoComplete='current-password'
              {...register('password', {
                required: 'A senha é necessária',
              })}
              htmlFor='email'
              label='Senha'
              placeholder='Digite sua senha'
              helpertext='Digite sua senha no campo acima'
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Link alignSelf='flex-start' fontSize='sm' fontWeight='bold'>
            Esqueci minha senha
          </Link>
          <Button
            isFullWidth
            isLoading={isSubmitting}
            loadingText='Entrando...'
            type='submit'
            leftIcon={<FaPaperPlane />}
            h='50px'
            mt={4}
          >
            Entrar
          </Button>
        </form>

        <Text
          textAlign='center'
          alignSelf='start'
          fontSize='sm'
          color='gray.300'
          mt={6}
        >
          Não tem uma conta?{' '}
          <Link color='black' fontWeight='bold'>
            Registre-se
          </Link>
        </Text>

        <Divider m={5} />

        <Flex alignItems='center'>
          <Text fontSize='sm'>Ou entre com</Text>
          <Button h='50px' flex='1' leftIcon={<FaGoogle />} ml={6}>
            Google
          </Button>
        </Flex>
      </Flex>
    </Grid>
  )
}

export default Login
