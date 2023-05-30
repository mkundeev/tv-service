import styled from "styled-components";
import Link from "next/link";
import { COLORS, MEDIA } from "@/theme";

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
    color: ${COLORS.white};
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  a {
    font-size: 12px;
    @media ${MEDIA.tablet} {
      font-size: 14px;
    }
  }

  @media ${MEDIA.tablet} {
    margin-top: 10px;
    justify-content: left;
    gap: 10px;
  }
`;
