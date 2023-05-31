import styled from "styled-components";
import { HiPhone } from "react-icons/hi";
import { MEDIA, COLORS } from "@/theme";

export const PhoneContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  width: fit-content;
`;
type IProps = {
  $mobHeader?: boolean;
};
export const PhoneList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 5px;
  a {
    display: block;
    font-size: ${({ $mobHeader }: IProps) => ($mobHeader ? "10px" : "14px")};
  }
`;

export const PhoneIcon = styled(HiPhone)`
  width: 24px;
  height: 24px;
  color: ${COLORS.primary};
  @media ${MEDIA.tablet} {
    width: 32px;
    height: 32px;
  }
`;
