import styled from "styled-components";
import Section from "@/components/common/styles/Section.styled";
import { COLORS } from "@/theme";

export const BrandSection = styled(Section)`
  min-height: calc(100vh - 200px);
`;

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
`;

export const BrandList = styled.ul`
  padding: 0 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const BrandItem = styled.li`
  padding: 10px;
  border: 1px solid ${COLORS.white};
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
`;
