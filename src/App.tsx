import React from "react";
import DefaultButton from "./components/Button";
import TelegramIcon from "@material-ui/icons/Telegram";
import { PhoneInput } from "./components/PhoneInput";
import {Phone } from './components/PhoneInput2'
import {
  Container,
  Header,
  DivButton,
  DivPhoneInput,
  DivCtaButton,
  DivFooter,
} from "./styles";




function App() {
  return (
    <Container>
      <Header>
        <h3>Teste</h3>
      </Header>
      <DivButton>
        <DefaultButton icon={<TelegramIcon />} title="cta button" />
      </DivButton>
      <DivPhoneInput>
        <PhoneInput length={1} title="Phone Input" />
      </DivPhoneInput>
      <DivCtaButton>
        <Phone/>
     
      </DivCtaButton>
      <DivFooter />
    </Container>
  );
}

export default App;
