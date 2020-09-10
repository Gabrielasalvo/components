import styled from "styled-components";
import Button from "@material-ui/core/Button";
import '../../styles/global.css';
import './styles'
import CircularProgress from "@material-ui/core/CircularProgress";

export const ButtonProgress = styled(CircularProgress)`
  margin: 0 auto;
`;

export const StyledButton = styled(Button)`
  &&.MuiButtonBase-root {
    background-color: var(--color-blue-secondary-light);
    color: white;
    width: 133px;
    height: 32px;
    margin-top:25px;
  }

  &&.MuiButtonBase-root:hover {
    background-color: var(--color-blue-secondary-lighter);
  }
  &:focus {
    background-color: var(--color-blue-secondary-dark);
  }
  &&.MuiButtonBase-root:disabled {
    background-color:var(--color-grey-disabled);
    color: var(--color-grey-secondary-lighter);
  }
  
`;
