import React from "react";
import * as Styled from "./styles/Navigation.styled";
import { useRouter } from "next/router";

export default function Navigation() {
  const { pathname, locale } = useRouter();
  return (
    <nav>
      <Styled.NavigationList>
        <li>
          <Styled.LocaleLink href="/" $active={pathname === "/"}>
            {locale === "ua" ? "Головна" : "Главная"}
          </Styled.LocaleLink>
        </li>
        <li>
          <Styled.LocaleLink href="/services" $active={pathname === "/services"}>
            {locale === "ua" ? "Послуги" : "Услуги"}
          </Styled.LocaleLink>
        </li>
        <li>
          <Styled.LocaleLink href="/brands" $active={pathname === "/brands"}>
            {locale === "ua" ? "Бренди" : "Бренды"}
          </Styled.LocaleLink>
        </li>
        <li>
          <Styled.LocaleLink href="/about" $active={pathname === "/about"}>
            Про нас
          </Styled.LocaleLink>
        </li>
        <li>
          <Styled.LocaleLink href="/contacts" $active={pathname === "/contacts"}>
            {locale === "ua" ? "Контакти" : "Контакты"}
          </Styled.LocaleLink>
        </li>
      </Styled.NavigationList>
    </nav>
  );
}
