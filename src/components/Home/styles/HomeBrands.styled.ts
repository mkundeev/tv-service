import styled from "styled-components";
import Container from "@/components/common/styles/Container.styled";
import Section from "@/components/common/styles/Section.styled";
import bg from "../../../../public/bcg-brands.jpg";

export const HomeBrandsSection = styled(Section)`
  height: 700px;
  background-image: url(${bg.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: top;
`;

export const HomeBrandsContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 40px;
  text-align: center;
`;
export const BrandsList = styled.ul`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;
