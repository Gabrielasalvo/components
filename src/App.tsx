import React from "react";
import DefaultButton from "./components/Button";
import TelegramIcon from '@material-ui/icons/Telegram';

import {
  Container,
  Header,
  DivButton,
  DivPhoneInput,
  DivCtaButton,
  DivFooter,
} from "./styles";
import { PhoneInput} from "./components/PhoneInput";
import { PhoneInputMask } from "./components/PhoneInput/PhoneInputMask";

function App() {
  return (
    <Container>
      <Header>Header</Header>
      <DivButton>
        <DefaultButton icon={<TelegramIcon/>}title="cta button" />
      </DivButton>
      <DivPhoneInput>

        
        <PhoneInput length={11}title={""}/>

        </DivPhoneInput>
      <DivCtaButton>
      
      </DivCtaButton>
      <DivFooter/>
    </Container>
  );
}

export default App;
