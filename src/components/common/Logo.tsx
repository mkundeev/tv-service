import React from "react";
import { FaDesktop } from "react-icons/fa";
import { COLORS } from "@/theme";
import * as Styled from "./styles/Logo.styled";

export default function Logo() {
  return (
    <Styled.LogoWrap>
      <FaDesktop color={COLORS.primary} size={32} />
      <Styled.LogoText>TV-service</Styled.LogoText>
    </Styled.LogoWrap>
  );
}
