import { useState, useEffect } from "react";
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
  const [tablet, setTablet] = useState(false);
  const [laptop, setLaptop] = useState(false);

  useEffect(() => {
    setTablet(isTablet);
    setLaptop(isLaptop);
  }, []);

  return (
    <>
      <Styled.Header>
        {!tablet ? (
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
                {!laptop ? <Phone /> : null}
              </Styled.MobileWrap>
              <Navigation />
            </div>
            {laptop ? <Phone /> : null}
            <WorkHours />
            <ChangeLocale />
          </Styled.HeaderContainer>
        )}
      </Styled.Header>
      <div style={{ height: "100px" }}></div>
    </>
  );
}
