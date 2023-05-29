import * as Styled from "./styles/Divider.styled";
export default function Divider() {
  return (
    <Styled.DividerSection>
      <Styled.DividerWrap>
        <Styled.LeftDivider></Styled.LeftDivider>
        <Styled.RightDivider></Styled.RightDivider>
      </Styled.DividerWrap>
    </Styled.DividerSection>
  );
}
