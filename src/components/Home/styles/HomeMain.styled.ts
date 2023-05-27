import styled from "styled-components";
import bg from "../../../../public/tv-main.jpg";
import Container from "@/components/common/styles/Container.styled";
import Section from "@/components/common/styles/Section.styled";

export const HomeMainContainer = styled(Container)`
  min-height: 500px;

  background-image: url(${bg.src});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;

  display: flex;
  align-items: center;
`;

export const TextBlock = styled.div`
  width: 50%;
`;

export const Header = styled.h2`
  text-align: center;
`;

export const Text = styled.p`
  margin-top: 20px;
  line-height: 1.5;
  text-align: justify;
`;
