import { COLORS } from "@/theme";
import React from "react";
import { BsClock } from "react-icons/bs";
import * as Styled from "./styles/WorkHours.styled";
import { useRouter } from "next/router";

export default function WorkHours() {
  const { locale } = useRouter();
  return (
    <Styled.WorkHoursContainer>
      <BsClock color={COLORS.primary} size={24} />
      <div>
        <p>{locale === "ua" ? "Графік роботи" : "График работы"} </p>
        <Styled.WorkHoursText>ПН–СБ: 8:00–20:00</Styled.WorkHoursText>
      </div>
    </Styled.WorkHoursContainer>
  );
}