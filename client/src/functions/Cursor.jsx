import React, { useEffect } from "react";
import styled from "styled-components";

const CursorDot = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 999;
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

  & > p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "En Bold";
    font-size: 18px;
    line-height: 10px;
    color: #ffffff;
  }
`;

const CursorOutline = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 998;
  pointer-events: none;
  width: 30px;
  height: 30px;
  border: 2px solid hsla(0, 0%, 100%, 0.5);
  transition: all 150ms ease-out, width 0.5s ease-out, height 0.5s ease-out;
  mix-blend-mode: difference;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-filter: blur(4px);
`;

function MouseTracker() {
  useEffect(() => {
    // Mouse Position
    const getMousePos = (e) => {
      return {
        x: e.clientX,
        y: e.clientY,
      };
    };

    // 마우스 커서 이벤트
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    // Nav OnMouseOver Events
    const nav = document.querySelector("[data-nav]");
    const NavMouseOver = (e) => {
      cursorDot.style.display = "none";
      cursorOutline.style.display = "none";
      nav.style.background = "#ffffff";
      nav.style.color = "#000000";
    };
    const NavMouseLeave = () => {
      cursorDot.style.display = "block";
      cursorOutline.style.display = "block";
      nav.style.background = "transparent";
      nav.style.color = "#ffffff";
    };

    const handleCursorEffect = (e) => {
      const posX = getMousePos(e).x;
      const posY = getMousePos(e).y;

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

    // 마우스 커서 클릭 이벤트
    const handleMouseActive = () => {
      cursorOutline.style.width = "50px";
      cursorOutline.style.height = "50px";
    };

    const handleMouseInactive = () => {
      cursorOutline.style.width = "30px";
      cursorOutline.style.height = "30px";
    };

    document.addEventListener("mousemove", handleCursorEffect);
    document.addEventListener("mousedown", handleMouseActive);
    document.addEventListener("mouseup", handleMouseInactive);
    nav.addEventListener("mouseover", NavMouseOver);
    nav.addEventListener("mouseleave", NavMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleCursorEffect);
      document.removeEventListener("mousedown", handleMouseActive);
      document.removeEventListener("mouseup", handleMouseInactive);
      nav.removeEventListener("mouseover", NavMouseOver);
      nav.removeEventListener("mouseleave", NavMouseLeave);
    };
  }, []);

  return (
    <>
      <CursorDot data-cursor-dot>
        <p></p>
      </CursorDot>
      <CursorOutline data-cursor-outline />
    </>
  );
}

export default MouseTracker;
