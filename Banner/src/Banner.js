import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./web-banner";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(async () => {
    const request = await axios.get(requests.fetchNetflixOriginals);
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ]
    );
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
      <web-banner
          img={`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}
          banner-title={movie?.title || movie?.name || movie?.original_name}
          banner-description={truncate(movie?.overview, 150)}
      ></web-banner>
  );
}

export default Banner;
