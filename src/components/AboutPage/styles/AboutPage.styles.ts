import styled from "styled-components";
import Section from "@/components/common/styles/Section.styled";
import Container from "@/components/common/styles/Container.styled";
import { SIZE, MEDIA, HEIGHT } from "@/theme";

export const AboutSection = styled(Section)`
  position: relative;
`;

export const AboutContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: ${HEIGHT.section};
`;

export const Title = styled.h2`
  font-size: ${SIZE.l};
  text-align: center;
  margin-bottom: 20px;

  @media ${MEDIA.laptop} {
    font-size: ${SIZE.xl};
  }
`;

export const AboutItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 20px;
  }
  @media ${MEDIA.laptop} {
    p {
      font-size: ${SIZE.m};
    }
  }
`;
