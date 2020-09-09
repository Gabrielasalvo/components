import React from "react";
import DefaultButton from "./components/Button";

import {
  Container,
  Header,
  DivButton,
  DivPhoneInput,
  DivCtaButton,
  DivFooter,
} from "./components/styles";

function App() {
  return (
    <Container>
      <Header>Header</Header>
      <DivButton>
        {" "}
        <DefaultButton title="Botao" />
      </DivButton>
      <DivPhoneInput/>
      <DivCtaButton/>
      <DivFooter/>
    </Container>
  );
}

export default App;
