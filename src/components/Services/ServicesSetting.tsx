import Section from "../common/styles/Section.styled";
import service from "../../../public/home-service3.jpg";
import * as Styled from "./styles/Services.styled";

export default function ServicesSetting() {
  return (
    <Section>
      <Styled.ServicesContainer>
        <Styled.TextBlock position="left">
          <h2>Налаштування</h2>
          <p>
            Нашими майстрами проводиться налаштування цифрових та звичайних
            телевізійних програм на всіх моделях телевізорів імпортного та
            вітчизняного виробництва, як на сучасній апаратурі, так і на старій,
            випущеній у ХХ столітті. Досвідчені фахівці знають, як налаштувати
            телевізійні канали, як виставити якісне зображення та звук, як
            налаштувати інтернет на телевізорі, підключити його до антени чи
            через приставку. Пропонуємо викликати майстра налаштувати телевізор
            із нашої майстерні.
          </p>
        </Styled.TextBlock>
        <div>
          <img src={service.src} />
        </div>
      </Styled.ServicesContainer>
    </Section>
  );
}
