import { useRouter } from "next/router";
import Phone from "../Header/Phone";
import * as Styled from "./styles/HomeHero.styled";
export default function HomeHero() {
  const { locale } = useRouter();
  return (
    <Styled.HomeHeroSection>
      <Styled.HomeHeroContainer>
        <Styled.Title>
          {locale === "ua"
            ? "Ремонт телевізорів в Києві"
            : "Ремонт телевизоров в Киеве"}
        </Styled.Title>
        <Styled.TextContainer>
          <p>
            {locale === "ua"
              ? "Якісний та швидкий ремонт телевізорів будь якої моделі у Києві"
              : "Качественный и быстрый ремонт телевизоров любой модели в Киеве"}
          </p>
          <p>{locale === "ua" ? "Виклик майстра:" : "Вызов мастера:"}</p>
          <Phone iconSize={40} />
        </Styled.TextContainer>
      </Styled.HomeHeroContainer>
    </Styled.HomeHeroSection>
  );
}
