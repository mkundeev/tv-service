import { useRouter } from "next/router";
import { useMedia } from "react-use";
import { useState, useEffect } from "react";
import * as Styled from "./styles/Footer.styled";
import Logo from "../common/Logo";
import Phone from "../Header/Phone";
import WorkHours from "../Header/WorkHours";
import { MEDIA } from "@/theme";
export default function Footer() {
  const { locale } = useRouter();
  const isTablet = useMedia(MEDIA.tablet);
  const isLaptop = useMedia(MEDIA.laptop);
  const [tablet, setTablet] = useState(false);
  const [laptop, setLaptop] = useState(false);

  useEffect(() => {
    setTablet(isTablet);
    setLaptop(isLaptop);
  }, []);
  return (
    <Styled.FooterSection>
      <Styled.FooterContainer>
        <Logo />
        <div>
          <Styled.Address>
            {locale === "ua"
              ? "Адреса: Проспект Перемоги 60, м.Київ"
              : "Адрес: Проспект Победы 60, г.Киев"}
          </Styled.Address>
          <Styled.EmailWrap>
            <span>E-mail:</span>
            <a href="mailto: rizotv@gmail.com">rizotv@gmail.com</a>
          </Styled.EmailWrap>
        </div>
        {tablet && (
          <>
            <Phone />
            {isLaptop && <WorkHours />}
          </>
        )}
      </Styled.FooterContainer>
    </Styled.FooterSection>
  );
}
