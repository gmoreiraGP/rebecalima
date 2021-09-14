import React from 'react'
import { Stack } from '@chakra-ui/layout'
import {
  InputGroup,
  Input as ChakraInput,
  InputLeftAddon,
  InputRightAddon,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react'

const Input = React.forwardRef((props, ref) => {
  return (
    <Stack>
      <FormLabel {...props}>{props.label}</FormLabel>
      <InputGroup>
        {props.leftIcon && (
          <InputLeftAddon children={props.leftIcon} {...props} />
        )}
        <ChakraInput size='md' variant='filled' ref={ref} {...props} />
        {props.rightIcon && (
          <InputRightAddon children={props.rightIcon} {...props} />
        )}
      </InputGroup>
      {props.helpertext && (
        <FormHelperText {...props}>{props.helpertext}</FormHelperText>
      )}
    </Stack>
  )
})

export default Input
