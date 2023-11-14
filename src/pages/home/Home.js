import { useEffect, useState } from "react";
import styled from "styled-components";
import { nowPlaying } from "../../api";
import { IMG_URL } from "../../constants";

const MainBanner = styled.section`
  height: 80vh;
  background-color: lightgray;
  position: relative;
  padding: 400px 5%;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
  h3,
  p {
    position: relative;
  }

  h3 {
    max-width: 650px;
    width: 100%;
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 100px;
  }

  p {
    max-width: 650px;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
  }

  @media screen and (max-width: 450px) {
    h3 {
      font-size: 50px;
      line-height: 65px;
    }

    p {
      font-size: 16px;
    }
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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        // console.log(results[0].title);
        // => results는 비구조화할당으로 배열이기 때문에 위처럼 [n번째]를 사용해야함
        setNowPlayingData(results);
        // =>밖에서도 지역변수였던 results를 사용하기 위해서
        setIsLoading(false);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);

  console.log(isLoading);
  console.log(nowPlayingData);

  return (
    <>
      {isLoading ? (
        "loading..."
      ) : (
        <div>
          {nowPlayingData && (
            <MainBanner $bgUrl={nowPlayingData[0].backdrop_path}>
              <BlackBg />
              <h3>{nowPlayingData[0].title}</h3>
              <p>{nowPlayingData[0].overview.slice(0, 100) + "..."}</p>
            </MainBanner>
          )}
        </div>
      )}
    </>
  );
};
