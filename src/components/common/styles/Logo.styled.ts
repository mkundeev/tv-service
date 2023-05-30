import styled from "styled-components";
import { SIZE, MEDIA } from "@/theme";

export const LogoWrap = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`;

export const LogoText = styled.p`
  font-size: ${SIZE.m};
  margin-left: 10px;
  font-weight: 700;

  @media ${MEDIA.tablet} {
    font-size: ${SIZE.l};
  }
`;
