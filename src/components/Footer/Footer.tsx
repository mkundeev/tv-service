import { useRouter } from "next/router";
import * as Styled from "./styles/Footer.styled";
import Logo from "../common/Logo";
import Phone from "../Header/Phone";
import WorkHours from "../Header/WorkHours";
import DisplayContainer from "../common/styles/DisplayContainer";

export default function Footer() {
  const { locale } = useRouter();

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
        <DisplayContainer display="tabl&laptop">
          <Phone />
        </DisplayContainer>
        <DisplayContainer display="laptop">
          <WorkHours />
        </DisplayContainer>
      </Styled.FooterContainer>
    </Styled.FooterSection>
  );
}
