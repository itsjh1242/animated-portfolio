// Global Options
// Global Style
import { GlobalStyle } from "./styles/GlobalStyle";
// Cursor Style
import Cursor from "./functions/Cursor";

// React
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Views
import Main from "./views/Main";
import Test from "./views/Test";
import Lotto from "./views/Lotto";

// Configurations
import * as Configuration from "./config";

// Styles
import * as G from "./styles/GlobalStyle";
// keyframes
import * as KeyFrames from "./styles/Keyframes.css";
// Page Transition
import { AnimatePresence } from "framer-motion";

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
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <Cursor />
      <G.Nav data-nav>
        <p data-nav-context>{Config.Information.Name}</p>
      </G.Nav>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Main Config={Config} />} />
          <Route path="/test" element={<Test />} />
          <Route path="/lotto" element={<Lotto />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
