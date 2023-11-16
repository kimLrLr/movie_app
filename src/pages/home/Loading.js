import { ClimbingBoxLoader } from "react-spinners";
import styled from "styled-components";

const SLoading = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    text-align: center;
    margin: 80px 0 0 40px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 5px;
    color: #f3e5ff;
  }
`;

export const Loading = () => {
  return (
    <SLoading>
      <ClimbingBoxLoader color="#f3e5ff" size={30} />
      <h3>Loading...</h3>
    </SLoading>
  );
};
