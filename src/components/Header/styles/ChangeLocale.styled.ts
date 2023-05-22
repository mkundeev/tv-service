import styled from "styled-components";
import Link from "next/link";
import { COLORS } from "@/theme";

interface LinkProps {
  $active: boolean;
}
export const LocaleLink = styled(Link)`
  color: ${({ $active }: LinkProps) =>
    $active ? COLORS.primary : COLORS.white};
`;

export const Divider = styled.div`
  color: ${COLORS.lightGrey};
`;

export const LocaleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
