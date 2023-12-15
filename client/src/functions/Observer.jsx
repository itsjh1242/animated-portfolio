import { useState } from "react";
import styled from "styled-components";
// Configurations
import * as Configuration from "../config";
// Animate
import "animate.css";

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

// Back In Up
export function ObserverBackInUp(element, target) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        element.style.opacity = 1;
        element.style.animation = "backInUp 1s ease-in-out forwards";
      }
    });
  });
  observer.observe(target);
}

// Main Page Background Context Fade in
export function ObserverMainPageBackgroundFadeIn(target, element) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        element.style.opacity = 1;
      } else {
        element.style.opacity = 0;
      }
    });
  });
  observer.observe(target);
}

// Main Page Work Item Opacity/Scale Event
export function ObserverMainPageWorkItemEvents(target, index) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        target.style.opacity = 1;
        index % 2 === 0
          ? (target.children[0].style.transform = "translateX(-15%)") && (target.children[1].style.opacity = "1")
          : (target.children[1].style.transform = "translateX(15%)") && (target.children[0].style.opacity = "1");
      }
    });
  });
  observer.observe(target);
}
