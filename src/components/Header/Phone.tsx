import { COLORS } from "@/theme";
import React from "react";
import { HiPhone } from "react-icons/hi";
import * as Styled from "./styles/Phone.styled";

type IProps = {
  iconSize?: number;
};
export default function Phone({ iconSize }: IProps) {
  return (
    <Styled.PhoneContainer>
      <HiPhone color={COLORS.primary} size={iconSize || 24} />
      <Styled.PhoneList>
        <li>
          <a href="tel:+380442337508">+38 (044) 233-75-08</a>
        </li>
        <li>
          <a href="tel:+380509747722">+38 (050) 974-77-22</a>
        </li>
        <li>
          <a href="tel:+380676593905">+38 (067) 659-39-05</a>
        </li>
        <li>
          <a href="tel:+380632337508">+38 (063) 233-75-08</a>
        </li>
      </Styled.PhoneList>
    </Styled.PhoneContainer>
  );
}
