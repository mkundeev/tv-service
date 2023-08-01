import { useRouter } from "next/router";
import { useMedia } from "react-use";
import * as Styled from "./styles/HomeBrands.styled";
import * as Icons from "@/svg";
import { COLORS, MEDIA } from "@/theme";
import bg from "../../../public/bcg-brands.jpg";
import { ImageContainer } from "../common/styles/ImageContainer.styled";
import Image from "next/image";

export default function HomeBrands() {
  const { locale } = useRouter();
  const isLaptop = useMedia(MEDIA.laptop, false);

  return (
    <Styled.HomeBrandsSection>
      <ImageContainer>
        <Image
          src={bg}
          alt={locale === "ua" ? "Ремонт телевізорів всіх марок" : "всех марок"}
          fill
          style={{ objectFit: "cover" }}
          sizes="100vh"
        />
      </ImageContainer>
      <Styled.HomeBrandsContainer>
        <Styled.Title>
          {locale === "ua"
            ? "Ми ремонтуємо телевізори всіх марок"
            : "Мы ремонтируем телевизоры всех марок"}
        </Styled.Title>
        <Styled.BrandsList>
          {Object.values(Icons)?.map((Element, index) => (
            <li key={index}>
              <Element fill={COLORS.accent} height={isLaptop ? 50 : 30} />
            </li>
          ))}
        </Styled.BrandsList>
      </Styled.HomeBrandsContainer>
    </Styled.HomeBrandsSection>
  );
}
