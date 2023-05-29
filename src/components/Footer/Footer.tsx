import React from "react";
import * as Styled from "./styles/Footer.styled";
import Logo from "../common/Logo";
import Phone from "../Header/Phone";
import WorkHours from "../Header/WorkHours";
export default function Footer() {
  return (
    <Styled.FooterSection>
      <Styled.FooterContainer>
        <Logo />
        <div>
          <p>Адреса: Проспект Перемоги 60, м.Київ</p>
          <Styled.Email href="mailto: rizotv@gmail.com">
            E-mail: rizotv@gmail.com
          </Styled.Email>
        </div>
        <Phone />
        <WorkHours />
      </Styled.FooterContainer>
    </Styled.FooterSection>
  );
}
