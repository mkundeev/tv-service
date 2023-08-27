import styled from "styled-components";
import Link from "next/link";
import { COLORS } from "@/theme";

interface LinkProps {
  $active: boolean;
}
export const LocaleLink = styled(Link)`
  color: ${({ $active }: LinkProps) =>
    $active ? COLORS.accent : COLORS.white};
  padding: 0 5px;
  :first-child {
    border-right: 1.5px solid grey;
  }
`;

export const LocaleContainer = styled.div`
  display: flex;
  align-items: center;
`;
