import styled from "styled-components";
import MaskedInput from "react-text-mask";

export const DivInput = styled.div`
  display: flex;
  height: 60px;
  border: 1px solid var(--color-grey-primary-darker);
  box-sizing: border-box;
  padding: 0px 20px;
  border-radius: 4px;
  border-radius: 4px;
  text-align: center;
  align-items: center;
  display: flex;
`;

export const StyledTextField = styled(MaskedInput)`
  text-align: center;
::placeholder{
  font-size:16px;
  font-weight:500px;
  color:var(--color-grey-secondary-lighter);
  line-height:16px;
}
  align-items: center;
  display: flex;
  border: none;
  border-radius: 4px;
`;
