import styled from "styled-components";
import Container from "@/components/common/styles/Container.styled";
import { COLORS, SIZE } from "@/theme";

export const ErrorContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  height: calc(100vh - 240px);
  p {
    font-size: ${SIZE.xl};
    color: ${COLORS.accent};
  }
`;
