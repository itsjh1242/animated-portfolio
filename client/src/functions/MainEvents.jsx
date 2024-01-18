import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Observer Events
import * as OBS from "../functions/Observer";
// Animate
import "animate.css";

const MainEvents = (props) => {
  const Config = props.Config;
  let posY = window.scrollY;

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
              fi.style.height = Math.min(100, window.scrollY * 0.1 + 14) + "%";
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
    const secondSectionStack = document.querySelector("[data-second-section-stack]");
    const secondSectionBgContext = document.querySelector("[data-second-section-bg-context]");
    OBS.ObserverMainPageBackgroundFadeIn(secondSectionStack, secondSectionBgContext);
    const secondSectionStackItem = document.querySelectorAll("[data-second-section-stack-item]");
    secondSectionStackItem.forEach((item) => {
      item.addEventListener("mouseover", () => {
        item.style.opacity = 0;
        cursorDot.children[0].innerText = item.id;
        cursorDot.children[0].style.fontSize = "2rem";
        cursorOutline.style.border = "none";
        cursorOutline.style.borderRadius = "0";
        cursorOutline.style.width = "200px";
        cursorOutline.style.height = "200px";
        cursorOutline.style.backgroundImage = "url(./stacks/" + item.id + ".png)";
      });
      item.addEventListener("mouseleave", () => {
        item.style.opacity = 1;
        cursorDot.children[0].innerText = "";
        cursorOutline.style.border = "1px solid #d3d3d3";
        cursorOutline.style.borderRadius = "50%";
        cursorOutline.style.width = "30px";
        cursorOutline.style.height = "30px";
        cursorOutline.style.backgroundImage = "none";
      });
    });

    // Work Section Events
    const workSection = document.querySelector("[data-work-section]");
    const workSectionBgContext = document.querySelector("[data-work-section-bg-context]");
    OBS.ObserverMainPageBackgroundFadeIn(workSection, workSectionBgContext);
    // Work Section Item Opacity Events
    const workSectionItem = document.querySelectorAll("[data-work-section-item]");
    workSectionItem.forEach((item, index) => {
      const _item = index % 2 === 0 ? item.children[0] : item.children[1];
      OBS.ObserverMainPageWorkItemEvents(item, item.id);
      _item.addEventListener("mouseover", () => {
        cursorDot.children[0].innerText = "[OPEN]";
        cursorDot.children[0].style.fontSize = "1.5rem";
        cursorDot.children[0].style.transition = "all 1s ease-in-out";
        cursorOutline.style.border = "none";
        cursorOutline.style.backgroundColor = "gray";
        cursorOutline.style.width = "100px";
        cursorOutline.style.height = "100px";
        cursorOutline.style.mixBlendMode = "normal";
        cursorOutline.style.opacity = "0.5";
      });
      _item.addEventListener("mouseleave", () => {
        cursorDot.children[0].innerText = "";
        cursorDot.children[0].style.fontSize = "1rem";
        cursorOutline.style.border = "1px solid #d3d3d3";
        cursorOutline.style.backgroundColor = "transparent";
        cursorOutline.style.width = "30px";
        cursorOutline.style.height = "30px";
        cursorOutline.style.mixBlendMode = "difference";
        cursorOutline.style.opacity = "1";
      });
    });

    const workSectionBtn = document.querySelector("[data-work-section-btn]");
    workSectionBtn.addEventListener("mouseover", (e) => {
      cursorDot.style.display = "none";
      cursorOutline.style.border = "none";
    });
    workSectionBtn.addEventListener("mouseleave", (e) => {
      cursorDot.style.display = "block";
      cursorOutline.style.border = "1px solid #d3d3d3";
    });
  };
};

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

export default MainEvents;
