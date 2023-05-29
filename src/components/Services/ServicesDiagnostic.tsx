import Section from "../common/styles/Section.styled";
import service from "../../../public/home-service2.jpg";
import * as Styled from "./styles/Services.styled";

export default function ServicesDiagnostic() {
  return (
    <Section>
      <Styled.ServicesContainer>
        <div>
          <img src={service.src} />
        </div>
        <Styled.TextBlock position="right">
          <h2>Діагностика</h2>
          <div>
            <p>
              Будь-яка діагностика телевізорів містить у собі три основні
              критерії, без яких подальший ремонт не можливий:
            </p>
            <ul>
              <li>
                <p>візуальний огляд телевізора;</p>
              </li>
              <li>
                <p>виконання апаратного чищення;</p>
              </li>
              <li>
                <p>наявність сучасного діагностичного устаткування.</p>
              </li>
            </ul>
            <p>
              Такий комплексний підхід дає можливість максимально точно виявити
              причину несправності. Тільки після того, як буде проведена
              діагностика телевізора ціна на яку при ремонті враховується,
              фахівець зможе визначити, які саме компоненти вийшли з ладу, чи
              підлягають вони відновленню чи їх заміна. Це максимально важливо,
              оскільки саме від цих нюансів залежатиме вартість кінцевого
              ремонту.
            </p>
          </div>
        </Styled.TextBlock>
      </Styled.ServicesContainer>
    </Section>
  );
}
