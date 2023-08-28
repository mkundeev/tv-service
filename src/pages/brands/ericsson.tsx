import Section from "@/components/common/styles/Section.styled";
import Container from "@/components/common/styles/Container.styled";
import Head from "next/head";
import { useRouter } from "next/router";
import * as Styled from "@/components/BrandsPage/styles/BrandsPages.styled";

export default function Ericsson() {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>
          {locale === "ua"
            ? "Ремонт телевізорів Ericsson"
            : "Ремонт телевизоров Ericsson"}
        </title>
        <meta
          name="description"
          key="desc"
          content={
            locale === "ua"
              ? "Ремонт телевізорів Ericsson у Києві"
              : "Ремонт телевізорів Ericsson в Киеве"
          }
        />
      </Head>
      <Section $screenHeight>
        <Container>
          {locale === "ru" ? (
            <div>
              <h1>
                Ремонт телевизоров Ericsson: профессиональная помощь вашему
                оборудованию
              </h1>
              <Styled.AfterTitle>
                Телевизоры Ericsson – это неотъемлемая часть нашего
                развлекательного опыта, но время от времени они могут
                потребовать ремонта. Наша компания готова предоставить вам
                качественные услуги по ремонту телевизоров Ericsson, чтобы вы
                снова могли наслаждаться качеством изображения и звука.
              </Styled.AfterTitle>
              <Styled.SubTitle>
                Почему выбирать нашу компанию для ремонта телевизоров Ericsson?
              </Styled.SubTitle>
              <ol>
                <li>
                  Экспертные знания: Наша команда обладает глубоким пониманием
                  технических аспектов телевизоров Ericsson. Мы имеем экспертную
                  экспертизу, необходимую для эффективной диагностики и
                  устранения неисправностей.
                </li>
                <li>
                  Квалифицированные специалисты: Наши специалисты имеют
                  соответствующее обучение и опыт работы по ремонту телевизоров
                  Ericsson. Они знают, как эффективно решать разнообразные
                  проблемы.
                </li>
                <li>
                  Использование оригинальных деталей: Мы используем только
                  оригинальные запчасти для телевизоров Ericsson, чтобы
                  обеспечить надежность и долговечность восстановленного
                  оборудования.
                </li>
                <li>
                  Быстрая работа: Мы понимаем, насколько важно для вас получить
                  телевизор обратно в рабочем состоянии. Поэтому мы ставим
                  скорость работы на первое место.
                </li>
              </ol>
              <Styled.SubTitle>
                Распространенные проблемы, которые мы решаем:
              </Styled.SubTitle>
              <ol>
                <li>
                  Проблемы с изображением: Независимо от того, есть ли у вас
                  размытый экран, неправильные цвета или другие отклонения, мы
                  можем восстановить качество изображения.
                </li>
                <li>
                  Проблемы со звуком: Если звук исчез или дефектен, наши
                  специалисты смогут диагностировать и устранить проблему..
                </li>
                <li>
                  Подключение и порты: Мы поможем вам устранить проблемы с
                  подключением к другим устройствам, таким как HDMI или USB.
                </li>
              </ol>
              <Styled.SubTitle>
                Процесс ремонта телевизоров Ericsson:
              </Styled.SubTitle>
              <ol>
                <li>
                  Диагностика: Наши специалисты изучат ваш телевизор Ericsson,
                  чтобы выяснить источник проблемы.
                </li>
                <li>
                  Оценка стоимости: После диагностики мы предоставим вам точную
                  оценку стоимости ремонта.
                </li>
                <li>
                  Профессиональный ремонт: После вашего согласия с оценкой, мы
                  начнем ремонт, используя оригинальные запчасти.
                </li>
                <li>
                  Тестирование и гарантия: После завершения ремонтных работ мы
                  проведем тестирование, чтобы убедиться в качестве работы
                  телевизора, и предоставим гарантию на нашу работу.
                </li>
              </ol>
              <Styled.SubTitle>Обращайтесь к нам:</Styled.SubTitle>
              <p>
                Если ваш телевизор Ericsson требует ремонта, не стесняйтесь
                обращаться к нам. Мы готовы помочь вам восстановить качество
                работы вашего оборудования. Обращайтесь к нам уже сейчас, и ваш
                телевизор Ericsson снова будет работать на полную мощность!
              </p>
            </div>
          ) : (
            <div>
              <h1>
                Ремонт телевізорів Ericsson: професійна допомога вашому
                обладнанню
              </h1>
              <Styled.AfterTitle>
                Телевізори Ericsson – це невід'ємна частина нашого розважального
                досвіду, але час від часу вони можуть потребувати ремонту. Наша
                компанія готова надати вам якісні послуги з ремонту телевізорів
                Ericsson, щоб ви знову могли насолоджуватися якістю зображення
                та звуку.
              </Styled.AfterTitle>
              <Styled.SubTitle>
                Чому обирати нашу компанію для ремонту телевізорів Ericsson?
              </Styled.SubTitle>
              <ol>
                <li>
                  Експертні знання: Наша команда володіє глибоким розумінням
                  технічних аспектів телевізорів Ericsson. Ми маємо експертну
                  експертизу, необхідну для ефективної діагностики та усунення
                  несправностей.
                </li>
                <li>
                  Кваліфіковані фахівці: Наші фахівці мають відповідне навчання
                  та досвід роботи з ремонту телевізорів Ericsson. Вони знають,
                  як ефективно вирішувати різноманітні проблеми.
                </li>
                <li>
                  Використання оригінальних деталей: Ми використовуємо лише
                  оригінальні запчастини для телевізорів Ericsson, щоб
                  забезпечити надійність та тривалість відновленого обладнання.
                </li>
                <li>
                  Швидка робота: Ми розуміємо, наскільки важливо для вас
                  отримати телевізор назад у робочому стані. Тому ми ставимо
                  швидкість роботи на перше місце.
                </li>
              </ol>
              <Styled.SubTitle>
                Розповсюджені проблеми, які ми вирішуємо:
              </Styled.SubTitle>
              <ol>
                <li>
                  Проблеми з зображенням: Незалежно від того, чи є у вас
                  розмитий екран, неправильні кольори або інші відхилення, ми
                  можемо відновити якість зображення.
                </li>
                <li>
                  Проблеми зі звуком: Якщо звук зник або є дефектний, наші
                  спеціалісти зможуть діагностувати та виправити проблему.
                </li>
                <li>
                  Підключення та порти: Ми допоможемо вам усунути проблеми з
                  підключенням до інших пристроїв, таких як HDMI або USB.
                </li>
              </ol>
              <Styled.SubTitle>
                Процес ремонту телевізорів Ericsson:
              </Styled.SubTitle>
              <ol>
                <li>
                  Діагностика: Наши фахівці вивчать ваш телевізор Ericsson, щоб
                  з'ясувати джерело проблеми.
                </li>
                <li>
                  Оцінка вартості: Після діагностики ми надамо вам точну оцінку
                  вартості ремонту.
                </li>
                <li>
                  Професійний ремонт: Після вашої згоди на оцінку, ми почнемо
                  ремонт, використовуючи оригінальні запчастини.
                </li>
                <li>
                  Тестування та гарантія: Після завершення ремонтних робіт ми
                  проведемо тестування, щоб переконатися у якості роботи
                  телевізора, та надамо гарантію на нашу роботу.
                </li>
              </ol>
              <Styled.SubTitle>Звертайтеся до нас:</Styled.SubTitle>
              <p>
                Якщо ваш телевізор Ericsson потребує ремонту, не соромтеся
                звертатися до нас. Ми готові допомогти вам відновити якість
                роботи вашого обладнання. Звертайтеся до нас вже зараз, і ваш
                телевізор Ericsson знову буде працювати!
              </p>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
