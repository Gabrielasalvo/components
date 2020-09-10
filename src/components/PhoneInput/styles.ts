import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import MaskedInput from "react-text-mask";



export const DivInput = styled.div `
width:300px;


`
export const StyledTextField = styled(MaskedInput)`
  height: 32px;
  left: 0%;
  right: 0%;
  top: 24px;
  align-items: center;
  display: flex;
  border: 1px solid var(--color-blue-primary-dark);
  outline: hidden;
  background: #ffffff;
  border-radius: 4px;
  display:inline-block;
`;
