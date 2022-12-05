import axios from "axios";
import React, { useState } from "react";

const Test = () => {
  const [music, setMusic] = useState([]);

  const API = "http://3.71.34.7";

  async function test() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/music/tracks/`, config);
      setMusic(res.data);
      console.log(music);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {music.map((item) => {
        <div key={item.slug}>
          <h1>{item.title}</h1>
          <img src={item.image} />
        </div>;
      })}
      <button onClick={test}>GET MUSIC</button>
    </div>
  );
};

export default Test;
