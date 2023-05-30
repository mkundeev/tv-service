import styled from "styled-components";
import { FaDesktop } from "react-icons/fa";
import { SIZE, MEDIA } from "@/theme";

export const LogoWrap = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`;

export const LogoText = styled.p`
  font-size: ${SIZE.m};
  margin-left: 8px;
  font-weight: 700;

  @media ${MEDIA.tablet} {
    font-size: ${SIZE.l};
  }
`;

export const LogoIcon = styled(FaDesktop)`
  width: 24px;
  height: 24px;
  @media ${MEDIA.tablet} {
    width: 32px;
    height: 32px;
  }
`;
