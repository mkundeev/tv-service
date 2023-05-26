import styled from "styled-components";
import Container from "@/components/common/styles/Container.styled";
import { COLORS } from "@/theme";

export const HeaderContant = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${COLORS.headerBgc};
  position: fixed;
  z-index: 1;
`;
