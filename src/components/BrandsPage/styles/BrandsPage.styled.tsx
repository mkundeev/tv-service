import styled from "styled-components";
import Section from "@/components/common/styles/Section.styled";
import { COLORS, SIZE, MEDIA, HEIGHT } from "@/theme";

export const BrandSection = styled(Section)`
  min-height: ${HEIGHT.section};
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
  display: flex;
  flex-wrap: wrap;
`;

export const BrandItem = styled.li`
  width: calc(100% / 4);
  padding: 5px;
  border: 1px solid ${COLORS.white};
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  svg {
    height: 100%;
    width: 100%;
  }
  @media ${MEDIA.tablet} {
    width: calc(100% / 5);
  }
  @media ${MEDIA.laptop} {
    padding: 10px;
  }
`;
