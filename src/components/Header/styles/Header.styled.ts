import styled from "styled-components";
import Container from "@/components/common/styles/Container.styled";
import { COLORS, MEDIA, HEIGHT } from "@/theme";

export const HeaderContainer = styled(Container)`
  height: 100%;
  display: flex;
  min-width: 382px;
  flex-direction: column;
  justify-content: space-around;
`;

export const HeaderContainerMobile = styled(HeaderContainer)`
  @media ${MEDIA.tablet} {
    display: none;
  }
`;

export const HeaderContainerTablet = styled(HeaderContainer)`
  display: none;
  @media ${MEDIA.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: ${HEIGHT.header};
  background-color: ${COLORS.headerBgc};
  position: fixed;
  z-index: 1;
`;

export const HeaderFiller = styled.div`
  height: ${HEIGHT.header};
`;

export const MobileWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
