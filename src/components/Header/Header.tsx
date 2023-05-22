import React from "react";
import Container from "@/styles/container.styled";
import Logo from "../common/Logo";
import Phone from "./Phone";
import * as Styled from "./styles/Header.styled";
import WorkHours from "./WorkHours";
import ChangeLocale from "./ChangeLocale";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <Styled.Header>
      <Styled.HeaderContainer>
        <Styled.HeaderContant>
          <Logo />
          <Phone />
          <WorkHours />
          <ChangeLocale />
        </Styled.HeaderContant>
        <Navigation />
      </Styled.HeaderContainer>
    </Styled.Header>
  );
}
