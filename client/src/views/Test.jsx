// React
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Mobile, PC } from "../functions/DeviceDectect";
import * as Configuration from "../config";
// Font
import "../styles/Font.css";
// Styles
import * as G from "../styles/GlobalStyle";
// keyframes
import * as KeyFrames from "../styles/Keyframes.css";
// Page Transition
import PageTransition from "../functions/PageTransition";
import { motion } from "framer-motion";

const Test = (props) => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default PageTransition(Test);
