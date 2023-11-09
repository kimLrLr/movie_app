import styled from "styled-components";

const MainBanner = styled.section`
  height: 80vh;
  background-color: lightgray;
  position: relative;
  padding: 400px 5%;
  h3,
  p {
    position: relative;
  }

  h3 {
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 100px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: teal;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 55%,
    rgba(255, 255, 255, 0) 95%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

export const Home = () => {
  return (
    <div>
      <MainBanner>
        <BlackBg />
        <h3>This Is Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sit
          eligendi ipsa officia a facilis eos nostrum, voluptas ratione
          repudiandae neque nemo at earum saepe omnis optio vero vitae
          consequuntur!
        </p>
      </MainBanner>
    </div>
  );
};
