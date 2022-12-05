import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import { useNavigate } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "inline-flex", height: "100%" }}>
      <div className="SideBarBlock">
        <a
          href="#"
          onClick={() => navigate("/list")}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src="https://www.ixbt.com/img/n1/news/2021/4/2/spotify-logo-1920x1080-2-1536x865_large.png"
            style={{ width: "140px" }}
            alt=""
          />
        </a>

        <a
          href="#"
          onClick={() => navigate("/music")}
          style={{ display: "flex", alignItems: "center", height: "30px" }}
        >
          <HomeIcon style={{ color: "white", marginLeft: "19px" }} />
          <h5>Home</h5>
        </a>
        <a
          href="#"
          style={{ display: "flex", alignItems: "center", height: "30px" }}
        >
          <SearchIcon style={{ color: "white", marginLeft: "19px" }} />

          <h5>Search</h5>
        </a>
        <a
          href="#"
          style={{ display: "flex", alignItems: "center", height: "30px" }}
        >
          <QueueMusicIcon style={{ color: "white", marginLeft: "19px" }} />

          <h5>MyMedia</h5>
        </a>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            height: "30px",
            marginTop: "10px",
          }}
        >
          <AddBoxIcon style={{ color: "white", marginLeft: "19px" }} />

          <h5>AddPlayList</h5>
        </a>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            height: "30px",
            marginTop: "10px",
          }}
        >
          <BookmarksIcon style={{ color: "white", marginLeft: "19px" }} />

          <h5>favorite tracks</h5>
        </a>

        <hr style={{ color: "white", width: "110px" }} />
      </div>
    </div>
  );
};

export default SideBar;
