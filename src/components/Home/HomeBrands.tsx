import React from "react";
import * as Styled from "./styles/HomeBrands.styled";
import Section from "../common/styles/Section.styled";
import * as Icons from "@/svg";
import { COLORS } from "@/theme";

export default function HomeBrands() {
  return (
    <Styled.HomeBrandsSection>
      <Styled.HomeBrandsContainer>
        <div>
          <Styled.Title>Мы ремонтируем телевизоры всех марок</Styled.Title>
          <Styled.BrandsList>
            {Object.values(Icons).map((Element, index) => (
              <li key={index}>
                <Element fill={COLORS.primary} height={50} />
              </li>
            ))}
          </Styled.BrandsList>
        </div>
      </Styled.HomeBrandsContainer>
    </Styled.HomeBrandsSection>
  );
}
