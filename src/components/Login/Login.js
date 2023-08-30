import React, { useState } from "react";
import PhoneInput, { formatPhoneNumberIntl } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./Login.css";

// Define custom option rendering function
const renderOption = ({ country, ...restProps }) => (
  <div {...restProps}>
    <span
      className={`flag-icon flag-icon-${country.countryCode.toLowerCase()}`}
    />
    {country.name}
  </div>
);

const Login = () => {
  const [activeForm, setActiveForm] = useState("login");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSwitcherClick = (form) => {
    setActiveForm(form);
  };

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  return (
    <section id="Login">
      <div className="forms-section">
        <h2 className="section-title">Rejoignez-nous</h2>
        <div className="forms">
          <div
            className={`form-wrapper ${
              activeForm === "login" ? "is-active" : ""
            }`}
          >
            <button
              type="button"
              className="switcher switcher-login"
              onClick={() => handleSwitcherClick("login")}
            >
              SE CONNECTER
              <span className="underline"></span>
            </button>
            <form className="form form-login">
              <fieldset>
                <legend>
                  Please, enter your email and password for login.
                </legend>
                <div className="input-block">
                  <label htmlFor="login-email">E-mail</label>
                  <input id="login-email" type="email" required />
                </div>
                <div className="input-block">
                  <label htmlFor="login-password">Mot de Passe</label>
                  <input id="login-password" type="password" required />
                </div>
              </fieldset>
              <button type="submit" className="btn-login">
                SE CONNECTER
              </button>
            </form>
          </div>
          <div
            className={`form-wrapper ${
              activeForm === "signup" ? "is-active" : ""
            }`}
          >
            <button
              type="button"
              className="switcher switcher-signup"
              onClick={() => handleSwitcherClick("signup")}
            >
              S'INSCRIRE
              <span className="underline"></span>
            </button>
            <form className="form form-signup">
              <fieldset>
                <legend>
                  Please, enter your email, password and password confirmation
                  for sign up.
                </legend>
                <div className="input-block">
                  <label htmlFor="signup-nom">Prenom</label>
                  <input
                    id="signup-nom"
                    className="inline-input"
                    type="text"
                    required
                  />
                  <label htmlFor="signup-prenom">Nom</label>
                  <input
                    id="signup-prenom"
                    className="inline-input"
                    type="text"
                    required
                  />
                </div>

                <div className="input-block">
                  <label htmlFor="signup-email">E-mail</label>
                  <input id="signup-email" type="email" required />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password">Mot de Passe</label>
                  <input id="signup-password" type="password" required />
                </div>
                {/* <div className="input-block">
                  <label htmlFor="signup-password-confirm">
                    Confirmez le mot de passe
                  </label>
                  <input
                    id="signup-password-confirm"
                    type="password"
                    required
                  />
                </div> */}
                {/* <div className="input-block">
                  <label htmlFor="signup-email">Adresse</label>
                  <input id="signup-email" type="text" required />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-phone">Numéro de téléphone</label>
                  <PhoneInput
                    id="signup-phone"
                    placeholder="Enter phone number"
                    defaultCountry="TN"
                    countryOptions={{ renderOption }}
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    displayInitialValueAsLocalNumber
                    required
                  />
                </div> */}

                {/* <div className="input-block">
                  <label htmlFor="signup-region">Region</label>
                  <select id="signup-region" required>
                    <option value="" disabled selected>
                      Sélectionnez une région
                    </option>
                    <option value="region1">Ariana</option>
                    <option value="region2">Béja</option>
                    <option value="region3">Ben Arous</option>
                    <option value="region4">Bizerte</option>
                    <option value="region5">Gabes</option>
                    <option value="region6">Gafsa</option>
                    <option value="region7">Jendouba</option>
                    <option value="region8">Kairouan</option>
                    <option value="region9">Kasserine</option>
                    <option value="region10">Kébili</option>
                    <option value="region11">Kef</option>
                    <option value="region12">Mahdia</option>
                    <option value="region13">Manouba</option>
                    <option value="region14">Médenine</option>
                    <option value="region15">Monastir</option>
                    <option value="region16">Nabeul</option>
                    <option value="region17">Sfax</option>
                    <option value="region18">Sidi Bouzid</option>
                    <option value="region19">Siliana</option>
                    <option value="region20">Sousse</option>
                    <option value="region21">Tataouine</option>
                    <option value="region22">Tozeur</option>
                    <option value="region23">Tunis</option>
                    <option value="region24">Zaghouan</option>
                  </select>
                </div> */}
              </fieldset>
              <button type="submit" className="btn-signup">
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
