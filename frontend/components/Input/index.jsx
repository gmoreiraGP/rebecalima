import { forwardRef } from 'react'
import {
  InputGroup,
  Input as ChakraInput,
  InputLeftAddon,
  InputRightAddon,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react'

const Input = forwardRef((props, ref) => {
  return (
    <>
      <FormLabel {...props}>{props.label}</FormLabel>
      <InputGroup>
        {props.leftIcon && (
          <InputLeftAddon children={props.leftIcon} {...props} />
        )}
        <ChakraInput
          size='md'
          variant='filled'
          id={props.id}
          ref={ref}
          {...props}
        />
        {props.rightIcon && (
          <InputRightAddon children={props.rightIcon} {...props} />
        )}
      </InputGroup>
      {props.helpertext && (
        <FormHelperText {...props}>{props.helpertext}</FormHelperText>
      )}
    </>
  )
})

export default Input
