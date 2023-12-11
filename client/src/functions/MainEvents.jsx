import React, { useState, useEffect } from "react";
import styled from "styled-components";
// Configurations
import * as Configuration from "../config";
// Observer Events
import * as OBS from "../functions/Observer";

function MainEvents() {
  let posY = window.scrollY;
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
      CursorScaleEvent(cursorDot, cursorOutline, "over");
    });
    ltb.addEventListener("mouseleave", () => {
      CursorScaleEvent(cursorDot, cursorOutline, "leave");
    });

    // Observe
    // Elements
    const fi = document.querySelector("[data-first-image]");
    const fif = document.querySelector("[data-first-image-frame]");
    const fift = document.querySelector("[data-first-image-this]");
    const nav = document.querySelector("[data-nav]");
    let fiClipPath = 30;
    let firstImageControl = true;
    // First Image Events
    const ltbObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          const currentPosY = window.scrollY;
          nav.style.opacity = 0;
          nav.style.visibility = "hidden";
          firstImageControl = true;
          fi.style.position = "fixed";
          fi.style.top = "50%";
          fi.style.left = "50%";
          fi.style.transform = "translate(-50%, -50%)";
          window.addEventListener("scroll", () => {
            if (firstImageControl) {
              fiClipPath = Math.max(0, 30 - (window.scrollY - currentPosY) * 0.02);
              fiClipPath <= 15 ? (fift.style.opacity = 0.5) : (fift.style.opacity = 1);
              fi.style.height = Math.min(100, window.scrollY * 0.05 + 14) + "%";
              fif.style.clipPath = `inset(0% ${fiClipPath}%)`;
            }
          });
        } else {
          nav.style.opacity = 1;
          nav.style.visibility = "visible";
          fi.style.position = "relative";
          fi.style.top = "0";
          fi.style.left = "0";
          fi.style.transform = "translate(0, 0)";
          fi.style.width = "100%";
          fi.style.height = "14%";
          fif.style.clipPath = `inset(0% 30%)`;
          firstImageControl = false;
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
      // Lottie-ScrollDown, PosY >= 20, display none
      if (posY >= 20) {
        lottieScrollDown.style.opacity = 0;
      } else {
        lottieScrollDown.style.opacity = 1;
      }
    });
    // First Section Context Effects
    const fsc = document.querySelectorAll("[data-first-section-context]");
    const secondContainer = document.querySelector("[data-second-container]");
    let secondContainerDetect = false;
    const fscObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          entry.target.style.opacity = 0;
        } else {
          entry.target.style.opacity = 1;
        }
      });
    }).observe(fsc[2]);
    fsc[2].addEventListener("mouseover", () => {
      CursorScaleEvent(cursorDot, cursorOutline, "over");
    });
    fsc[2].addEventListener("mouseleave", () => {
      CursorScaleEvent(cursorDot, cursorOutline, "leave");
    });

    // Second Section Events
    // End of first section events
    const secondSection = document.querySelector("[data-second-section]");
    const secondSectionBg = document.querySelector("[data-second-section-bg]");
    const secondSectionTitle = document.querySelector("[data-second-section-title]");
    OBS.ObserverWidth(secondSection, "50%");
    // Stacks Items
    const stacksItems = document.querySelectorAll("[data-second-section-grid-item]");
    StackItemEvent(secondSectionTitle, secondSectionBg, stacksItems, cursorDot, cursorOutline);
  };
}

function CursorScaleEvent(cursorDot, cursorOutline, method) {
  if (method === "over") {
    cursorDot.style.display = "none";
    cursorOutline.style.transform = "scale(2) translate(-50%, -50%)";
    cursorOutline.style.backgroundColor = "#ffffff";
  } else {
    cursorDot.style.display = "block";
    cursorOutline.style.transform = "scale(1) translate(-50%, -50%)";
    cursorOutline.style.backgroundColor = "transparent";
  }
}

function StackItemEvent(title, section, items, cursorDot, cursorOutline) {
  // Cursor Event
  items.forEach((item) => {
    item.children[0].addEventListener("mouseover", () => {
      title.style.opacity = 0;
      section.style.opacity = 1;
      section.style.animation = "bgLeftToRight 5s ease-in-out forwards";
      items.forEach((item_) => {
        item_.style.opacity = 0;
      });
      cursorDot.style.display = "none";
      cursorOutline.style.display = "none";
      item.children[0].style.transform = "scale(1.1)";
    });
    item.children[0].addEventListener("mouseleave", () => {
      title.style.opacity = 1;
      section.style.opacity = 0;
      items.forEach((item_) => {
        item_.style.opacity = 1;
      });
      cursorDot.style.display = "block";
      cursorOutline.style.display = "block ";
      item.children[0].style.transform = "scale(1)";
    });
  });
}

export default MainEvents;
