import React from "react";
import Profilepi from "./Profilepi";

const Home = () => {
  const evensum = (arr) => {
    const evenarr = arr.filter((a) => a % 2 === 0);
    return evenarr.reduce((pre, curr) => pre + curr);
  };
  const evenmult = (arr) => {
    const evenarr = arr.filter((a) => a % 2 === 0);
    return evenarr.reduce((pre, curr) => pre * curr);
  };
  var numList = [1, 2, 3, 4, 5, 6];
  const esnum = evensum(numList);
  const emnum = evenmult(numList);

  return (
    <div className="mainbox">
      <Profilepi />
      <br />
      <p>
        Hi,<span class="wave">👋</span> I am{" "}
        <span className="name"> MUGILAN :</span>,
      </p>
      <h1>
        {" "}
        I am a<span className="job"> Full STACK DEVELOPER </span>
      </h1>
      <div className="about">
        I'm a web enthusiast, diving deep into Full Stack development, and
        always on the hunt for exciting web adventures. Let's code some digital
        magic together!
      </div>
    </div>
  );
};

export default Home;
