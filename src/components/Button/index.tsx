import React from "react";
import ButtonInterface from "./ButtonInterface";
import TelegramIcon from "@material-ui/icons/Telegram";
import { StyledButton, ButtonProgress } from "./styles";

const DefaultButton: React.FC<ButtonInterface> = (props) => {
  const [text, setText] = React.useState("title");

  function handleClick() {
    if (text === "disable") {
      setText("title");
    } else {
      setText("loading");
      setTimeout(() => {
        setText("disable");
      }, 2000);
    }
  }

  function handleButton(title: String) {
    switch (text) {
      case "title":
        return (
          <StyledButton startIcon={<TelegramIcon />} onClick={handleClick}>
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
  return <div>{handleButton(props.title)}</div>;
};

export default DefaultButton;
