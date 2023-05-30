import { useMedia } from "react-use";
import { FaDesktop } from "react-icons/fa";
import { COLORS, MEDIA } from "@/theme";
import * as Styled from "./styles/Logo.styled";

export default function Logo() {
  const isTablet = useMedia(MEDIA.tablet);
  return (
    <Styled.LogoWrap>
      <FaDesktop color={COLORS.primary} size={isTablet ? 32 : 24} />
      <Styled.LogoText>TV-service</Styled.LogoText>
    </Styled.LogoWrap>
  );
}
