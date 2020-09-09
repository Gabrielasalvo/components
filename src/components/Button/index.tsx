import React from 'react';
import ButtonInterface from './ButtonInterface'
import { StyledButton } from './styles'



const DefaultButton: React.FC<ButtonInterface> = (props) => {
  return (
    <div> <StyledButton >{props.title}</StyledButton>
    </div>
  );
}

export default DefaultButton;