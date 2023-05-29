import Section from "../common/styles/Section.styled";
import service from "../../../public/home-service1.jpg";
import * as Styled from "./styles/Services.styled";

export default function ServicesRepair() {
  return (
    <Section>
      <Styled.ServicesContainer>
        <Styled.TextBlock position="left">
          <h2>Ремонт</h2>
          <p>
            Виконуємо ремонт всіх типів телевізорів – кінескопні,
            рідкокристалічні (LED, LCD), плазмові. Головним фактором, який
            впливає на вартість ремонту телевізора, є характер поломки,
            складність роботи, що виконується і, звичайно ж, термін виконання
            роботи. Ми можемо запропонувати вам якісний ремонт телевізорів усіх
            брендових та моделей. Визначити точнішу ціну ремонтних робіт наш
            майстер зможе після проведення діагностики. Хоча в деяких випадках
            вартість ремонту можна визначити ще по телефону.
          </p>
        </Styled.TextBlock>
        <div>
          <img src={service.src} />
        </div>
      </Styled.ServicesContainer>
    </Section>
  );
}
