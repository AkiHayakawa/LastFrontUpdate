import React from "react";
import TrackList from "./TrackList";
import NavbarSpotify from "./NavbarSpotify";
const Header = () => {
  return (
    <div >
      <NavbarSpotify />
      <TrackList />
    </div>
  );
};

export default Header;
