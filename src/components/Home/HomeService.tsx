import Divider from "../common/Divider";
import Section from "../common/styles/Section.styled";
import Container from "../common/styles/Container.styled";
import service1 from "../../../public/home-service1.jpg";
import service2 from "../../../public/home-service2.jpg";
import service3 from "../../../public/home-service3.jpg";
import * as Styled from "./styles/HomeService.styled";

export default function HomeService() {
  return (
    <Section>
      <Styled.HomeServiceContainer>
        <Styled.HomeServiceList>
          <Styled.HomeServiceItem>
            <img
              sizes="370px"
              src={service1.src}
              alt="Описание изображения для всех версий"
              width="370px"
            />
            <div>
              <h3>Ремонт</h3>
              <p>
                Спеціалізуємося на ремонті кінескопних, рідкокристалічних та
                плазмових телевізорів різних виробників та моделей
              </p>
            </div>
          </Styled.HomeServiceItem>
          <Styled.HomeServiceItem>
            <img
              sizes="370px"
              src={service3.src}
              alt="Описание изображения для всех версий"
              width="370px"
            />
            <div>
              <h3>Діагностика</h3>
              <p>
                Наш спеціаліст проведе діагностику несправностей вашого
                телевізора для визначення причин виходу з ладу
              </p>
            </div>
          </Styled.HomeServiceItem>
          <Styled.HomeServiceItem>
            <img
              sizes="370px"
              src={service2.src}
              alt="Описание изображения для всех версий"
              width="370px"
            />
            <div>
              <h3>Налаштування</h3>
              <p>
                У деяких випадках несправність телевізора можна усунути
                внесенням правильних налаштувань і зміною внутрішніх опцій
              </p>
            </div>
          </Styled.HomeServiceItem>
        </Styled.HomeServiceList>
      </Styled.HomeServiceContainer>
    </Section>
  );
}
