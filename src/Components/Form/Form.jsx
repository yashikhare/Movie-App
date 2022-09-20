import React, { useState } from "react";
import Result from "../Result/Result";
import './Form.css';
function Form() {
  const [movieName, setMovieName] = useState("");
  const [result, setResult] = useState({});

  const fetchData = () => {
    fetch(`https://omdbapi.com/?apikey=a5924ee&t=${movieName}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        setResult(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div id="form">
      <h1>Movie App</h1>
      <input
        type="text"
        placeholder="enter movie name"
        onChange={(e) => {
          setMovieName(e.target.value);
        }}
      ></input>
      <button onClick={fetchData}>submit</button>
      <div>
        <Result data={result}></Result>
      </div>
    </div>
  );
}
export default Form;
