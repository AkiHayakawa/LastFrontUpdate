import React, { useState } from "react";
import "../Account/login.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContextProvider";
import Swal from "sweetalert2";
import RestorePassword from "./RestorePassword/RestorePassword";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { handleLogin, loading } = useAuth();

  function loginUser() {
    if (!password.trim() || !username.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Оопс...",
        text: "Некоторые поля пустые!",
      });
      return;
    }
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    handleLogin(formData, username, navigate);
    // naviagte("/logout");
  }

  if (loading) {
    console.log("LOADING....");
  }

  return (
    <div className="login_main_block">
      <div className="login_navabar_block">
        <img
          className="login_navbar_icon"
          src="data:image/png;base64,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"
        />
      </div>
      <div>
        <p className="login_title p">
          Чтобы продолжить, войдите в <strong>Spotify.</strong>
        </p>
        <div className="login_block_faceAndGoog">
          <button
            className="login_facebook_button"
            onClick={() =>
              window.open(
                "https://www.facebook.com/login.php?skip_api_login=1&api_key=174829003346&kid_directed_site=0&app_id=174829003346&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv7.0%2Fdialog%2Foauth%3Fclient_id%3D174829003346%26state%3DAQB%252FzZGuUVVg5B9%252FJWPojroOALWVkWX9JwWvmk57ah71rFxxAbUsUQIvXuo5biUGghRgW5nvTByOVHTqJYloIPSEBsXNx4M98ca3Am2DW0fRwE3gI%252FP%252B9GXlDiOO%252BexxFl3V65pK02YC%252Bix%252FilyrzMoOpLdxtZ6lVeKsAwP4j0CUrnjTu%252BbcxA7bPiIP3D6qHo0ga6vwSs2SaPPyBiSAXtoLakJo0Z4xNOlKr0IMgFv7P572Syf15PJayg%253D%253D%26redirect_uri%3Dhttps%253A%252F%252Faccounts.spotify.com%252Flogin%252Ffacebook%252Fredirect%252Fsignup%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D9aa864fa-75b6-41f3-9948-117709ea8674%26tp%3Dunspecified&cancel_url=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Ffacebook%2Fredirect%2Fsignup%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DAQB%252FzZGuUVVg5B9%252FJWPojroOALWVkWX9JwWvmk57ah71rFxxAbUsUQIvXuo5biUGghRgW5nvTByOVHTqJYloIPSEBsXNx4M98ca3Am2DW0fRwE3gI%252FP%252B9GXlDiOO%252BexxFl3V65pK02YC%252Bix%252FilyrzMoOpLdxtZ6lVeKsAwP4j0CUrnjTu%252BbcxA7bPiIP3D6qHo0ga6vwSs2SaPPyBiSAXtoLakJo0Z4xNOlKr0IMgFv7P572Syf15PJayg%253D%253D%23_%3D_&display=page&locale=ru_RU&pl_dbl=0"
              )
            }>
            <div className="login_miniBlock_facebook">
              <FacebookIcon className="login_facebook_icon" />
              Войти через Facebok
            </div>
          </button>
          <button
            className="login_apple_button"
            onClick={() =>
              window.open(
                "https://appleid.apple.com/auth/authorize?client_id=com.spotify.accounts&response_type=code&response_mode=form_post&scope=name%20email&state=AQAphdXUbv4cT2eYRTZj96AmjUiqRJv3YJ9k92Qe%2FOclKWossKPCTZ1C%2BnmBUkKCUl0NwMeTahN4AMa1qbOULLHLFT4L7DNM34j29ppOY%2F4SNaPRPLlpwdP12DBHYuH9RM3suT32HwY9Ayv9JLs2gWXZFM1b5A7iuuykVB%2FmIH9xl2vzk8YlEwS8pyCs5idwv0EY7boo%2BxaZf6o7qR3qBnluzsOC1k78w9fbGJ8SQH68cveYSRxYLc%2BuBFqLcqMTiZHZvXcftGoM3o5RDY5TYU9EtXK25pz2Si2qo0t40Lccs%2Fn3TXDLesjUpE013dV8RDDYNZQKSlsQ4vr44b8rjKHyThUoOvV%2BA0wx9FWyIGZYlpQbe%2BCPR0UyTXueYyoUThROzNROr4Zd3Qxt%2BEWSddMkXnvyWK6%2FOCwe1TAbRLsOVsEl99n4Nb1cIq6dlwBkeVP3gXNhxpOOaXamJFwaer9GSuKOVd%2BtbRcNk1lKT3nXSgNup7gkJKkTvHEs4ZueVL4ogOTooQ6OHwIhwFyJsEA6%2BSLP750fi18%2BmGpLM5RfRavcOm2QVwcNPvmmbWAz%2FaJBGRn10Qwqmi1QXDS3ZjETTGsJJ9MtYmpGwEVlJKOn0JwEiQfMN2A545ytOXfVjL85wSTx2KZzLWIffCSMmGvJ&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Fapple%2Fredirect"
              )
            }>
            <div className="login_miniBlock_apple">
              <img
                src="https://cdn-icons-png.flaticon.com/512/882/882602.png"
                className="login_apple_icon"
              />
              Войти через Apple
            </div>
          </button>
          <button
            className="login_google_button"
            onClick={() =>
              window.open(
                "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&access_type=offline&client_id=1046568431490-ij1gi5shcp2gtorls09frkc56d4mjbe2.apps.googleusercontent.com&state=AQA5RqWRhdEIZwDmpoIllch8mdHwsXd%2F3esfZvcysAMacEU7xlWXb5C58aS2HE01kW5xP79WIO1DVPZJDca37o9XpR%2BtYojSOeoZeMMqWLn0PzkFh9tm73mLUYHhsrDDNdLU3isUkL%2FADzHgIWW7TqeBUbM8WoWVOEhZO6C%2FUKf98Y7yZzQntoJHWPZZTjCOFuo%2BwLF2UqZdC74rkSkZaKCcgJrvLFQ9teyU0aAsYG67WYEBOQ7iLb6Klg%3D%3D&scope=profile%20email%20openid&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Fgoogle%2Fredirect%2Fsignup&service=lso&o2v=2&flowName=GeneralOAuthFlow"
              )
            }>
            <div className="login_miniBlock_google">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
                className="login_google_icon"
              />
              Войти через Google
            </div>
          </button>
          <div className="eee">
            {/* <span class="FormDivider__LineThrough-sc-1mk5332-0 kYmSyX"></span> */}
            <span style={{ color: "rgb(127, 127, 127)" }}>или</span>
          </div>
        </div>
        <div className="login_inputs_main_block">
          <div className="login_block_input">
            <h3 className="login_input_titile">Имя пользователя</h3>

            <TextField
              className="login_inputs"
              // id="outlined-error-helper-text"
              placeholder="Имя пользователя"
              helperText="Incorrect entry."
              type="text"
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="login_block_input">
            <h3 className="login_input_titile">Пароль</h3>

            <TextField
              // error
              className="login_inputs"
              // id="outlined-error-helper-text"
              placeholder="Пароль"
              // helperText={email}
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="login_button_block">
          <Link className="login_password_restore" to="/restore-pass">
            Забыли пароль?
          </Link>
          <button className="login_button" onClick={loginUser}>
            ВОЙТИ
          </button>
        </div>
        <div className="login_hr_footer_block">
          <hr />
        </div>
        <div className="login_footer">
          <h4 className="login_footer_title">Нет аккаунта?</h4>
          <button
            className="login_footer_button"
            onClick={() => navigate("/register")}>
            Регистрация в Spotify
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
