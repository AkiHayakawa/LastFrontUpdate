import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { musicsContext } from "../Context/musicsContext";

const Createmusics = () => {
  const navigate = useNavigate();
  const { createtrack } = useContext(musicsContext);
  const [title, setTitle] = useState("title");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [genre, setGenre] = useState("lofi");
  const [genreArrow, setGenreArrow] = useState([genre]);

  // jpg mp3
  function savetrack() {
    let newtrack = new FormData();
    newtrack.append("title", title);
    newtrack.append("file", file);
    newtrack.append("image", image);
    newtrack.append("genre", genreArrow);
    createtrack(newtrack, navigate);
    console.log(newtrack);
  }

  return (
    <div>
      <h2>Add track</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Title"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <br />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <br />
      <input
        type="file"
        accept="audio/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br />
      <button onClick={savetrack}>Save track</button>
    </div>
  );
};

export default Createmusics;
