import React from 'react'
import MaskedInput from 'react-text-mask'


export const PhoneInputMask =() => (
    <MaskedInput
    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    className="form-control"
    placeholder="Enter a phone number"
    guide={false}
    id="my-input-id"
    onBlur={() => {}}
    onChange={() => {}}
  />
)
