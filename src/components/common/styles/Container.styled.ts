import styled from "styled-components";
import { MEDIA, BREAK_POINTS } from "@/theme";

const Container = styled.div`
  padding: 10px;
  margin: 0 auto;
  min-width: 380px;
  max-width: ${BREAK_POINTS.mobile};
  @media ${MEDIA.tablet} {
    max-width: ${BREAK_POINTS.tablet};
  }
  @media ${MEDIA.laptop} {
    max-width: ${BREAK_POINTS.laptop};
  }
`;
export default Container;
