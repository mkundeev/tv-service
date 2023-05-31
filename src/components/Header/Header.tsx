import Logo from "../common/Logo";
import Phone from "./Phone";
import * as Styled from "./styles/Header.styled";
import WorkHours from "./WorkHours";
import ChangeLocale from "./ChangeLocale";
import Navigation from "./Navigation";
import DisplayContainer from "../common/styles/DisplayContainer";

export default function Header() {
  return (
    <>
      <Styled.Header>
        {/* Mobile Header*/}
        <Styled.HeaderContainerMobile>
          <Styled.MobileWrap>
            <Logo />
            <Phone $mobHeader={true} />
          </Styled.MobileWrap>
          <Styled.MobileWrap>
            <Navigation />
            <ChangeLocale />
          </Styled.MobileWrap>
        </Styled.HeaderContainerMobile>
        {/* Tablet and LaptopHeader*/}
        <Styled.HeaderContainerTablet>
          <div>
            <Styled.MobileWrap>
              <Logo />
              <DisplayContainer display="tabl">
                <Phone />
              </DisplayContainer>
            </Styled.MobileWrap>
            <Navigation />
          </div>
          <DisplayContainer display="laptop">
            <Phone />
          </DisplayContainer>
          <WorkHours />
          <ChangeLocale />
        </Styled.HeaderContainerTablet>
      </Styled.Header>
      <div style={{ height: "100px" }}></div>
    </>
  );
}
