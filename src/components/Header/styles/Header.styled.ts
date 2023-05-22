import styled from "styled-components";
import Container from "@/styles/container.styled";
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
  background-color: ${COLORS.headerBgc};
`;
