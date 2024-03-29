import Section from "@/components/common/styles/Section.styled";
import Container from "@/components/common/styles/Container.styled";
import Layout from "@/components/BrandsPage/Layout";
import { useRouter } from "next/router";
import * as Styled from "@/components/BrandsPage/styles/BrandsPages.styled";

export default function Philips() {
  const { locale } = useRouter();
  return (
    <Layout>
      <Section $screenHeight>
        <Container>
          {locale === "ru" ? (
            <Styled.Page>
              <h1>
                Ремонт телевизоров Philips: Профессиональное Восстановление
                Качества Вашего Оборудования
              </h1>
              <Styled.AfterTitle>
                Ваши телевизоры Philips, с их передовой технологией и
                впечатляющим качеством воспроизведения, заслуживают лучшего.
                Однако даже высококачественная техника может выйти из строя или
                столкнуться с неисправностями. Если ваш телевизор Philips
                нуждается в ремонте, мы готовы предоставить профессиональные
                услуги для полного восстановления его оптимальной работы.
              </Styled.AfterTitle>
              <Styled.SubTitle>
                Почему Вы Должны выбрать нас для ремонта телевизоров Philips?
              </Styled.SubTitle>
              <ol>
                <li>
                  Экспертиза в технологиях Philips: Наша команда техников имеет
                  многолетний опыт в ремонте телевизоров Philips. Мы понимаем
                  уникальную технологию и особенности этого бренда, что
                  позволяет нам эффективно выявлять и решать разнообразные
                  проблемы.
                </li>
                <li>
                  Профессиональные техники: В нашей команде работают
                  квалифицированные специалисты, обладающие глубоким пониманием
                  процессов ремонта телевизоров Philips. Они способны быстро и
                  эффективно диагностировать и устранять неисправности любой
                  сложности.
                </li>
                <li>
                  Оригинальные запчасти: Для замены деталей мы используем только
                  оригинальные запчасти Philips. Это гарантирует высокое
                  качество ремонтных работ и долговечность вашего оборудования.
                </li>
                <li>
                  Скорость и надежность: Мы понимаем, что ваш телевизор - это
                  важная часть вашего досуга, поэтому нам важно минимизировать
                  время ремонта, обеспечивая при этом качество.
                </li>
              </ol>
              <Styled.SubTitle>
                Устранение разнообразных проблем:
              </Styled.SubTitle>
              <ol>
                <li>
                  Проблемы с отображением: Независимо от того, есть у вас
                  проблемы с качеством изображения или даже его отсутствием, мы
                  знаем, как их решить.
                </li>
                <li>
                  Проблемы со звуком: Если у вас возникли проблемы с аудио -
                  плохой звук или его отсутствие - наши специалисты найдут
                  решение.
                </li>
                <li>
                  Проблемы с подключением: Мы решаем проблемы с подключением,
                  HDMI, USB и другими портами, чтобы вы могли наслаждаться вашим
                  оборудованием.
                </li>
              </ol>
              <Styled.SubTitle>
                Процесс ремонта телевизоров Philips:
              </Styled.SubTitle>
              <ol>
                <li>
                  Диагностика: Наши техники тщательно исследуют ваш телевизор
                  Philips, определяя причины неисправности.
                </li>
                <li>
                  Оценка стоимости: Мы предоставляем вам четкую оценку стоимости
                  ремонта, после чего вы выбираете дальнейшие шаги.
                </li>
                <li>
                  Профессиональный ремонт: После вашего согласия на ремонт, мы
                  начинаем восстанавливать ваш телевизор, используя только
                  оригинальные компоненты.
                </li>
                <li>
                  Тестирование и гарантия: После завершения ремонта мы тщательно
                  тестируем ваш телевизор и предоставляем гарантию на нашу
                  работу.
                </li>
              </ol>
              <Styled.SubTitle>Обращайтесь к нам:</Styled.SubTitle>
              <p>
                Если ваш телевизор Philips нуждается в ремонте, обращайтесь к
                нам. Наша команда экспертов готова восстановить его качество и
                обеспечить надежный ремонт. Не теряйте времени - свяжитесь с
                нами уже сегодня и верните ваш телевизор Philips к жизни!
              </p>
            </Styled.Page>
          ) : (
            <Styled.Page>
              <h1>
                Ремонт телевізорів Philips: Професійне відновлення якості вашого
                обладнання
              </h1>
              <Styled.AfterTitle>
                Ваш телевізор Philips, з його передовою технологією та вражаючим
                відтворенням, заслуговує на найкраще. Але навіть високоякісна
                техніка може відмовити чи стикається з неполадками. Якщо вашому
                телевізору Philips потрібен ремонт, ми готові надати професійні
                послуги для повного відновлення його оптимальної роботи.
              </Styled.AfterTitle>
              <Styled.SubTitle>
                Навіщо вибирати нас для ремонту телевізорів Philips?
              </Styled.SubTitle>
              <ol>
                <li>
                  Експертність в технології Philips: Наша команда техніків має
                  багаторічний досвід у ремонті телевізорів Philips. Ми
                  розуміємо унікальну технологію та особливості цього бренду, що
                  дозволяє нам ефективно виявляти та вирішувати різноманітні
                  проблеми.
                </li>
                <li>
                  Професійні техніки: В нашій команді працюють кваліфіковані
                  фахівці, які володіють глибоким розумінням процесів ремонту
                  телевізорів Philips. Вони здатні швидко та ефективно
                  діагностувати та усувати неполадки будь-якої складності.
                </li>
                <li>
                  Оригінальні запчастини: Для заміни деталей ми використовуємо
                  лише оригінальні запчастини Philips. Це гарантує високу якість
                  ремонтних робіт і довговічність вашого обладнання.
                </li>
                <li>
                  Швидкість і надійність: Ми розуміємо, що ваш телевізор - це
                  важлива частина вашого дозвілля, тому нам важливо мінімізувати
                  час ремонту, забезпечуючи при цьому якість.
                </li>
              </ol>
              <Styled.SubTitle>Усунення різноманітних проблем:</Styled.SubTitle>
              <ol>
                <li>
                  Проблеми з відображенням: Незалежно від того, чи маєте ви
                  проблеми з якістю зображення, або навіть його відсутністю, ми
                  знаємо, як їх вирішити.
                </li>
                <li>
                  Проблеми зі звуком: Якщо у вас виникли проблеми з аудіо -
                  поганий звук або його відсутність - наші фахівці знайдуть
                  рішення.
                </li>
                <li>
                  Проблеми з підключенням: Ми вирішуємо проблеми з підключенням,
                  HDMI, USB і іншими портами, щоб ви могли насолоджуватися вашим
                  обладнанням.
                </li>
              </ol>
              <Styled.SubTitle>
                Процес ремонту телевізорів Philips:
              </Styled.SubTitle>
              <ol>
                <li>
                  Діагностика: Наші техніки ретельно досліджують ваш телевізор
                  Philips, визначаючи причини неполадки.
                </li>
                <li>
                  Оцінка вартості: Ми надаємо вам чітку оцінку вартості ремонту,
                  після чого вибираєте подальший крок.
                </li>
                <li>
                  Професійний ремонт: Після вашої згоди на ремонт, ми починаємо
                  відновлювати ваш телевізор, використовуючи лише оригінальні
                  компоненти.
                </li>
                <li>
                  Тестування та гарантія: Після завершення ремонту ми ретельно
                  тестуємо ваш телевізор і надаємо гарантію на нашу роботу..
                </li>
              </ol>
              <Styled.SubTitle>Звертайтеся до нас:</Styled.SubTitle>
              <p>
                Якщо ваш телевізор Philips потребує ремонту, зверніться до нас.
                Наша команда експертів готова відновити його якість та
                забезпечити надійний ремонт. Не втрачайте часу - зв'яжіться з
                нами вже сьогодні та поверніть ваш телевізор Philips до життя!
              </p>
            </Styled.Page>
          )}
        </Container>
      </Section>
    </Layout>
  );
}
