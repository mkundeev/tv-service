import { useRouter } from "next/router";
import { useMedia } from "react-use";
import * as Styled from "./styles/Footer.styled";
import Logo from "../common/Logo";
import Phone from "../Header/Phone";
import WorkHours from "../Header/WorkHours";
import { MEDIA } from "@/theme";
export default function Footer() {
  const { locale } = useRouter();
  const isTablet = useMedia(MEDIA.tablet);
  return (
    <Styled.FooterSection>
      <Styled.FooterContainer>
        <Logo />
        <div>
          <p>
            {locale === "ua"
              ? "Адреса: Проспект Перемоги 60, м.Київ"
              : "Адрес: Проспект Победы 60, г.Киев"}
          </p>
          <Styled.EmailWrap>
            <span>E-mail:</span>
            <a href="mailto: rizotv@gmail.com">rizotv@gmail.com</a>
          </Styled.EmailWrap>
        </div>
        {isTablet ? (
          <>
            <Phone />
            <WorkHours />
          </>
        ) : null}
      </Styled.FooterContainer>
    </Styled.FooterSection>
  );
}
