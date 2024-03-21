import { useState } from "react";
import Results from "./components/Results";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordOK, setPasswordOK] = useState(false);
  const [switchpage, setSwitchpage] = useState(false);
  let checkPassword = "";
  return (
    <>
      {!switchpage && (
        <form
          id="initialForm"
          onSubmit={(event) => {
            event.preventDefault();
            // console.log(password, checkPassword);
            if (password !== checkPassword) {
              alert("Les deux mots de passe ne correspondent pas");
            } else {
              setSwitchpage(true);
            }
          }}
        >
          <h1>Create account</h1>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Jean Dupont"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="jeandupont@lereacteur.io"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="lErEaCtEuR2020"
            style={{
              border: passwordOK ? "1px solid lightgray" : "1px solid red",
            }}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="lErEaCtEuR2020"
            style={{
              border: passwordOK ? "1px solid lightgray" : "1px solid red",
            }}
            onChange={(event) => {
              checkPassword = event.target.value;
              console.log(password, checkPassword);
              if (password === checkPassword) {
                setPasswordOK(true);
              } else {
                setPasswordOK(false);
              }
            }}
          />
          {!passwordOK && (
            <span style={{ color: "red" }}>
              Les mots de passe ne sont pas identiques
            </span>
          )}
          <span></span>
          <input id="sub" type="submit" value="Register" />
        </form>
      )}
      {switchpage && (
        <Results
          username={username}
          email={email}
          password={password}
          setState={setSwitchpage}
        ></Results>
      )}
    </>
  );
};
export default Form;
