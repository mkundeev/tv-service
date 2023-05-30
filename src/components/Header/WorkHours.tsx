import { COLORS } from "@/theme";
import React from "react";
import * as Styled from "./styles/WorkHours.styled";
import { useRouter } from "next/router";

export default function WorkHours() {
  const { locale } = useRouter();
  return (
    <Styled.WorkHoursContainer>
      <Styled.ClockIcon color={COLORS.primary} />
      <div>
        <p>{locale === "ua" ? "Графік роботи" : "График работы"} </p>
        <Styled.WorkHoursText>ПН–СБ: 8:00–20:00</Styled.WorkHoursText>
      </div>
    </Styled.WorkHoursContainer>
  );
}
