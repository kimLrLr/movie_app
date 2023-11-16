import { useEffect, useState } from "react";
import { nowPlaying, popular, rated, upComing } from "../../api";
import { Banner } from "./Banner";
import "swiper/css";
import { ShowMovie } from "./ShowMovie";
import { Loading } from "./Loading";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export const Home = () => {
  // 1. 마운트시 api에 요청
  // 2. 비동기 통신
  // 3. 예외 처리

  const [nowPlayingData, setNowPlayingData] = useState();
  // =>밖에서도 지역변수였던 results를 사용하기 위해서 useState 사용(함수 밖으로 빼내기 위함)
  const [popData, setPopData] = useState();
  const [ratedData, setRatedData] = useState();
  const [upData, setUpData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResult } = await nowPlaying();
        // console.log(results[0].title);
        // => results는 비구조화할당으로 배열이기 때문에 위처럼 [n번째]를 사용해야함
        setNowPlayingData(nowResult);
        // =>밖에서도 지역변수였던 results를 사용하기 위해서

        const { results: popResults } = await popular();
        // => 비구조화할당에서 이름 바꾸기 위해서는 위처럼 : 뒤에 별칭을 사용할 수 있음
        setPopData(popResults);

        const { results: ratedResults } = await rated();
        setRatedData(ratedResults);

        // const data = await upComing();
        // console.log(data);

        const { results: upResults } = await upComing();
        setUpData(upResults);

        setIsLoading(false);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);

  // console.log(isLoading);
  // console.log(nowPlayingData);
  // console.log(popData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {nowPlayingData && (
            <>
              <PageTitle titleName="LrLrMovie:HOME" />
              <Banner data={nowPlayingData[0]} />
              <Layout>
                <ShowMovie
                  titleName={"현재 상영 영화"}
                  movieData={nowPlayingData}
                />
                <ShowMovie titleName={"인기 영화"} movieData={popData} />
                <ShowMovie titleName={"평점 좋은 영화"} movieData={ratedData} />
                <ShowMovie titleName={"개봉 예정작"} movieData={upData} />
              </Layout>
            </>
          )}
        </div>
      )}
    </>
  );
};
