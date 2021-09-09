import { mask } from 'remask'

export const whatsapp = number => {
  return mask(number, ['99 9.9999-9999'])
}
