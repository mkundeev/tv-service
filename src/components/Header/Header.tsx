import { useMedia } from "react-use";
import Logo from "../common/Logo";
import Phone from "./Phone";
import * as Styled from "./styles/Header.styled";
import WorkHours from "./WorkHours";
import ChangeLocale from "./ChangeLocale";
import Navigation from "./Navigation";
import { MEDIA } from "@/theme";

export default function Header() {
  const isTablet = useMedia(MEDIA.tablet);
  return (
    <>
      <Styled.Header>
        {!isTablet ? (
          <Styled.HeaderContainer>
            <Styled.MobileWrap>
              <Logo />
              <ChangeLocale />
            </Styled.MobileWrap>
            <Navigation />
          </Styled.HeaderContainer>
        ) : (
          <Styled.HeaderContainer>
            <div>
              <Logo />
              <Navigation />
            </div>
            <Phone />
            <WorkHours />
            <ChangeLocale />
          </Styled.HeaderContainer>
        )}
      </Styled.Header>
      <div style={{ height: "100px" }}></div>
    </>
  );
}
