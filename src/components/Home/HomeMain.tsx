import Container from "@/styles/container.styled";
import * as Styled from "./styles/HomeMain.styled";
import { useRouter } from "next/router";

export default function HomeMain() {
  const { locale } = useRouter();
  return (
    <Styled.Section>
      <Styled.HomeMainContainer>
        <Styled.TextBlock>
          {locale === "ua" ? (
            <>
              <h2>Наші послуги</h2>
              <p>
                Наша компанія надає послуги з ремонту, діагностики та
                налаштування телевізорів. Надаємо послуги безпосередньо вдома у
                клієнтів або в майстерні. Обслуговуємо будь-які райони Києва. Ми
                ремонтуємо плазмові, рідкокристалічні (LCD), ЕЛТ (кінескопні),
                LED та проекційні телевізори. Нашою основною спеціалізацією є
                якісний та оперативний ремонт телевізорів усіх популярних
                виробників: Samsung, Sony, LG, Philips, BBK, Bravis, Ergo,
                Ericsson, Funai, Grundig, JVC, Kivi, Panasonic, Pioneer,
                Rainford, Sharp, TCL, Thomson, Toshiba , Xiaomi. Всі наші
                майстри мають відповідну кваліфікацію та досвіду в ремонті
                телевізорів різних моделей. Професійний майстер проведе
                діагностику і з точністю визначить причину поломки телевізора,
                підбере потрібні деталі та комплектуючі для ремонту. Ми
                відремонтуємо та налаштуємо ваш телевізор якісно та недорого, та
                ще й з гарантією.
              </p>
            </>
          ) : (
            <>
              <h2>Наши услуги</h2>
              <p>
                Наша компания предоставляет услуги по ремонту, диагностике и
                настройке телевизоров. Предоставляем услуги непосредственно дома
                у клиентов или в мастерской. Обслуживаем любые районы Киева.
                Ремонтируем плазменные, жидкокристаллические (LCD), ЭЛТ
                (кинескопные), LED и проекционные телевизоры. Наша основная
                специализация – качественный и оперативный ремонт телевизоров
                всех популярных производителей: Samsung, Sony, LG, Philips, BBK,
                Bravis, Ergo, Ericsson, Funai, Grundig, JVC, Kivi, Panasonic,
                Pioneer, Rainford, Sharp, TCL, Thomson, Toshiba , Xiaomi. Все
                наши мастера имеют соответствующую квалификацию и опыт в ремонте
                телевизоров разных моделей. Профессиональный мастер проведет
                диагностику и с точностью определит причину поломки телевизора,
                подберет детали и комплектующие для ремонта. Мы отремонтируем и
                настроим ваш телевизор качественно и недорого, да еще с
                гарантией.
              </p>
            </>
          )}
        </Styled.TextBlock>
      </Styled.HomeMainContainer>
    </Styled.Section>
  );
}
