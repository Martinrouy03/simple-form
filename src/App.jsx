import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
library.add(faEye);
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Form></Form>
    </>
  );
}

export default App;
