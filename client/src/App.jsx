// Global Options
// Global Style
import { GlobalStyle } from "./styles/GlobalStyle";
// Cursor Style
import Cursor from "./functions/Cursor";

// React
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Views
import Main from "./views/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Cursor />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
