import { COLORS } from "@/theme";
import styled from "styled-components";

export const PhoneContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const PhoneList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 5px;
`;

export const PhoneItem = styled.li`
  :hover {
    color: ${COLORS.primary};
  }
`;
