import React from "react";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";
import { PhoneTypes } from "./PhoneInputTypes";
import { PhoneInputMask } from "./PhoneInputMask";
import { DivInput } from "./styles";

export const PhoneInput: React.FC<PhoneTypes> = (props) => {
  return (
    <div>
      {props.title}
      <DivInput> 
      <ReactFlagsSelect defaultCountry="BR" showSelectedLabel={false} />
      <PhoneInputMask/>
      </DivInput>
     
      
    </div>
  );
};

export default PhoneInput;
