import React from "react";
import TelegramIcon from "@material-ui/icons/Telegram";
import { StyledButton, ButtonProgress } from "./styles";
import ButtonTypes from "./ButtonTypes";

const DefaultButton: React.FC<ButtonTypes> = (props) => {
  const [text, setText] = React.useState("title");

  function handleClick() {
    if (text === "disable") {
      setText("title");
    } else {
      setText("loading");
      setTimeout(() => {
        setText("disable");
      }, 1000);
    }
  }

  function handleButton(title: String, icon: any) {
    switch (text) {
      case "title":
        return (
          <StyledButton {...icon} onClick={handleClick}>
            {title}
          </StyledButton>
        );

      case "loading":
        return (
          <StyledButton>
            <ButtonProgress size={20} />
          </StyledButton>
        );

      case "disable":
        return (
          <StyledButton startIcon={<TelegramIcon />} disabled>
            {title}
          </StyledButton>
        );
    }
  }
  return <div>{handleButton(props.title, props.icon)} </div>;
};

export default DefaultButton;
