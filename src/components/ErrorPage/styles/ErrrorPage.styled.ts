import styled from "styled-components";
import Container from "@/components/common/styles/Container.styled";
import { COLORS, SIZE, HEIGHT } from "@/theme";

export const ErrorContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  height: ${HEIGHT.section};
  p {
    font-size: ${SIZE.xl};
    color: ${COLORS.accent};
  }
`;
