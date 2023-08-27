import Section from "@/components/common/styles/Section.styled";
import Container from "@/components/common/styles/Container.styled";
import Head from "next/head";
import { useRouter } from "next/router";
import * as Styled from "@/components/BrandsPage/styles/BrandsPages.styled";

export default function Phanasonic() {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>
          {locale === "ua"
            ? "Ремонт телевізорів Phansonic "
            : "Ремонт телевизоров Phansonic"}
        </title>
        <meta
          name="description"
          key="desc"
          content={
            locale === "ua"
              ? "Ремонт телевізорів Phansonic у Києві"
              : "Ремонт телевізорів Phansonic в Киеве"
          }
        />
      </Head>
      <Section $screenHeight>
        <Container>
          {locale === "ru" ? (
            <div>
              <h1>
                Профессиональные услуги по ремонту телевизоров Phanasonic:
                Надежные решения для вашего телевизора Phanasonic
              </h1>
              <Styled.AfterTitle>
                У вас возникли проблемы с телевизором Phanasonic? Не волнуйтесь;
                наши профессиональные услуги по ремонту телевизоров здесь, чтобы
                помочь! С годами опыта и опытными техниками, мы предлагаем
                надежные решения для всех проблем вашего телевизора Phanasonic.
              </Styled.AfterTitle>
              <Styled.SubTitle>
                Почему выбирать нас для ремонта телевизоров Phanasonic?
              </Styled.SubTitle>
              <ol>
                <li>
                  Сертифицированные техники: Наша команда состоит из
                  сертифицированных и обученных техников, которые хорошо знакомы
                  с тонкостями телевизоров Phanasonic. Они обладают опытом для
                  эффективной диагностики и ремонта широкого спектра проблем.
                </li>
                <li>
                  Оригинальные запчасти: Мы используем только оригинальные
                  запчасти Phanasonic, чтобы обеспечить наилучшую
                  производительность и долговечность вашего телевизора после
                  ремонта.
                </li>
                <li>
                  Быстрое обслуживание: Мы понимаем неудобства, связанные с
                  неисправностью телевизора. Наша преданная команда стремится
                  обеспечить быстрые сроки ремонта, не жертвуя при этом
                  качеством.
                </li>
                <li>
                  Комплексный ремонт: От замены экрана и проблем с аудио до
                  проблем с программным обеспечением и сбоями подключения - мы
                  решаем все типы проблем с телевизорами.
                </li>
              </ol>
              <Styled.SubTitle>
                Часто встречающиеся проблемы с телевизорами Phanasonic, которые
                мы ремонтируем:
              </Styled.SubTitle>
              <ol>
                <li>
                  Проблемы с экраном: Независимо от того, имеет ли ваш телевизор
                  треснутый экран или на дисплее появляются необычные линии и
                  узоры, мы можем оценить ущерб и заменить неисправные
                  компоненты для восстановления изображения.
                </li>
                <li>
                  Проблемы с аудио: Если у вашего телевизора Phanasonic возникли
                  проблемы со звуком, такие как отсутствие звука или искаженный
                  звук, наши техники могут устранить неисправности в аудио
                  схеме.
                </li>
                <li>
                  Проблемы с подключением: Проблемы с функциями Smart TV? Мы
                  можем исправить проблемы, связанные с подключением Wi-Fi,
                  портами HDMI и другими сетевыми проблемами.
                </li>
                <li>
                  Проблемы с питанием и программным обеспечением: Если ваш
                  телевизор не включается, постоянно перезагружается или имеет
                  программные сбои, наши эксперты могут эффективно
                  диагностировать и устранить эти проблемы.
                </li>
              </ol>
              <Styled.SubTitle>
                Как работает наш процесс ремонта:
              </Styled.SubTitle>
              <ol>
                <li>
                  Диагностика: Наши техники внимательно изучат ваш телевизор
                  Phanasonic, чтобы определить корень проблемы.
                </li>
                <li>
                  Смета стоимости: После диагностики мы предоставим вам
                  подробную оценку стоимости ремонта, включая запчасти и работу.
                </li>
                <li>
                  Ремонт: По вашему согласию, мы приступим к ремонту с
                  использованием оригинальных запчастей Phanasonic.
                </li>
                <li>
                  Контроль качества: Перед тем, как вернуть ваш телевизор, мы
                  проводим строгие проверки качества, чтобы убедиться, что он
                  функционирует оптимально.
                </li>
                <li>
                  Гарантия: Мы стоим за своими ремонтами и предлагаем гарантию
                  на использованные запчасти и работу.
                </li>
              </ol>
              <Styled.SubTitle>Заключение:</Styled.SubTitle>
              <p>
                Не позволяйте неполадкам с телевизором нарушать вашу
                развлекательную программу. Доверьтесь нашим профессиональным
                услугам по ремонту телевизоров Phanasonic, чтобы вернуть ваш
                телевизор к жизни. Свяжитесь с нами сегодня, чтобы назначить
                ремонт и оценить надежность, эффективность и качество наших
                услуг по ремонту телевизоров.
              </p>
            </div>
          ) : (
            <div>
              <h1>
                Професійні послуги з ремонту телевізорів Phanasonic: Надійні
                рішення для вашого телевізора Phanasonic
              </h1>
              <Styled.AfterTitle>
                Чи маєте ви проблеми з телевізором Phanasonic? Не хвилюйтесь;
                наші професійні послуги з ремонту телевізорів тут, щоб
                допомогти! З роками досвіду та експертними техніками ми
                пропонуємо надійні рішення для всіх проблем вашого телевізора
                Phanasonic.
              </Styled.AfterTitle>
              <Styled.SubTitle>
                Чому обирати нас для ремонту телевізорів Phanasonic?
              </Styled.SubTitle>
              <ol>
                <li>
                  Сертифіковані техніки: Наша команда складається з
                  сертифікованих та навчених техніків, які добре знають
                  особливості телевізорів Phanasonic. Вони мають експертизу для
                  ефективної діагностики та ремонту різних проблем.
                </li>
                <li>
                  Оригінальні запчастини: Ми використовуємо лише оригінальні
                  запчастини Phanasonic, щоб забезпечити найкращу продуктивність
                  та довговічність вашого телевізора після ремонту.
                </li>
                <li>
                  Швидкий сервіс: Ми розуміємо незручність несправного
                  телевізора. Наша віддана команда намагається забезпечити
                  швидкі терміни виконання ремонту без жертвування якістю.
                </li>
                <li>
                  Комплексний ремонт: Від заміни екрану та проблем з аудіо до
                  проблем з програмним забезпеченням та несправностей з
                  підключенням - ми вирішуємо різні типи проблем з телевізорами.
                </li>
              </ol>
              <Styled.SubTitle>
                Поширені проблеми з телевізорами Phanasonic, які ми ремонтуємо:
              </Styled.SubTitle>
              <ol>
                <li>
                  Проблеми з екраном: Незалежно від того, чи має ваш телевізор
                  тріснутий екран або відображає незвичайні лінії і візерунки,
                  ми можемо оцінити пошкодження та замінити несправні компоненти
                  для відновлення зображення.
                </li>
                <li>
                  Проблеми з аудіо: Якщо ваш телевізор Phanasonic має проблеми
                  із звуком, такі як відсутність звуку або спотворений звук,
                  наші техніки можуть знайти причини і виправити несправності в
                  аудіосхемі.
                </li>
                <li>
                  Проблеми з підключенням: Проблеми із функціями
                  смарт-телевізора? Ми можемо виправити проблеми, пов'язані з
                  підключенням Wi-Fi, HDMI-портами та іншими мережевими
                  проблемами.
                </li>
                <li>
                  Проблеми з живленням та програмним забезпеченням: Якщо ваш
                  телевізор не вмикається, постійно перезавантажується або має
                  програмні помилки, наші експерти можуть ефективно
                  діагностувати та усунути ці проблеми.
                </li>
              </ol>
              <Styled.SubTitle>Як працює наш процес ремонту:</Styled.SubTitle>
              <ol>
                <li>
                  Діагностика: Наші техніки ретельно перевірять ваш телевізор
                  Phanasonic, щоб ідентифікувати кореневу причину проблеми.
                </li>
                <li>
                  Оцінка: Після діагностики ми надамо вам детальну оцінку
                  вартості ремонту, включаючи запчастини та роботу.
                </li>
                <li>
                  Ремонт: Після вашої згоди ми розпочнемо ремонт, використовуючи
                  оригінальні запчастини Phanasonic.
                </li>
                <li>
                  Контроль якості: Перед поверненням телевізора ми проводимо
                  ретельні перевірки, щоб забезпечити його оптимальне
                  функціонування.
                </li>
                <li>
                  Гарантія: Ми гарантуємо якість наших ремонтних робіт і надаємо
                  гарантію на використані запчастини та роботу.
                </li>
              </ol>
              <Styled.SubTitle>Висновок:</Styled.SubTitle>
              <p>
                Не дозволяйте проблемам з телевізором перешкоджати вашому
                розвагові. Довіртеся нашим професійним послугам з ремонту
                телевізорів Phanasonic, щоб оживити ваш телевізор. Зв'яжіться з
                нами сьогодні, щоб назначити ремонт і переконатися в надійності,
                ефективності та якості наших послуг з ремонту телевізорів.
              </p>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
