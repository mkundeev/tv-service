import styled from "styled-components";
import Container from "@/components/common/styles/Container.styled";
import { SIZE } from "@/theme";

export const HomeServiceContainer = styled(Container)`
  padding: 60px 10px;
`;

export const HomeServiceList = styled.ul`
  display: flex;
  gap: 45px;
`;

export const HomeServiceItem = styled.li`
  width: 370px;

  box-shadow: 0px 0px 6px 0px rgba(255, 255, 255, 0.5);
  div {
    padding: 10px;
  }
  h3 {
    text-align: center;
    font-size: ${SIZE.m};
  }
  p {
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
    line-height: 1.3;
  }
`;
