import React from "react";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";
import { PhoneTypes } from "./PhoneInputTypes";
import { StyledTextField } from "./styles";

export const PhoneInput: React.FC<PhoneTypes> = (props) => {
  return (
    <div>
      {props.title}

      <ReactFlagsSelect defaultCountry="BR" showSelectedLabel={false} />
      <StyledTextField />
    </div>
  );
};

export default PhoneInput;
