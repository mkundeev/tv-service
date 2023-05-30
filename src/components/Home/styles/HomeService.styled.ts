import styled from "styled-components";
import Container from "@/components/common/styles/Container.styled";
import { SIZE } from "@/theme";

export const HomeServiceContainer = styled(Container)`
  padding: 60px 10px;
`;

export const HomeServiceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

export const HomeServiceItem = styled.li`
  /* width: 370px; */
  display: flex;
  box-shadow: 0px 0px 6px 0px rgba(255, 255, 255, 0.5);
  h3 {
    text-align: center;
    font-size: ${SIZE.m};
  }
  p {
    text-align: center;

    margin-top: 10px;
  }
  :nth-child(2n) {
    flex-direction: row-reverse;
  }
`;

export const ImageService = styled.img`
  width: 50%;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
