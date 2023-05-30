import styled from "styled-components";
import Container from "@/components/common/styles/Container.styled";
import Section from "@/components/common/styles/Section.styled";
import bg from "../../../../public/bcg-brands.jpg";
import { SIZE } from "@/theme";

export const HomeBrandsSection = styled(Section)`
  background-image: url(${bg.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: top;
`;

export const HomeBrandsContainer = styled(Container)`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: ${SIZE.l};
  text-align: center;
`;
export const BrandsList = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
