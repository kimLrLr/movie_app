const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";

// const nowPlayingUrl = baseUrl + "movie/now_playing" + "?language=ko-kr";
// const popularUrl = baseUrl + "movie/popular" + "?language=ko-kr";
// const ratedUrl = baseUrl + "movie/top_rated" + "?language=ko-kr";
// const upUrl = baseUrl + "movie/upcoming" + "?language=ko-kr";

const MovieUrl = (urlName) => {
  return baseUrl + `movie/${urlName}` + "?language=ko-kr";
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjIxMjIwZGRkMDIyYmIxNDg2NDY5ZWQzMzExMzgyMCIsInN1YiI6IjY1NGIzYTBkNDFhNTYxMzM2OTNjNTA2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hziyPAPo1Cid7a5fV6Ri9Fc6zSg_AlpxE8lUJp5eOoU",
  },
};

export const nowPlaying = () =>
  fetch(MovieUrl("now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(MovieUrl("popular"), options).then((res) => res.json());

export const rated = () =>
  fetch(MovieUrl("top_rated"), options).then((res) => res.json());

export const upComing = () =>
  fetch(MovieUrl("upcoming"), options).then((res) => res.json());

// export const movieDetail1 = (id) => {
//   const detailUrl = baseUrl + `movie/${id}` + "?language=ko-kr";
//   return fetch(detailUrl, options).then((res) => res.json());
// };

export const movieDetail = (id) =>
  fetch(MovieUrl(`${id}`), options).then((res) => res.json());
