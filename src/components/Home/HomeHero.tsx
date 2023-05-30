import { useRouter } from "next/router";
import { useMedia } from "react-use";
import Phone from "../Header/Phone";
import * as Styled from "./styles/HomeHero.styled";
import AboutList from "../AboutPage/AboutList";
import { MEDIA } from "@/theme";
export default function HomeHero() {
  const { locale } = useRouter();
  const isLaptop = useMedia(MEDIA.laptop);
  return (
    <Styled.HomeHeroSection>
      <Styled.HomeHeroContainer>
        <Styled.Title>
          {locale === "ua"
            ? "Ремонт телевізорів в Києві"
            : "Ремонт телевизоров в Киеве"}
        </Styled.Title>
        <p>
          {locale === "ua"
            ? "Якісний та швидкий ремонт телевізорів будь якої моделі у Києві"
            : "Качественный и быстрый ремонт телевизоров любой модели в Киеве"}
        </p>
        <Styled.MasterCall>
          <p>{locale === "ua" ? "Виклик майстра:" : "Вызов мастера:"}</p>
          <Phone iconSize={isLaptop ? 40 : undefined} />
        </Styled.MasterCall>
        <AboutList />
      </Styled.HomeHeroContainer>
    </Styled.HomeHeroSection>
  );
}
