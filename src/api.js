const fetch = require("node-fetch");

const url = "https://api.themoviedb.org/3/authentication";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjIxMjIwZGRkMDIyYmIxNDg2NDY5ZWQzMzExMzgyMCIsInN1YiI6IjY1NGIzYTBkNDFhNTYxMzM2OTNjNTA2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hziyPAPo1Cid7a5fV6Ri9Fc6zSg_AlpxE8lUJp5eOoU",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
