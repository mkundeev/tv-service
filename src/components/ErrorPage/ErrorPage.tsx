import Section from "@/components/common/styles/Section.styled";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Styled from "./styles/ErrrorPage.styled";

export default function ErrorPage() {
  const { locale } = useRouter();
  return (
    <Section $screenHeight={true}>
      <Styled.ErrorContainer>
        <p>Error 404</p>
        <Link href="/">
          {locale === "ua" ? "Повернутися на головну" : "Вернуться на главную"}
        </Link>
      </Styled.ErrorContainer>
    </Section>
  );
}
