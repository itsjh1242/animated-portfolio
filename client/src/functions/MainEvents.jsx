import React, { useEffect } from "react";
import styled from "styled-components";

function MainEvents() {
  window.onload = function () {
    // 마우스 커서 이벤트
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");
    // Landing Title Bottom Element
    const ltb = document.querySelector("[data-ltb]");
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

    // Scroll Event
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      let posY = window.scrollY;
      let posX = window.scrollX;
      // Main MacBook Image Effect
      let macBookImageScroll = 522;
      let clipPathValue = 30;
      let macBookImageHeight = 500;
      // Sliding Intro
      let slidingIntro = document.querySelectorAll("[data-IntroItem]");
      let slidingIntroViewPort = [1254, 1600, 1900];

      // Y 128
      if (posY >= 128) {
        document.querySelector("[data-nav]").style.opacity = 0;
      } else {
        document.querySelector("[data-nav]").style.opacity = 1;
      }
      // Y 604
      let dmf = document.querySelector("[data-macbook-frame]");
      let dmi = document.querySelector("[data-macbook-image]");
      if (posY < macBookImageScroll) {
        // Style
        dmf.style.position = "relative";
        dmf.style.top = "0";
        dmf.style.left = "0";
        dmf.style.transform = "translate(0, 0)";
        dmf.style.clipPath = `inset(0% 30%)`;
        dmf.style.transform = "translateY(-25%)";
      }
      // Image Mouse Scroll Event
      if (posY >= macBookImageScroll) {
        // Style
        dmf.style.position = "fixed";
        dmf.style.top = "50%";
        dmf.style.left = "50%";
        dmf.style.transform = "translate(-50%, -50%)";
        // Effect of Image Width
        clipPathValue = clipPathValue - (posY - macBookImageScroll) * 0.07;
        dmf.style.clipPath = `inset(0% ${clipPathValue}%)`;
        // 스크롤 시 현재 스크린 화면 높이에 맞춰서 이미지 높이 조절
        macBookImageHeight = Math.min(window.screen.height, macBookImageHeight + (posY - 604) * 0.5);
        dmi.style.height = `${macBookImageHeight}px`;
        if (posY >= window.screen.height) {
          dmi.style.opacity = 0.2;
        } else {
          dmi.style.opacity = 1;
        }
      } else {
        dmi.style.height = "500px";
      }

      // Sliding Intro Effect
      slidingIntroViewPort.forEach((item, index) => {
        if (posY >= item) {
          slidingIntro[index].style.color = "#d3d3d3";
        } else {
          slidingIntro[index].style.color = "transparent";
        }
      });
    });
  };
}

export default MainEvents;
