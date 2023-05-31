import { useRouter } from "next/router";
import Container from "../common/styles/Container.styled";
import Section from "../common/styles/Section.styled";
import * as Icons from "@/svg";
import { COLORS } from "@/theme";
import * as Styled from "./styles/BrandsPage.styled";

export default function BrandsPage() {
  const { locale } = useRouter();
  return (
    <Section $screenHeight={true}>
      <Container>
        <Styled.Title>
          {locale === "ua"
            ? "Ремонт телевізорів наступних марок у Києві:"
            : "Ремонт телевизоров следующих марок в Киеве:"}
        </Styled.Title>
        <Styled.BrandList>
          {Object.values(Icons).map((Element, index) => (
            <Styled.BrandItem key={index}>
              <Element fill={COLORS.accent} />
            </Styled.BrandItem>
          ))}
        </Styled.BrandList>
      </Container>
    </Section>
  );
}
