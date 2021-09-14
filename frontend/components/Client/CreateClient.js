// import React from 'react'
import { useForm } from 'react-hook-form'
import { ModalFooter } from '@chakra-ui/modal'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
} from '@chakra-ui/react'
import { MdAccountBox, MdEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import { mask as masker, unMask } from 'remask'

function CreateClient() {
  function handleCreateClient(values) {
    return new Promise(resolve => {
      console.log('create client', values)
      resolve()
    })
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  return (
    <form onSubmit={handleSubmit(handleCreateClient)}>
      <FormControl>
        <FormLabel htmlFor='name'>Nome</FormLabel>
        <InputGroup>
          <InputLeftAddon children={<MdAccountBox />} />
          <Input
            {...register('name', {
              required: 'O nome é necessário',
            })}
            type='text'
            id='name'
            size='md'
            variant='filled'
          />
        </InputGroup>
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor='email'>Email</FormLabel>
        <InputGroup>
          <InputLeftAddon children={<MdEmail />} />
          <Input
            {...register('email', {
              required: 'O email é necessário',
            })}
            type='email'
            id='email'
            size='md'
            variant='filled'
          />
        </InputGroup>
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor='whatsapp'>Nome</FormLabel>
        <InputGroup>
          <InputLeftAddon children={<FaWhatsapp />} />
          <Input
            {...register('whatsapp', {
              required: 'O nome é necessário',
            })}
            placeholder='Digite o número sem espaços, ponto ou traços'
            type='text'
            id='whatsapp'
            size='md'
            variant='filled'
          />
        </InputGroup>
        <FormErrorMessage>
          {errors.whatsapp && errors.whatsapp.message}
        </FormErrorMessage>
      </FormControl>

      <ModalFooter>
        <Button
          variant='solid'
          colorScheme='tan'
          isLoading={isSubmitting}
          loadingText='Cadastrando...'
          type='submit'
        >
          Criar cliente
        </Button>
      </ModalFooter>
    </form>
  )
}
export default CreateClient
