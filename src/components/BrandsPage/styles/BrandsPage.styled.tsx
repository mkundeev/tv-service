import styled from "styled-components";
import Section from "@/components/common/styles/Section.styled";
import { COLORS, SIZE, MEDIA } from "@/theme";

export const BrandSection = styled(Section)`
  min-height: calc(100vh - 200px);
`;

export const Title = styled.h1`
  font-size: ${SIZE.l};
  text-align: center;
  margin-bottom: 20px;
  @media ${MEDIA.laptop} {
    font-size: ${SIZE.xl};
  }
`;

export const BrandList = styled.ul`
  padding: 0 20px;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media ${MEDIA.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  } */
  display: flex;
  flex-wrap: wrap;
`;

export const BrandItem = styled.li`
  width: calc(100% / 5);
  padding: 5px;
  border: 1px solid ${COLORS.white};
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  @media ${MEDIA.laptop} {
    padding: 10px;
  }
`;
