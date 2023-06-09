import styled from "styled-components";
import Section from "@/components/common/styles/Section.styled";
import bg from "@/../public/hero1.jpg";
import Container from "@/components/common/styles/Container.styled";
import { SIZE, MEDIA, HEIGHT } from "@/theme";

export const HomeHeroSection = styled(Section)`
  background-image: url(${bg.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: bottom;
`;

export const HomeHeroContainer = styled(Container)`
  height: 100%;
  min-height: ${HEIGHT.topSection};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  @media ${MEDIA.laptop} {
    p,
    a {
      font-size: ${SIZE.m};
    }
  }
`;

export const Title = styled.h1`
  font-size: ${SIZE.l};
  @media ${MEDIA.laptop} {
    font-size: ${SIZE.xl};
  }
  text-align: center;
`;

export const MasterCall = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media ${MEDIA.laptop} {
    flex-direction: row;
  }
`;
