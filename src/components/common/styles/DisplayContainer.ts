import styled from "styled-components";
import { IDisplayProps } from "@/types/types";
import { MEDIA } from "@/theme";

const DisplayContainer = styled.div`
  display: ${({ display }: IDisplayProps) =>
    display === "mobile" ? "flex" : "none"};
  @media ${MEDIA.tablet} {
    display: ${({ display }: IDisplayProps) =>
      display === "tabl" || display === "tabl&laptop" ? "flex" : "none"};
  }
  @media ${MEDIA.laptop} {
    display: ${({ display }: IDisplayProps) =>
      display === "laptop" || display === "tabl&laptop" ? "flex" : "none"};
  }
`;

export default DisplayContainer;
