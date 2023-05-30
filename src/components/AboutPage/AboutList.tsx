import { useRouter } from "next/router";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { AiFillSafetyCertificate, AiFillHome } from "react-icons/ai";
import { GiStamper } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";
import * as Styled from "./styles/AboutPage.styles";
import { COLORS } from "@/theme";

export default function AboutList() {
  const { locale } = useRouter();
  return (
    <ul>
      <Styled.AboutItem>
        <BsFillHandThumbsUpFill color={COLORS.primary} size={30} />
        <p>
          {locale === "ua"
            ? "Якість роботи завжди була, є і буде головним пріоритетом компанії."
            : "Качество работы всегда было, есть и будет главным приоритетом компании."}
        </p>
      </Styled.AboutItem>
      <Styled.AboutItem>
        <AiFillSafetyCertificate color={COLORS.primary} size={30} />
        <p>
          {locale === "ua"
            ? "Сертифіковані фахівці, які зможуть провести ремонт телевізора  будь-якої складності"
            : "Сертифицированные специалисты, которые смогут произвести ремонт телевизора любой сложности"}
        </p>
      </Styled.AboutItem>
      <Styled.AboutItem>
        <GiStamper color={COLORS.primary} size={30} />
        <p>
          {locale === "ua"
            ? "Гарантія на роботу та запчастини"
            : "Гарантия на работу и запчасти"}
        </p>
      </Styled.AboutItem>
      <Styled.AboutItem>
        <AiFillHome color={COLORS.primary} size={30} />
        <p>
          {locale === "ua"
            ? "Можливість провести ремонт телевізора як удома так і в майстерні"
            : "Возможность произвести ремонт телевизора как дома так и в мастерской"}
        </p>
      </Styled.AboutItem>
      <Styled.AboutItem>
        <FaMapMarkedAlt color={COLORS.primary} size={30} />
        <p>
          {locale === "ua"
            ? "Проводимо ремонт телевізорів у всіх районах Києва"
            : "Проводим ремонт телевизоров во всех районах Киева"}
        </p>
      </Styled.AboutItem>
    </ul>
  );
}
