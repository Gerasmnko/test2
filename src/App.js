import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navi from "./components/Navi/Navi";
import Wall from "./components/Wall/Wall";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navi />
      {/*  <div className="app-wrapper-content">
        <Dialogs />
      </div> */}
      <div className="app-wrapper-content">
        <Wall />
      </div>
    </div>
  );
};

export default App;
