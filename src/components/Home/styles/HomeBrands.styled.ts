import styled from "styled-components";
import Container from "@/components/common/styles/Container.styled";
import Section from "@/components/common/styles/Section.styled";
import bg from "../../../../public/bcg-brands.jpg";
import { SIZE, MEDIA, HEIGHT } from "@/theme";

export const HomeBrandsSection = styled(Section)`
  background-image: url(${bg.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: top;
`;

export const HomeBrandsContainer = styled(Container)`
  min-height: ${HEIGHT.topSection};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 20px;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: ${SIZE.l};
  text-align: center;
  @media ${MEDIA.laptop} {
    font-size: ${SIZE.xl};
  }
`;
export const BrandsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  @media ${MEDIA.laptop} {
    gap: 40px;
  }
`;
