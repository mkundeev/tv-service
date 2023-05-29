import Container from "@/components/common/styles/Container.styled";
import { COLORS } from "@/theme";
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

export const Email = styled.a`
  display: block;
  margin-top: 5px;
`;
