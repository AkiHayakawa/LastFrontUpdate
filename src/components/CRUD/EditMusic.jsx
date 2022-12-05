import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { musicsContext } from "../Context/musicsContext";

const EditMusic = () => {
  const { getOnetrack, onetrack, updatetrack } = useContext(musicsContext);

  const { slug } = useParams();

  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [track, setTrack] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    getOnetrack(slug);
  }, []);

  useEffect(() => {
    if (onetrack) {
      setUser(onetrack.user);
      setTitle(onetrack.title);
      setTrack(onetrack.track);
      setImage(onetrack.image);
    }
  }, [onetrack]);

  function saveChanges() {
    if (!title || !user || !track || !image) {
      alert("Some inputs are empty!");
      return;
    }

    let editGame = {
      title,
      track,
      user,
      image,
    };

    updatetrack(slug, editGame);
    navigate("/games");
  }

  return onetrack ? (
    <div className="InputDiv">
      <TextField
        className="Input"
        id="outlined-search"
        label="Title"
        type="search"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        className="Input"
        id="outlined-search"
        label="Img"
        type="search"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <TextField
        className="Input"
        id="outlined-search"
        label="user"
        type="search"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <TextField
        className="Input"
        id="outlined-search"
        label="track"
        type="search"
        value={track}
        onChange={(e) => setTrack(e.target.value)}
      />
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={() => {
            saveChanges();
            navigate("/");
          }}
        >
          Save Changes
        </Button>
      </Stack>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default EditMusic;
