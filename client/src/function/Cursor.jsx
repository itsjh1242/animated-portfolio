import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CursorContainer = styled.div`
  position: relative;
`;

const Cursor = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #d3d3d3;
  transform: translate(-50%, -50%);
`;

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <CursorContainer>
        <Cursor style={{ top: position.y, left: position.x }} />
      </CursorContainer>
    </>
  );
}

export default MouseTracker;
