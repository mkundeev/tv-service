import { useRouter } from "next/router";
import Section from "../common/styles/Section.styled";
import service1 from "../../../public/home-service1.jpg";
import service2 from "../../../public/home-service2.jpg";
import service3 from "../../../public/home-service3.jpg";
import * as Styled from "./styles/HomeService.styled";

export default function HomeService() {
  const { locale } = useRouter();
  return (
    <Section>
      <Styled.HomeServiceContainer>
        <Styled.HomeServiceList>
          <Styled.HomeServiceItem>
            <Styled.ImageService
              src={service1.src}
              alt={
                locale === "ua"
                  ? "Ремонт телевізорів в Києві"
                  : "Ремонт телевизоров в Киеве"
              }
            />
            <Styled.TextBlock>
              <h3>Ремонт</h3>
              <p>
                {locale === "ua"
                  ? "Спеціалізуємося на ремонті кінескопних, рідкокристалічних та плазмових телевізорів різних виробників та моделей"
                  : "Специализируемся на ремонте кинескопных, жидкокристаллических и плазменных телевизоров разных производителей и моделей"}
              </p>
            </Styled.TextBlock>
          </Styled.HomeServiceItem>
          <Styled.HomeServiceItem>
            <Styled.ImageService
              src={service3.src}
              alt={
                locale === "ua"
                  ? "Діагностика телевізорів в Києві"
                  : "Диагностика телевизоров в Киеве"
              }
            />
            <Styled.TextBlock>
              <h3>{locale === "ua" ? "Діагностика" : "Диагностика"}</h3>
              <p>
                {locale === "ua"
                  ? "Наш спеціаліст проведе діагностику несправностей вашого телевізора для визначення причин виходу з ладу"
                  : "Наш специалист проведет диагностику неисправностей вашего телевизора для определения причин выхода из строя."}
              </p>
            </Styled.TextBlock>
          </Styled.HomeServiceItem>
          <Styled.HomeServiceItem>
            <Styled.ImageService
              src={service2.src}
              alt={
                locale === "ua"
                  ? "Налаштування телевізорів в Києві"
                  : "Настройка телевизоров в Киеве"
              }
            />
            <Styled.TextBlock>
              <h3>{locale === "ua" ? "Налаштування" : "Настройка"}</h3>
              <p>
                {locale === "ua"
                  ? "У деяких випадках несправність телевізора можна усунути внесенням правильних налаштувань і зміною внутрішніх опцій"
                  : "В некоторых случаях неисправность телевизора можно устранить внесением правильных настроек и изменением внутренних опций."}
              </p>
            </Styled.TextBlock>
          </Styled.HomeServiceItem>
        </Styled.HomeServiceList>
      </Styled.HomeServiceContainer>
    </Section>
  );
}
