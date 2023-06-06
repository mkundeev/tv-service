import styled from "styled-components";
import { HEIGHT } from "@/theme";

type IProps = {
  $screenHeight?: boolean;
};
export const Section = styled.section`
  min-height: ${({ $screenHeight }: IProps) =>
    $screenHeight ? HEIGHT.section : "fit-content"};
`;

export default Section;
