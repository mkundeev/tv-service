import styled from "styled-components";
import Link from "next/link";
import { COLORS } from "@/theme";

interface LinkProps {
  $active: boolean;
}
export const LocaleLink = styled(Link)`
  display: block;
  height: 24px;
  line-height: 24px;
  border-radius: 4px;
  padding: 0 5px;
  width: fit-content;
  background-color: ${({ $active }: LinkProps) =>
    $active ? COLORS.primary : "transparent"};
  color: ${COLORS.white};
  :hover {
    background-color: ${COLORS.primary};
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
