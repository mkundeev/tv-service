import { useRouter } from "next/router";
import * as Styled from "./styles/HomeBrands.styled";
import * as Icons from "@/svg";
import { COLORS } from "@/theme";

export default function HomeBrands() {
  const { locale } = useRouter();
  return (
    <Styled.HomeBrandsSection>
      <Styled.HomeBrandsContainer>
        <Styled.Title>
          {locale === "ua"
            ? "Ми ремонтуємо телевізори всіх марок"
            : "Мы ремонтируем телевизоры всех марок"}
        </Styled.Title>
        <Styled.BrandsList>
          {Object.values(Icons).map((Element, index) => (
            <li key={index}>
              <Element fill={COLORS.primary} height={30} />
            </li>
          ))}
        </Styled.BrandsList>
      </Styled.HomeBrandsContainer>
    </Styled.HomeBrandsSection>
  );
}
