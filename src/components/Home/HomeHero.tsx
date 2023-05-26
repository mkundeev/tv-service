import * as Styled from "./styles/HomeHero.styled";
import Phone from "../Header/Phone";
export default function HomeHero() {
  return (
    <Styled.HomeHeroSection>
      <Styled.HomeHeroContainer>
        <Styled.Title>Ремонт телевізорів в Києві</Styled.Title>
        <Styled.TextContainer>
          <p>Якістний та швидкий ремонт телевізорів будь якої моделі у Києві</p>
          <p>Виклик майстра:</p>
          <Phone iconSize={40} />
        </Styled.TextContainer>
      </Styled.HomeHeroContainer>
    </Styled.HomeHeroSection>
  );
}
