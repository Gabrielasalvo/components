import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "button phone cta"
    "footer footer footer";
  grid-template-rows: 50px 60vh 200px;
  overflow: hidden;
`;

export const Header = styled.div`
  border-bottom: 1px solid var(--color-grey-primary-dark);
  text-align: center;
  grid-area: header;
`;

export const DivButton = styled.div`
  margin: 0 auto;
  grid-area: button;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DivPhoneInput = styled.div`
  border-left: 1px solid var(--color-grey-primary-dark);
  grid-area: phone;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivCtaButton = styled.div`
  border-left: 1px solid var(--color-grey-primary-dark);
  background-color: green;
  grid-area: cta;
`;

export const DivFooter = styled.div`
  border-top: 1px solid var(--color-grey-primary-dark);
  grid-area: footer;
`;
