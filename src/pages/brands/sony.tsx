import Section from "@/components/common/styles/Section.styled";
import Container from "@/components/common/styles/Container.styled";
import Head from "next/head";
import { useRouter } from "next/router";
import * as Styled from "@/components/BrandsPage/styles/BrandsPages.styled";

export default function Sony() {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>
          {locale === "ua"
            ? "Ремонт телевізорів Sony"
            : "Ремонт телевизоров Sony"}
        </title>
        <meta
          name="description"
          key="desc"
          content={
            locale === "ua"
              ? "Ремонт телевізорів Sony у Києві"
              : "Ремонт телевізорів Sony в Киеве"
          }
        />
      </Head>
      <Section $screenHeight>
        <Container>
          {locale === "ru" ? (
            <div>
              <h1>
                Профессиональные услуги по ремонту телевизоров Sony: Обеспечение
                оптимального качества развлечений
              </h1>
              <Styled.AfterTitle>
                Телевизоры Sony известны своей передовой технологией и
                исключительной производительностью, что делает их популярным
                выбором для домашнего развлечения. Однако, как и любое
                электронное устройство, телевизоры Sony со временем могут
                столкнуться с проблемами. Когда ваш любимый телевизор Sony
                сталкивается с трудностями, наши профессиональные услуги по
                ремонту телевизоров готовы восстановить его оптимальную
                производительность и вернуть радость от просмотра.
              </Styled.AfterTitle>
              <Styled.SubTitle>
                Почему выбирать наши профессиональные услуги по ремонту
                телевизоров Sony?
              </Styled.SubTitle>
              <ol>
                <li>
                  Экспертиза: Наши техники обладают обширными знаниями и опытом
                  в ремонте телевизоров Sony. Они хорошо знакомы с сложным
                  дизайном и технологией телевизоров Sony, что позволяет им
                  точно диагностировать и устранять проблемы
                </li>
                <li>
                  Квалифицированные специалисты: У нас есть команда
                  квалифицированных техников, которые проходят
                  специализированное обучение в ремонте телевизоров Sony. Их
                  опытность гарантирует, что ваш телевизор находится в надежных
                  и способных руках в процессе ремонта.
                </li>
                <li>
                  Оригинальные запчасти Sony: Мы используем только оригинальные
                  запчасти Sony, чтобы обеспечить высококачественный ремонт и
                  сохранить надежность вашего телевизора Sony
                </li>
                <li>
                  Быстрый сервис: Мы понимаем, что неработающий телевизор может
                  быть раздражающим. Наша преданная команда стремится
                  предоставить быстрые услуги по ремонту, минимизируя простой и
                  неудобства.
                </li>
              </ol>
              <Styled.SubTitle>
                Типичные проблемы с телевизорами Sony, которые мы устраняем:
              </Styled.SubTitle>
              <ol>
                <li>
                  Проблемы с изображением: Независимо от того, у вас нет
                  изображения на экране, появляются искажения или проблемы с
                  калибровкой цвета, мы можем точно диагностировать и устранить
                  эти проблемы.
                </li>
                <li>
                  Неисправности аудио: Если у вас возникли проблемы с качеством
                  звука, отсутствует аудиовыход или появляются странные шумы,
                  наши техники могут выявить и устранить неисправности
                  аудиосистемы.
                </li>
                <li>
                  Проблемы с программным обеспечением: Проблемы с работой
                  смарт-функций телевизора? Мы можем диагностировать и устранить
                  проблемы, связанные с программным обеспечением, обеспечивая
                  безупречную функциональность.
                </li>
                <li>
                  Проблемы с питанием и связью: Если ваш телевизор Sony не
                  включается, постоянно перезагружается или сталкивается с
                  проблемами связи, наши эксперты могут определить корень
                  проблемы и предоставить эффективные решения.
                </li>
              </ol>
              <Styled.SubTitle>
                Наш процесс ремонта телевизоров Sony:
              </Styled.SubTitle>
              <ol>
                <li>
                  Диагностика: Наши техники внимательно осматривают ваш
                  телевизор Sony, чтобы выявить основную причину проблемы.
                </li>
                <li>
                  Смета: После диагностики мы предоставляем вам подробную смету
                  на ремонт, указывая стоимость запчастей и работы.
                </li>
                <li>
                  Ремонт: После вашего согласия мы приступаем к ремонту,
                  используя оригинальные запчасти Sony.
                </li>
                <li>
                  Тестирование и обеспечение качества: Перед возвратом вашего
                  телевизора мы проводим тщательное тестирование, чтобы
                  убедиться в его оптимальной работе.
                </li>
                <li>
                  Гарантия: Мы гарантируем качество наших ремонтных работ и
                  предоставляем гарантию на использованные запчасти и работу.
                </li>
              </ol>
              <Styled.SubTitle>Заключение:</Styled.SubTitle>
              <p>
                Когда ваш телевизор Sony сталкивается с проблемами, доверьтесь
                нашим профессиональным услугам по ремонту телевизоров, чтобы
                восстановить его прежнюю славу. С нашей экспертизой в марке,
                квалифицированными специалистами и оригинальными запчастями Sony
                мы обеспечим, чтобы ваш телевизор Sony снова предоставлял
                оптимальный опыт просмотра. Свяжитесь с нами сегодня, чтобы
                запланировать ремонт и вернуть ваш телевизор Sony к максимальной
                производительности.
              </p>
            </div>
          ) : (
            <div>
              <h1>
                Професійний ремонт телевізорів Sony: Забезпечення оптимального
                рівня розваг
              </h1>
              <Styled.AfterTitle>
                Телевізори Sony відомі своєю передовою технологією та винятковою
                продуктивністю, що робить їх популярним вибором для домашнього
                розваги. Проте, як і будь-який електронний пристрій, телевізори
                Sony можуть зазнавати проблем з часом. Коли ваш улюблений
                телевізор Sony зіткнеться з труднощами, наші професійні послуги
                з ремонту телевізорів стануть вам на допомогу, щоб відновити
                його оптимальну продуктивність і повернути радість від
                перегляду.
              </Styled.AfterTitle>
              <Styled.SubTitle>
                Чому обирати наші професійні послуги з ремонту телевізорів Sony?
              </Styled.SubTitle>
              <ol>
                <li>
                  Експертність: Наші техніки мають обширні знання і досвід у
                  ремонті телевізорів Sony. Вони добре знайомі зі складною
                  конструкцією та технологією телевізорів Sony, що дозволяє їм
                  точно діагностувати та вирішувати проблеми.
                </li>
                <li>
                  Кваліфіковані техніки: У нас є команда кваліфікованих
                  техніків, які проходять спеціальну підготовку у ремонті
                  телевізорів Sony. Їхні вміння гарантують, що ваш телевізор
                  знаходиться в надійних і здатних руках під час процесу
                  ремонту.
                </li>
                <li>
                  Оригінальні запчастини Sony: Ми використовуємо лише
                  оригінальні запчастини Sony, щоб забезпечити якісний ремонт і
                  зберегти надійність вашого телевізора Sony.
                </li>
                <li>
                  Швидкий сервіс: Ми розуміємо, що неробочий телевізор може бути
                  неприємним. Наша віддана команда прагне надати швидкі послуги
                  з ремонту, мінімізуючи час простою та незручностей.
                </li>
              </ol>
              <Styled.SubTitle>
                Типові проблеми з телевізорами Sony, які ми вирішуємо:
              </Styled.SubTitle>
              <ol>
                <li>
                  Проблеми з зображенням: Незалежно від того, чи у вас немає
                  зображення на екрані, з'являються спотворені зображення або
                  проблеми з калібруванням кольору, ми можемо точно
                  діагностувати та усунути ці проблеми.
                </li>
                <li>
                  Несправності аудіо: Якщо у вас виникають проблеми з якістю
                  звуку, відсутність аудіовиходу або з'являються незвичайні
                  звуки, наші техніки можуть виявити та відремонтувати
                  аудіосистему.
                </li>
                <li>
                  Проблеми з програмним забезпеченням: Проблеми з роботою
                  смарт-функцій телевізора? Ми можемо діагностувати та усунути
                  проблеми, пов'язані з програмним забезпеченням, забезпечуючи
                  безперебійну функціональність.
                </li>
                <li>
                  Проблеми з живленням та зв'язком: Якщо ваш телевізор Sony не
                  вмикається, періодично перезапускається або зіткнувся з
                  проблемами з підключенням, наші експерти можуть визначити
                  корінь проблеми і надати ефективні рішення.
                </li>
              </ol>
              <Styled.SubTitle>
                Наш процес ремонту телевізорів Sony:
              </Styled.SubTitle>
              <ol>
                <li>
                  Діагностика: Наші техніки ретельно оглядають ваш телевізор
                  Sony для визначення основної причини проблеми.
                </li>
                <li>
                  Смета: Після діагностики ми надаємо вам докладну смету на
                  ремонт, зазначаючи вартість запчастин і роботи.
                </li>
                <li>
                  Ремонт: Після вашого погодження ми приступаємо до ремонту,
                  використовуючи оригінальні запчастини Sony.
                </li>
                <li>
                  Тестування та забезпечення якості: Перед поверненням вашого
                  телевізора ми проводимо ретельне тестування, щоб переконатися
                  в його оптимальному функціонуванні.
                </li>
                <li>
                  Гарантія: Ми гарантуємо якість наших ремонтних робіт і надаємо
                  гарантію на використані запчастини та роботу.
                </li>
              </ol>
              <Styled.SubTitle>Висновок:</Styled.SubTitle>
              <p>
                Коли ваш телевізор Sony стикається з проблемами, довіртеся нашим
                професійним послугам ремонту телевізорів, щоб відновити його
                колишню славу. З нашою експертизою в марці, кваліфікованими
                техніками та оригінальними запчастинами Sony ми забезпечимо, щоб
                ваш телевізор Sony знову надавав оптимальний досвід перегляду.
                Зв'яжіться з нами сьогодні, щоб запланувати ремонт і повернути
                ваш телевізор Sony до пікової продуктивності.
              </p>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}