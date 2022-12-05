import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Createmusics from "./components/CRUD/Createmusics";
import Header from "./components/Header";
import MusicsContextProvider from "./components/Context/musicsContext";
import MusicList from "./components/CRUD/MusicList";
import DetailsMusic from "./components/CRUD/DetailsMusic";
import EditMusic from "./components/CRUD/EditMusic";
import RegisterPage from "./Account/RegisterPage";
import LoginPage from "./Account/LoginPage";
import PreviewPage from "./PreviewPage/PreviewPage";
import LogOut from "./logOut/LogOut";
import RestorePassword from "./Account/RestorePassword/RestorePassword";
import AuthContextProvider from "./Account/AuthContextProvider";
import NavbarSpotify from "./components/NavbarSpotify";
import Test from "./Account/RestorePassword/test/Test";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <MusicsContextProvider>
          <AuthContextProvider>
            <div style={{ display: "flex" }} >
            <SideBar/>
            <div style={{ display: "flex",flexDirection:'column' }}>
              <NavbarSpotify />

              <Routes>
                <Route path="/music" element={<MusicList />} />
                <Route path="/music/tracks/:slug" element={<DetailsMusic />} />
                <Route path="/update/:slug" element={<EditMusic />} />
                <Route path="/list" element={<Header />} />
                <Route path="/create" element={<Createmusics />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/prev-page" element={<PreviewPage />} />
                <Route path="/logout" element={<LogOut />} />
                <Route path="/restore-pass" element={<RestorePassword />} />
                {/* <Route path="/test" element={<Test />} /> */}
              </Routes>
            </div>
            </div>
          </AuthContextProvider>
        </MusicsContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
