import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import { Banner } from "./Banner";

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
        <div>{nowPlayingData && <Banner data={nowPlayingData[0]} />}</div>
      )}
    </>
  );
};
