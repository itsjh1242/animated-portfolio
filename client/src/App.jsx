// Global Options
// Global Style
import { GlobalStyle } from "./styles/GlobalStyle";
// Cursor Style
import Cursor from "./functions/Cursor";

// React
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Views
import Main from "./views/Main";

// Configurations
import * as Configuration from "./config";

// Styles
import * as G from "./styles/GlobalStyle";

function App() {
  const [language, setLanguage] = useState("en");
  const Config = language ? Configuration.En_Configuration : Configuration.Ko_Configuration;

  useEffect(() => {
    // Nav OnMouseOver Events
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");
    const nav = document.querySelector("[data-nav]");
    const NavMouseOver = () => {
      cursorDot.style.display = "none";
      cursorOutline.style.transform = "scale(2) translate(-50%, -50%)";
      cursorOutline.style.backgroundColor = "#ffffff";
    };
    const NavMouseLeave = () => {
      cursorDot.style.display = "block";
      cursorOutline.style.transform = "scale(1) translate(-50%, -50%)";
      cursorOutline.style.backgroundColor = "transparent";
    };
    nav.addEventListener("mouseover", NavMouseOver);
    nav.addEventListener("mouseleave", NavMouseLeave);

    return () => {
      nav.removeEventListener("mouseover", NavMouseOver);
      nav.removeEventListener("mouseleave", NavMouseLeave);
    };
  });

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Cursor />
        <G.Nav data-nav>
          <p data-nav-context>{Config.Information.Name}</p>
        </G.Nav>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
