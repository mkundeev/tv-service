import styled from "styled-components";
import { BsClock } from "react-icons/bs";
import { MEDIA } from "@/theme";

export const WorkHoursContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const WorkHoursText = styled.p`
  margin-top: 5px;
  font-weight: 700;
`;

export const ClockIcon = styled(BsClock)`
  width: 24px;
  height: 24px;
  @media ${MEDIA.tablet} {
    width: 32px;
    height: 32px;
  }
`;
