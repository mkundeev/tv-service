import { COLORS } from "@/theme";
import styled from "styled-components";
import bg from "../../../../public/tv.png";
import Container from "@/styles/container.styled";

export const Section = styled.section`
  height: 100vh;
  background-color: ${COLORS.black};
`;
export const TextBlock = styled.div`
  width: 50%;
`;

export const HomeMainContainer = styled(Container)`
  height: 100%;
  background-image: url(${bg.src});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: 10px;
`;
