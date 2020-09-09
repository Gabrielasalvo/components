import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "button phone cta"
    "footer footer footer";
  grid-template-rows: 50px 650vh 50px;
`;

export const Header = styled.div`
  background-color: red;
  grid-area: header;
`;

export const DivButton = styled.div`
margin:0 auto;
  grid-area: button;

`;
export const DivPhoneInput = styled.div`
  background-color: yellow;
  grid-area: phone;
`;

export const DivCtaButton = styled.div`
  background-color: green;
  grid-area: cta;
`;

export const DivFooter = styled.div`
  background-color: purple;
  grid-area: footer;
`;

