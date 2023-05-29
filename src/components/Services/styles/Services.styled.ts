import Container from "@/components/common/styles/Container.styled";
import styled from "styled-components";

export const ServicesContainer = styled(Container)`
  display: flex;

  > div {
    flex: 1 1 0px;
  }
`;

type IProps = {
  position: "right" | "left";
};
export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: ${({ position }: IProps) =>
    position === "right" ? "20px" : "0"};
  padding-right: ${({ position }: IProps) =>
    position === "left" ? "20px" : "0"};
  h2 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 20px;
  }
  p {
    line-height: 1.5;
    text-align: justify;
  }
  ul {
    list-style: disc;
    padding-left: 20px;
  }
`;
