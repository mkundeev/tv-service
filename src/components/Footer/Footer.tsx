import { useRouter } from "next/router";
import * as Styled from "./styles/Footer.styled";
import Logo from "../common/Logo";
import Phone from "../Header/Phone";
import WorkHours from "../Header/WorkHours";
export default function Footer() {
  const { locale } = useRouter();
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
        <Phone />
        <WorkHours />
      </Styled.FooterContainer>
    </Styled.FooterSection>
  );
}
