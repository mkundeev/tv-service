import styled from "styled-components";
import Container from "@/components/common/styles/Container.styled";
import { COLORS } from "@/theme";

const HIGHT = `100px`;

export const HeaderContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
  width: 100%;
  height: ${HIGHT};
  background-color: ${COLORS.headerBgc};
  position: fixed;
  z-index: 1;
`;

export const HeaderFiller = styled.div`
  height: ${HIGHT};
`;
