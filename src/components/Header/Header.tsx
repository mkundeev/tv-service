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
  const isLaptop = useMedia(MEDIA.laptop);
  return (
    <>
      <Styled.Header>
        {!isTablet ? (
          <Styled.HeaderContainer>
            <Styled.MobileWrap>
              <Logo />
              <Phone $mobHeader={true} />
            </Styled.MobileWrap>
            <Styled.MobileWrap>
              <Navigation />
              <ChangeLocale />
            </Styled.MobileWrap>
          </Styled.HeaderContainer>
        ) : (
          <Styled.HeaderContainer>
            <div>
              <Styled.MobileWrap>
                <Logo />
                {!isLaptop && <Phone />}
              </Styled.MobileWrap>
              <Navigation />
            </div>
            {isLaptop && <Phone />}
            <WorkHours />
            <ChangeLocale />
          </Styled.HeaderContainer>
        )}
      </Styled.Header>
      <div style={{ height: "100px" }}></div>
    </>
  );
}
