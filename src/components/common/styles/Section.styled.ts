import styled from "styled-components";
import { COLORS } from "@/theme";
type IProps = {
  $screenHeight?: boolean;
};
export const Section = styled.section`
  min-height: ${({ $screenHeight }: IProps) =>
    $screenHeight ? "calc(100vh - 200px)" : "fit-content"};
  background-color: ${COLORS.bgc};
`;

export default Section;
