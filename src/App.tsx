import React, { ReactElement } from "react";
// import logo from './logo.svg';
import "./App.css";

import GisPage from "./components/pages/GisPage";

function App(): ReactElement {
  return (
    <div className="App">
      <GisPage />
    </div>
  );
}

export default App;
