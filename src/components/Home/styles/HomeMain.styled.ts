import styled from "styled-components";
import bg from "../../../../public/tv-main.jpg";
import Container from "@/components/common/styles/Container.styled";
import { MEDIA, SIZE } from "@/theme";

export const HomeMainContainer = styled(Container)`
  min-height: 500px;
  @media ${MEDIA.laptop} {
    background-image: url(${bg.src});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: center;
  }

  display: flex;
  align-items: center;
`;

export const TextBlock = styled.div`
  @media ${MEDIA.laptop} {
    width: 50%;
  }
`;

export const Header = styled.h2`
  text-align: center;
  @media ${MEDIA.laptop} {
    font-size: ${SIZE.xl};
  }
`;

export const Text = styled.p`
  margin-top: 20px;
  line-height: 1.5;
  text-align: justify;
`;
