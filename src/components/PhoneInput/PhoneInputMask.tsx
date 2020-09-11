import React from 'react'
import { StyledTextField } from './styles'


export const PhoneInputMask =() => (
    <StyledTextField
    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    placeholder="(22) 0-000-0000"
    guide={false}
    onBlur={() => {}}
    onChange={() => {}}
  />
)
