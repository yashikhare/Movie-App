import React from "react";
import "./Result.css";
function Result({ data }) {
  console.log(data?.Plot);
  return (
    <div className="resultBox">
      <img src={data?.Poster}></img>
      <div className="resultChild">
        <h2>
          {data?.Title}
        </h2>
        <h4>{data?.Actors}</h4>
        <p>{data?.Plot}</p>
      </div>
    </div>
  );
}
export default Result;
