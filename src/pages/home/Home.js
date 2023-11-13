import { useEffect, useState } from "react";
import styled from "styled-components";
import { nowPlaying } from "../../api";

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
  // 1. 마운트시 api에 요청
  // 2. 비동기 통신
  // 3. 예외 처리

  const [nowPlayingData, setNowPlayingData] = useState();
  // =>밖에서도 지역변수였던 results를 사용하기 위해서 useState 사용(함수 밖으로 빼내기 위함)

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        // console.log(results[0].title);
        // => results는 비구조화할당으로 배열이기 때문에 위처럼 [n번째]를 사용해야함
        setNowPlayingData(results);
        // =>밖에서도 지역변수였던 results를 사용하기 위해서
        setLoading(false);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);

  console.log(loading);
  console.log(nowPlayingData);

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <div>
          {nowPlayingData && (
            <MainBanner>
              <BlackBg />
              <h3>{nowPlayingData[0].title}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                sit eligendi ipsa officia a facilis eos nostrum, voluptas
                ratione repudiandae neque nemo at earum saepe omnis optio vero
                vitae consequuntur!
              </p>
            </MainBanner>
          )}
        </div>
      )}
    </>
  );
};
