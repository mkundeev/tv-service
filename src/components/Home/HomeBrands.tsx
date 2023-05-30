import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useMedia } from "react-use";
import * as Styled from "./styles/HomeBrands.styled";
import * as Icons from "@/svg";
import { COLORS, MEDIA } from "@/theme";

export default function HomeBrands() {
  const { locale } = useRouter();
  const [labelSize, setLabelSize] = useState(30);
  const isLaptop = useMedia(MEDIA.laptop);
  useEffect(() => {
    setLabelSize(isLaptop ? 50 : 30);
  }, []);

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
              <Element fill={COLORS.primary} height={labelSize} />
            </li>
          ))}
        </Styled.BrandsList>
      </Styled.HomeBrandsContainer>
    </Styled.HomeBrandsSection>
  );
}
