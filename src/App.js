import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navi from "./components/Navi/Navi";
import Wall from "./components/Wall/Wall";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navi />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/wall" element={<Wall />} />
            <Route path="/dialogs" element={<Dialogs />} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
