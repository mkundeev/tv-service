import { useRouter } from "next/router";
import Phone from "../Header/Phone";
import * as Styled from "./styles/HomeHero.styled";
import { ImageContainer } from "../common/styles/ImageContainer.styled";
import AboutList from "../AboutPage/AboutList";
import bg from "@/../public/hero1.jpg";
import Image from "next/image";
export default function HomeHero() {
  const { locale } = useRouter();
  return (
    <Styled.HomeHeroSection>
      <ImageContainer>
        <Image
          src={bg}
          alt={locale === "ua" ? "Ремонт телевізорів" : "Ремонт телевизоров"}
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="100vh"
        />
      </ImageContainer>
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
          <Phone />
        </Styled.MasterCall>
        <AboutList />
      </Styled.HomeHeroContainer>
    </Styled.HomeHeroSection>
  );
}
