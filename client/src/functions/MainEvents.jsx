import React, { useState, useEffect } from "react";
import styled from "styled-components";
// Configurations
import * as Configuration from "../config";

function MainEvents() {
  // Languages Default Changer
  const [language, setLanguage] = useState("en");
  const Config = language ? Configuration.En_Configuration : Configuration.Ko_Configuration;

  // Events Define
  window.onload = function () {
    // 마우스 커서 이벤트
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");
    // Landing Title Bottom Element
    const ltb = document.querySelector("[data-landing-title-bottom]");
    ltb.addEventListener("mouseover", () => {
      cursorDot.style.display = "none";
      cursorOutline.style.transform = "scale(2) translate(-50%, -50%)";
      cursorOutline.style.backgroundColor = "#ffffff";
    });
    ltb.addEventListener("mouseleave", () => {
      cursorDot.style.display = "block";
      cursorOutline.style.transform = "scale(1) translate(-50%, -50%)";
      cursorOutline.style.backgroundColor = "transparent";
    });

    // Observe
    // Elements
    const fi = document.querySelector("[data-first-image]");
    const fif = document.querySelector("[data-first-image-frame]");
    const nav = document.querySelector("[data-nav]");
    let fiClipPath = 30;
    let firstImageControl = true;
    // First Image Events
    const ltbObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          const currentPosY = window.scrollY;
          nav.style.opacity = 0;
          firstImageControl = true;
          fi.style.position = "fixed";
          fi.style.top = "50%";
          fi.style.left = "50%";
          fi.style.transform = "translate(-50%, -50%)";
          window.addEventListener("scroll", () => {
            if (firstImageControl) {
              fiClipPath = Math.max(0, 30 - (window.scrollY - currentPosY) * 0.02);
              fiClipPath <= 15 ? (fif.style.opacity = 0.5) : (fif.style.opacity = 1);
              fi.style.height = Math.min(window.screen.height, window.scrollY * 0.2 + 300) + "px";
              fif.style.clipPath = `inset(0% ${fiClipPath}%)`;
            }
          });
        } else {
          nav.style.opacity = 1;
          fi.style.position = "relative";
          fi.style.top = "0";
          fi.style.left = "0";
          fi.style.transform = "translate(0, 0)";
          fi.style.width = "100%";
          fi.style.height = "14%";
          firstImageControl = false;
          fif.style.clipPath = `inset(0% 30%)`;
        }
      });
    }).observe(ltb);
    // First Image Text Events
    const fit = document.querySelector("[data-first-image-text]");
    const fitObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          fit.style.opacity = 0;
        } else {
          fit.style.opacity = 1;
        }
      });
    }).observe(fit);
    // Scroll Event
    // Scroll Elements
    const lottieScrollDown = document.querySelector("[data-lottie-scrolldown]");
    window.addEventListener("scroll", () => {
      let posY = window.scrollY;
      // Lottie-ScrollDown, PosY >= 20, display none
      if (posY >= 20) {
        lottieScrollDown.style.opacity = 0;
      } else {
        lottieScrollDown.style.opacity = 1;
      }
    });
  };
}

export default MainEvents;
