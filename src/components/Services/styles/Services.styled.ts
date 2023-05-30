import Container from "@/components/common/styles/Container.styled";
import styled from "styled-components";
import { SIZE, MEDIA } from "@/theme";

export const ServicesContainer = styled(Container)`
  @media ${MEDIA.laptop} {
    display: flex;

    > div {
      flex: 1 1 0px;
    }
  }
`;

type IProps = {
  position?: "right" | "left";
};
export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: ${SIZE.l};
    text-align: center;
    margin: 10px 0;
  }
  p {
    line-height: 1.5;
    text-align: justify;
  }
  ul {
    list-style: disc;
    padding-left: 20px;
  }
  @media ${MEDIA.laptop} {
    padding-left: ${({ position }: IProps) =>
      position === "right" ? "20px" : "0"};
    padding-right: ${({ position }: IProps) =>
      position === "left" ? "20px" : "0"};
    order: ${({ position }: IProps) => (position === "left" ? -1 : 0)};
  }
`;
