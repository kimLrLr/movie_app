import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import { Loading } from "../home/Loading";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { useScrollTop } from "../../lib/useScrollTop";
import { mediaFont } from "../../style/GlobalStyled";

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

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    width: 93%;
    padding: 0 40px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const PosterImg = styled.div`
  background-color: salmon;
  width: 30%;
  height: 100%;
  margin-right: 80px;
  background: url(${IMG_URL}/w1280/${(props) => props.$bgUrl}) no-repeat center /
    cover;

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    width: 60%;
    margin-right: 40px;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-right: 20px;
  }
`;

const TxtWrap = styled.div`
  max-width: 600px;
  width: 100%;
  div {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    max-width: 400px;

    div {
      margin-bottom: 12px;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 400px;

    div {
      margin-bottom: 12px;
    }
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 10px;
  }
`;

const Rated = styled.div`
  font-size: 18px;
  font-weight: 500;

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Genre = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 30px;

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: ${mediaFont.tabletFontSize};
    line-height: 25px;
  }

  @media screen and (max-width: 768px) {
    font-size: ${mediaFont.mobileFontSize};
    line-height: 20px;
  }
`;

const Release = styled.div`
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: ${mediaFont.tabletFontSize};
  }

  @media screen and (max-width: 768px) {
    font-size: ${mediaFont.mobileFontSize};
  }
`;

const Runtime = styled.div`
  border-bottom: 1px solid #808080;
  padding-bottom: 40px;

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: ${mediaFont.tabletFontSize};
  }

  @media screen and (max-width: 768px) {
    font-size: ${mediaFont.mobileFontSize};
    padding-bottom: 16px;
  }
`;

const DescScroll = styled.nav`
  display: flex;
  overflow: auto;
  height: 30%;
  &::-webkit-scrollbar {
    width: 4px;
    /* height: 8px; */
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    height: 36%;
  }

  @media screen and (max-width: 768px) {
    height: 50%;
  }
`;

const Desc = styled.div`
  /* margin-top: 40px; */
  line-height: 30px;
  color: #dbdbdb;

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    /* margin-top: 30px; */
    line-height: 25px;
    font-size: ${mediaFont.tabletFontSize};
  }

  @media screen and (max-width: 768px) {
    /* margin-top: 10px; */
    line-height: 20px;
    font-size: ${mediaFont.mobileFontSize};
  }
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
                      {detailData.genres
                        .map((genre) => (
                          <li key={genre.id}>
                            <span>▹{genre.name}</span>
                          </li>
                        ))
                        .slice(0, 3)}
                    </Genre>
                    <Release>{detailData.release_date}</Release>
                    <Runtime>런타임 {detailData.runtime}분</Runtime>
                    <DescScroll>
                      <Desc>{detailData.overview} </Desc>
                    </DescScroll>
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
