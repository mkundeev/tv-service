import styled from "styled-components";

import Container from "@/components/common/styles/Container.styled";
import { MEDIA, SIZE } from "@/theme";

export const HomeMainContainer = styled(Container)`
  min-height: 500px;
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

export const ImageContainer = styled.div`
  display: none;
  @media ${MEDIA.laptop} {
    display: block;
    position: relative;
    width: 50%;
    height: 480px;
  }
`;
