import styled from "styled-components";
import Section from "@/components/common/styles/Section.styled";
import bg from "@/../public/hero.jpg";
import Container from "@/components/common/styles/Container.styled";

export const HomeHeroSection = styled(Section)`
  height: 100vh;
  background-image: url(${bg.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: bottom;
`;

export const HomeHeroContainer = styled(Container)`
  padding-top: 100px;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
`;

export const TextContainer = styled.div`
  width: fit-content;
  margin: 50px auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  p,
  a {
    font-size: 20px;
  }
`;
