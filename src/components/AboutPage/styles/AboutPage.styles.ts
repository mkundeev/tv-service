import styled from "styled-components";
import Section from "@/components/common/styles/Section.styled";
import Container from "@/components/common/styles/Container.styled";
import bg from "@/../public/hero.jpg";
import { SIZE } from "@/theme";

export const AboutSection = styled(Section)`
  background-image: url(${bg.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: bottom;
`;

export const AboutContainer = styled(Container)`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: ${SIZE.xl};
  text-align: center;
  margin-bottom: 20px;
`;

export const AboutItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 20px;
  }
  p {
    font-size: ${SIZE.m};
  }
`;
