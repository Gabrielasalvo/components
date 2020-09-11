import React from "react";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";
import { PhoneTypes } from "./PhoneInputTypes";
import { PhoneInputMask } from "./PhoneInputMask";

export const PhoneInput: React.FC<PhoneTypes> = (props) => {
  return (
    <div>
      {props.title}
      <ReactFlagsSelect defaultCountry="BR" showSelectedLabel={false} />
      <PhoneInputMask/>
      
    </div>
  );
};

export default PhoneInput;
