import styled from "styled-components";
import Container from "@/components/common/styles/Container.styled";
import { COLORS } from "@/theme";

export const HeaderContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${COLORS.headerBgc};
  position: fixed;
  z-index: 1;
`;
