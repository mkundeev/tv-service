import styled from "styled-components";
import Container from "@/components/common/styles/Container.styled";
import { COLORS, MEDIA } from "@/theme";

const HIGHT = `100px`;

export const HeaderContainer = styled(Container)`
  height: 100%;
  display: flex;
  min-width: 382px;
  flex-direction: column;
  justify-content: space-around;
  @media ${MEDIA.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
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

export const MobileWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
