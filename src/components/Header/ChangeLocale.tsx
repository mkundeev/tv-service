import React from "react";
import * as Styled from "./styles/ChangeLocale.styled";
import { useRouter } from "next/router";

export default function ChangeLocale() {
  const { locale, pathname } = useRouter();
  return (
    <Styled.LocaleContainer>
      <Styled.LocaleLink href={pathname} locale="ua" $active={locale === "ua"}>
        UA
      </Styled.LocaleLink>
      <Styled.LocaleLink href={pathname} locale="ru" $active={locale === "ru"}>
        RU
      </Styled.LocaleLink>
    </Styled.LocaleContainer>
  );
}
