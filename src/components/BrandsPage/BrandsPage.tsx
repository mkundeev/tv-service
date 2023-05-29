import * as Styled from "./styles/BrandsPage.styled";
import Container from "../common/styles/Container.styled";
import Section from "../common/styles/Section.styled";
import * as Icons from "@/svg";
import { COLORS } from "@/theme";

export default function BrandsPage() {
  return (
    <Section $screenHeight={true}>
      <Container>
        <Styled.Title>Ремонт телевізорів наступних марок у Києві:</Styled.Title>
        <Styled.BrandList>
          {Object.values(Icons).map((Element, index) => (
            <Styled.BrandItem key={index}>
              <Element fill={COLORS.primary} />
            </Styled.BrandItem>
          ))}
        </Styled.BrandList>
      </Container>
    </Section>
  );
}
