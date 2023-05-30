import Container from "@/components/common/styles/Container.styled";
import { COLORS, MEDIA } from "@/theme";
import styled from "styled-components";

export const FooterSection = styled.footer`
  background-color: ${COLORS.headerBgc};
  height: 100px;
`;
export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const EmailWrap = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  span,
  a {
    font-size: 12px;
    @media ${MEDIA.tablet} {
      font-size: 14px;
    }
  }
`;

export const Address = styled.p`
  font-size: 12px;
  @media ${MEDIA.tablet} {
    font-size: 14px;
  }
`;
