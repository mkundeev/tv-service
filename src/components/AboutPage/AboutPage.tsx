import { useRouter } from "next/router";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { AiFillSafetyCertificate, AiFillHome } from "react-icons/ai";
import { GiStamper } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";
import * as Styled from "./styles/AboutPage.styles";
import { COLORS } from "@/theme";
import AboutList from "./AboutList";

export default function AboutPage() {
  const { locale } = useRouter();
  return (
    <Styled.AboutSection $screenHeight={true}>
      <Styled.AboutContainer>
        <Styled.Title>
          {locale === "ua" ? "Чому обирають нас" : "Почему выбирают нас"}
        </Styled.Title>
        <AboutList />
      </Styled.AboutContainer>
    </Styled.AboutSection>
  );
}
