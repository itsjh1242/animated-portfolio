import styled, { css, keyframes } from "styled-components";

export const Landing = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 60px;
`;

export const LandingTitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transform: translateY(-5%);
  line-height: 110px;
`;

export const Titletop = styled.p`
  font-family: "En Medium";
  font-size: calc(60px + 1vw);
  color: #d3d3d3;
`;

export const TitleCenter = styled.p`
  font-family: "En Medium";
  font-size: calc(60px + 3vw);
  position: relative;
  color: #000000;
  -webkit-text-stroke: 0.05vw #d3d3d3;

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    color: #d3d3d3;
    -webkit-text-stroke: 0.01vw #000000;
    border-right: 0.1vw solid #d3d3d3;
    overflow: hidden;
    animation: titleAnimate 8s infinite;
  }

  @keyframes titleAnimate {
    0% {
      width: 0;
    }
    50% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
`;

export const TitleBottom = styled.p`
  font-family: "En Medium";
  font-size: calc(60px + 3vw);
  color: #d3d3d3;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
