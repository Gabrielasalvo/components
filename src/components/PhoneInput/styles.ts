import styled from "styled-components";
import MaskedInput from "react-text-mask";

export const DivInput = styled.div`
  width: 300px;
`;
export const StyledTextField = styled(MaskedInput)`
text-align:center;
  height: 32px;
  left: 0%;
  right: 0%;
  top: 24px;
  align-items: center;
  display: flex;
  border: 1px solid var(--color-blue-primary-dark);
  background: #ffffff;
  border-radius: 4px;
  display: inline-block;

}

`;
