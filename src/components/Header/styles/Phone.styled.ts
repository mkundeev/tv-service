import styled from "styled-components";

export const PhoneContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  width: fit-content;
`;
type IProps = {
  $mobHeader?: boolean;
};
export const PhoneList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${({ $mobHeader }: IProps) => ($mobHeader ? "5px" : "10px")};
  grid-row-gap: 5px;
  a {
    display: block;
    font-size: ${({ $mobHeader }: IProps) => ($mobHeader ? "10px" : "14px")};
  }
`;
