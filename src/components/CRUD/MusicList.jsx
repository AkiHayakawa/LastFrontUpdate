import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { musicsContext } from "../Context/musicsContext";
import NavbarSpotify from "../NavbarSpotify";
const MusicList = () => {
  const { getmusics, musics, deletetrack } = useContext(musicsContext);
  console.log(musics);
  useEffect(() => {
    getmusics();
  }, []);
  const navigate = useNavigate();

  return (

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: "200px",
      }}
    >
      <div
        className="CardList"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <h2>Made for Guilherme Dourado</h2>
        <div className="List">
          {musics?.map((item) => (
            <div key={item.slug}>
              <a className="ListBlock" href="#" onClick={() => navigate(`/music/tracks${item.slug}`)}>
                <img className="ListImg" src={item.image} alt="" />
                <h3 style={{ margin: "10px" }}> {item.title}</h3>
                <h3 style={{ margin: "10px" }}> {item.file}</h3>
                {/* <h5 style={{ margin: "10px" }}>{item.user}</h5> */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default MusicList;
