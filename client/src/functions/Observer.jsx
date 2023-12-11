import { useState } from "react";
import styled from "styled-components";
// Configurations
import * as Configuration from "../config";

// Bounce Effect
export function ObserverBounce(target) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        target.style.animation = "bounce 0.5s ease-in-out forwards";
        target.style.delay = "0.5s";
      } else {
        target.style.animation = "none";
      }
    });
  });
  observer.observe(target);
}

// Width Changer
export function ObserverWidth(target, startWidth) {
  let posY = 0;
  let elementOffsetTop = 0;

  window.addEventListener("scroll", () => {
    posY = window.scrollY;
    elementOffsetTop = target.offsetTop;
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && posY <= elementOffsetTop) {
        console.log(posY, elementOffsetTop);
        target.style.width = "100%";
      } else if (!entry.isIntersecting && posY <= elementOffsetTop) {
        target.style.width = startWidth;
      }
    });
  });
  observer.observe(target);
}
