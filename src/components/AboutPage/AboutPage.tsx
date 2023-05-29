import Container from "../common/styles/Container.styled";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { AiFillSafetyCertificate, AiFillHome } from "react-icons/ai";
import { GiStamper } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";
import * as Styled from "./styles/AboutPage.styles";
import { COLORS } from "@/theme";

export default function AboutPage() {
  return (
    <Styled.AboutSection $screenHeight={true}>
      <Styled.AboutContainer>
        <Styled.Title>Чому обирають нас</Styled.Title>
        <Styled.AboutList>
          <Styled.AboutItem>
            <BsFillHandThumbsUpFill color={COLORS.primary} size={30} />
            <p>
              Якість роботи завжди була, є і буде головним пріоритетом компанії.
            </p>
          </Styled.AboutItem>
          <Styled.AboutItem>
            <AiFillSafetyCertificate color={COLORS.primary} size={30} />
            <p>
              Сертифіковані фахівці, які зможуть провести ремонт телевізора
              будь-якої складності
            </p>
          </Styled.AboutItem>
          <Styled.AboutItem>
            <GiStamper color={COLORS.primary} size={30} />
            <p>Гарантія на роботу та запчастини</p>
          </Styled.AboutItem>
          <Styled.AboutItem>
            <AiFillHome color={COLORS.primary} size={30} />
            <p>
              Можливість провести ремонт телевізора як удома так і в майстерні
            </p>
          </Styled.AboutItem>
          <Styled.AboutItem>
            <FaMapMarkedAlt color={COLORS.primary} size={30} />
            <p>Проводимо ремонт телевізорів у всіх районах Києва</p>
          </Styled.AboutItem>
        </Styled.AboutList>
      </Styled.AboutContainer>
    </Styled.AboutSection>
  );
}
