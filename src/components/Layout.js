import styled from "styled-components";

const Container = styled.div`
  padding: 150px 5%;
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
// => 레이아웃을 고정하는 느낌으로 children 사용하는데 이름은 바꾸면 x
