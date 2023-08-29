import styled from "styled-components";
import { MEDIA } from "@/theme";

export const SubTitle = styled.h2`
  font-size: 20px;
`;
export const Page = styled.div`
  p,
  li {
    font-size: 12px;
  }
  h2 {
    font-size: 18px;
    margin-bottom: 8px;
  }
  h1 {
    font-size: 22px;
  }
  li:not(:last-child) {
    margin-bottom: 4px;
  }
  ol {
    margin-top: 0;
  }

  @media ${MEDIA.tablet} {
    p,
    li {
      font-size: 14px;
    }
    h2 {
      font-size: 20px;
    }
    h1 {
      font-size: 24px;
    }
  }
`;

export const AfterTitle = styled.p`
  margin-bottom: 16px;
  margin-top: 10px;
`;

export const Warning = styled.p`
  margin-top: 10px;
  font-style: italic;
  span {
    font-weight: 700;
  }
`;
