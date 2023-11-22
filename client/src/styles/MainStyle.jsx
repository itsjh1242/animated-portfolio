import styled from "styled-components";

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
  font-size: calc(40px + 1vw);
  color: #d3d3d3;
`;

export const TitleCenter = styled.p`
  font-family: "Ko Medium";
  font-size: calc(100px + 3vw);
  position: relative;
  color: transparent;
  -webkit-text-stroke: 0.05vw #d3d3d3;

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    color: #d3d3d3;
    border-right: 0.5vw solid #d3d3d3;
    overflow: hidden;
    animation: titleAnimate 4s infinite;
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
  white-space: nowrap;
  postion: fixed;
  color: #d3d3d3;
  font-family: "En Bold";
  font-size: calc(100px + 3vw);
  animation: textAnimation 1s ease-in-out;
  animation-delay: ${(props) => props.idx * 0.1}s;

  @keyframes textAnimation {
    0%,
    40%,
    100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-15px);
    }
  }
`;

export const LottieScroll = styled.div`
  background-color: transparent;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateX(20%);
`;
