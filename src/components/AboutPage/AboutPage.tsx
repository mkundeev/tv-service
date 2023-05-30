import { useRouter } from "next/router";
import * as Styled from "./styles/AboutPage.styles";
import AboutList from "./AboutList";

export default function AboutPage() {
  const { locale } = useRouter();
  return (
    <Styled.AboutSection $screenHeight={true}>
      <Styled.AboutContainer>
        <Styled.Title>
          {locale === "ua" ? "Чому обирають нас" : "Почему выбирают нас"}
        </Styled.Title>
        <AboutList />
      </Styled.AboutContainer>
    </Styled.AboutSection>
  );
}
