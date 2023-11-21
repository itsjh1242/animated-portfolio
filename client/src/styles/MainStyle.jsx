import styled from "styled-components";

export const Landing = styled.div`
  width: 100%;
  height: 100vh;
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
`;

export const LandingTitle = styled.p`
  font-family: "En Medium";
  font-size: calc(60px + 3vw);

  &:first-child {
    font-size: calc(60px + 1vw);
  }

  &:nth-child(2) {
    position: relative;
    color: #000000;
    -webkit-text-stroke: 0.05vw #d3d3d3;
    text-transform: uppercase;

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
      animation: titleAnimate 8s linear infinite;
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
  }
`;
