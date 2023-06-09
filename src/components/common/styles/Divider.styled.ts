import { COLORS } from "@/theme";
import styled from "styled-components";

export const DividerSection = styled.div`
  background-color: ${COLORS.bgc};
`;

export const DividerWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  padding: 10px 0;
`;

export const LeftDivider = styled.div`
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, ${COLORS.divider}, transparent);
`;

export const RightDivider = styled.div`
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, transparent, ${COLORS.divider});
`;
