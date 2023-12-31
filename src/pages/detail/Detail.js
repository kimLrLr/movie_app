import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import { Loading } from "../home/Loading";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { useScrollTop } from "../../lib/useScrollTop";

const Con = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 85%;
  height: 60%;
  display: flex;
  padding: 0 80px;
`;

const PosterImg = styled.div`
  background-color: salmon;
  width: 30%;
  height: 100%;
  margin-right: 80px;
  background: url(${IMG_URL}/w1280/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;

const TxtWrap = styled.div`
  max-width: 600px;
  width: 100%;
  div {
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  margin-bottom: 20px;
`;

const Rated = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const Genre = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 30px;
`;

const Release = styled.div``;

const Runtime = styled.div`
  border-bottom: 1px solid #808080;
  padding-bottom: 40px;
`;

const Desc = styled.div`
  margin-top: 40px;
  line-height: 30px;
  color: #dbdbdb;
`;

export const Detail = () => {
  const { id } = useParams();
  // =>다른 곳에서도 사용할 수 있도록 useParams사용
  // console.log(id);
  const [detailData, setDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const detailData = await movieDetail(id);
        // console.log(detailData);
        setDetailData(detailData);
        setIsLoading(false);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {movieDetail && (
            <>
              <Con>
                <Wrap>
                  <PosterImg $bgUrl={detailData.poster_path} />
                  <TxtWrap>
                    <Title>{detailData.title}</Title>
                    <Rated>평점 {Math.round(detailData.vote_average)}점</Rated>
                    <Genre>
                      {detailData.genres.map((genre) => (
                        <li key={genre.id}>
                          <span>▹{genre.name}</span>
                        </li>
                      ))}
                    </Genre>
                    <Release>{detailData.release_date}</Release>
                    <Runtime>런타임 {detailData.runtime}분</Runtime>
                    <Desc>{detailData.overview} </Desc>
                  </TxtWrap>
                </Wrap>
              </Con>
            </>
          )}
        </>
      )}
    </>
  );
};
