import { useRouter } from "next/router";
import * as Styled from "./styles/AboutPage.styles";
import AboutList from "./AboutList";
import bg from "@/../public/hero1.jpg";
import { ImageContainer } from "../common/styles/ImageContainer.styled";
import Image from "next/image";

export default function AboutPage() {
  const { locale } = useRouter();
  return (
    <Styled.AboutSection $screenHeight={true}>
      <ImageContainer>
        <Image
          src={bg}
          alt={locale === "ua" ? "Ремонт телевізорів всіх марок" : "всех марок"}
          fill
          style={{ objectFit: "cover" }}
          sizes="100vh"
        />
      </ImageContainer>
      <Styled.AboutContainer>
        <Styled.Title>
          {locale === "ua" ? "Чому обирають нас" : "Почему выбирают нас"}
        </Styled.Title>
        <AboutList />
      </Styled.AboutContainer>
    </Styled.AboutSection>
  );
}
