import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navi from "./components/Navi/Navi";
import Wall from "./components/Wall/Wall";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navi />
      <Wall />
    </div>
  );
};

export default App;
