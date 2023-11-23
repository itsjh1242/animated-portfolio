import React, { useEffect } from "react";
import styled from "styled-components";

const CursorDot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 999;
  pointer-events: none;
  width: 8px;
  height: 8px;
  background-color: #d3d3d3;
`;

const CursorOutline = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 999;
  pointer-events: none;
  width: 30px;
  height: 30px;
  border: 2px solid hsla(0, 0%, 100%, 0.5);
  transition: all 150ms ease-out;
`;

function MouseTracker() {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    const updateMousePosition = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    };

    const handleMouseActive = () => {
      cursorOutline.style.transform = "scale(1.1)";
    };

    const handleMouseInactive = () => {
      cursorOutline.style.transform = "scale(1)";
    };

    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mousedown", handleMouseActive);
    document.addEventListener("mouseup", handleMouseInactive);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mousedown", handleMouseActive);
      document.removeEventListener("mouseup", handleMouseInactive);
    };
  }, []);

  return (
    <>
      <CursorDot data-cursor-dot />
      <CursorOutline data-cursor-outline />
    </>
  );
}

export default MouseTracker;
