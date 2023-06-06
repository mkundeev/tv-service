import styled from "styled-components";
import Section from "@/components/common/styles/Section.styled";
import Container from "@/components/common/styles/Container.styled";
import bg from "@/../public/hero1.jpg";
import { SIZE, MEDIA, HEIGHT } from "@/theme";

export const AboutSection = styled(Section)`
  background-image: url(${bg.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: bottom;
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
