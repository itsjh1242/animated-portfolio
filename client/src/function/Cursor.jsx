import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CursorContainer = styled.div`
  position: fixed;
  width: 35px;
  height: 35px;
  border: 1px solid rgb(244, 244, 244);
  border-radius: 50%;
  mouse-events: none;
  transition: transform 0.2s ease;
`;

const Cursor = styled.div`
  position: fixed;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgb(244, 244, 244);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  mouse-events: none;
`;

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActived, setIsActived] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseActive = () => {
      setIsActived(true);
    };

    const handleMouseInactive = () => {
      setIsActived(false);
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
      <CursorContainer style={{ top: position.y, left: position.x, transform: isActived ? "scale(1.5)" : "scale(1)" }}>
        <Cursor />
      </CursorContainer>
    </>
  );
}

export default MouseTracker;
