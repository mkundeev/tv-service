import Section from "@/components/common/styles/Section.styled";
import Container from "@/components/common/styles/Container.styled";
import Layout from "@/components/BrandsPage/Layout";
import { useRouter } from "next/router";
import * as Styled from "@/components/BrandsPage/styles/BrandsPages.styled";

export default function TCL() {
  const { locale } = useRouter();
  return (
    <Layout>
      <Section $screenHeight>
        <Container>
          {locale === "ru" ? (
            <Styled.Page>
              <h1>
                Профессиональный ремонт телевизоров TCL: Профессиональные
                Решения для Вашего Телевизора
              </h1>
              <Styled.AfterTitle>
                В мире технологий телевизоры TCL занимают особое место благодаря
                передовой технологии и качеству воспроизведения. Однако ни одна
                электроника не является вечной, и могут возникнуть технические
                проблемы. Если ваш телевизор TCL столкнулся с неполадками, наша
                компания готова предоставить профессиональные услуги по ремонту,
                чтобы восстановить его функциональность и качество
                воспроизведения.
              </Styled.AfterTitle>
              <Styled.SubTitle>
                Почему Вы Должны выбрать нас для ремонта телевизоров TCL?
              </Styled.SubTitle>
              <ol>
                <li>
                  Экспертиза в делах TCL: Наша команда техников имеет глубокие
                  знания и опыт в ремонте телевизоров марки TCL. Мы понимаем,
                  как работают эти телевизоры как внутри, так и снаружи, поэтому
                  способны точно определить и устранить любые проблемы.
                </li>
                <li>
                  Квалифицированные техники: Наша команда состоит из
                  квалифицированных техников, которые имеют опыт в ремонте
                  телевизоров TCL. Они понимают уникальные особенности этих
                  устройств и могут эффективно справиться с любыми проблемами.
                </li>
                <li>
                  Использование оригинальных запчастей: Мы используем только
                  оригинальные запчасти TCL во время ремонта. Это позволяет
                  обеспечить максимальное качество и длительность восстановления
                  вашего телевизора.
                </li>
                <li>
                  Скорость и надежность: Мы понимаем, как важно для вас быстро
                  вернуть ваш телевизор в рабочее состояние. Поэтому мы работаем
                  оперативно, обеспечивая качественный ремонт без лишних
                  задержек.
                </li>
              </ol>
              <Styled.SubTitle>Ремонт любых проблем:</Styled.SubTitle>
              <ol>
                <li>
                  Проблемы с изображением: От некорректного воспроизведения до
                  полного отсутствия изображения, мы готовы диагностировать и
                  решать любые неполадки, связанные с изображением.
                </li>
                <li>
                  Аудио неполадки: Если у вас есть проблемы с звуком - слабый
                  звук или его вообще нет - наши техники могут восстановить
                  аудиофункцию вашего телевизора.
                </li>
                <li>
                  Проблемы с подключением и сетью: Не работают подключения,
                  Wi-Fi или сетевые возможности? Мы можем исправить проблемы с
                  подключением и обеспечить нормальную работу сети.
                </li>
              </ol>
              <Styled.SubTitle>
                Процесс ремонта телевизоров TCL:
              </Styled.SubTitle>
              <ol>
                <li>
                  Диагностика: Наши техники тщательно проверяют ваш телевизор
                  TCL для определения причины проблемы.
                </li>
                <li>
                  Оценка стоимости: После диагностики мы предоставляем вам
                  подробную оценку стоимости ремонта.
                </li>
                <li>
                  Профессиональный ремонт: После вашего согласия мы начинаем
                  ремонт, используя только оригинальные запчасти TCL.
                </li>
                <li>
                  Тестирование и гарантия: После выполнения ремонта мы тщательно
                  тестируем телевизор и предоставляем гарантию на выполненную
                  работу.
                </li>
              </ol>
              <Styled.SubTitle>Обращайтесь к нам:</Styled.SubTitle>
              <p>
                Если ваш телевизор TCL столкнулся с какими-либо проблемами,
                обращайтесь к нам. Наша команда экспертов с удовольствием
                поможет восстановить его рабочее состояние и обеспечит
                качественный ремонт. Не теряйте времени - свяжитесь с нами
                сегодня и верните свой телевизор TCL к жизни!
              </p>
            </Styled.Page>
          ) : (
            <Styled.Page>
              <h1>
                Професійний ремонт телевізорів TCL: Професійні Рішення для
                Вашого Телевізора
              </h1>
              <Styled.AfterTitle>
                У світі технологій телевізори TCL займають особливе місце
                завдяки своїй передовій технології та якості відтворення. Однак
                жодна електроніка не є вічною, і можуть виникнути технічні
                проблеми. Якщо ваш телевізор TCL зазнав неполадок, наша компанія
                готова надати професійні послуги з ремонту для того, щоб
                відновити його функціональність та якість відтворення.
              </Styled.AfterTitle>
              <Styled.SubTitle>
                Чому Ви повинні обрати нас для ремонту телевізорів TCL?
              </Styled.SubTitle>
              <ol>
                <li>
                  Експертиза у справах TCL: Наша команда техніків має глибокі
                  знання та досвід у ремонті телевізорів марки TCL. Ми
                  розуміємо, як працюють ці телевізори всередині та зовні, тому
                  здатні точно визначити та усунути будь-які проблеми.
                </li>
                <li>
                  Кваліфіковані техніки: Наша команда складається з
                  кваліфікованих техніків, які мають досвід у ремонті
                  телевізорів TCL. Вони розуміють унікальні особливості цих
                  пристроїв та можуть ефективно впоратися з будь-якими
                  проблемами.
                </li>
                <li>
                  Використання оригінальних запчастин: Ми використовуємо лише
                  оригінальні запчастини TCL під час ремонту. Це дозволяє
                  забезпечити максимальну якість та тривалість відновлення
                  вашого телевізора.
                </li>
                <li>
                  Швидкість та надійність: Ми розуміємо, як важливо для вас
                  швидко повернути в робочий стан ваш телевізор. Тому ми
                  працюємо оперативно, забезпечуючи якісний ремонт без зайвої
                  затримки.
                </li>
              </ol>
              <Styled.SubTitle>Ремонт будь-яких проблем:</Styled.SubTitle>
              <ol>
                <li>
                  Проблеми зі зображенням: Від некоректного відтворення до
                  зовсім відсутнього зображення, ми готові діагностувати та
                  вирішувати будь-які неполадки, пов'язані зі зображенням.
                </li>
                <li>
                  Аудіо неполадки: Якщо у вас проблеми зі звуком – слабкий звук,
                  або його взагалі немає – наші техніки можуть відновити
                  аудіофункцію вашого телевізора.
                </li>
                <li>
                  Підключення та мережеві проблеми: Чи не працюють підключення,
                  Wi-Fi або мережеві можливості? Ми можемо виправити проблеми з
                  підключенням та забезпечити належну роботу мережі.
                </li>
              </ol>
              <Styled.SubTitle>Процес ремонту телевізорів TCL:</Styled.SubTitle>
              <ol>
                <li>
                  Діагностика: Наші техніки ретельно перевіряють ваш телевізор
                  TCL для визначення причини проблеми.
                </li>
                <li>
                  Оцінка вартості: Після діагностики ми надаємо вам докладну
                  оцінку вартості ремонту.
                </li>
                <li>
                  Професійний ремонт: Після вашого погодження ми розпочинаємо
                  ремонт, використовуючи лише оригінальні запчастини TCL.
                </li>
                <li>
                  Тестування та гарантія: Після виконання ремонту ми ретельно
                  тестуємо телевізор та надаємо гарантію на виконану роботу.
                </li>
              </ol>
              <Styled.SubTitle>Звертайтеся до нас:</Styled.SubTitle>
              <p>
                Якщо ваш телевізор TCL стикнувся з будь-якими проблемами,
                зверніться до нас. Наша команда експертів з радістю допоможе
                відновити його робочий стан і забезпечить якісний ремонт для
                вас. Не гайте часу – зв'яжіться з нами сьогодні і поверніть свій
                телевізор TCL до життя!
              </p>
            </Styled.Page>
          )}
        </Container>
      </Section>
    </Layout>
  );
}
