import { COLORS } from "@/theme";
import * as Styled from "./styles/Logo.styled";

export default function Logo() {
  return (
    <Styled.LogoWrap>
      <Styled.LogoIcon color={COLORS.accent} />
      <Styled.LogoText>TV-service</Styled.LogoText>
    </Styled.LogoWrap>
  );
}
