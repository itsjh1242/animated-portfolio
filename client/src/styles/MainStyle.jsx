import styled from "styled-components";

export const LandingTitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 130px;
  transform: translateY(-10%);
`;

export const LandingTitleTop = styled.p`
  font-family: "En Light";
  font-size: 80px;
  line-height: 80px;
`;

export const LandingTitleBottom = styled.p`
  font-family: "En Bold";
  font-size: 100px;
  line-height: 100px;

  animation: fadein 4s;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const LottieScroll = styled.div`
  position: absolute;
  background-color: transparent;
  width: fit-content;
  height: fit-content;
  top: 0;
  right: 0;
  transition: all 1s ease-in-out;
`;

export const LongFrame = styled.div`
  width: 100vw;
  height: 350vh;
`;

export const FirstImageFrame = styled.div`
  position: relative;
  top: -200px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  clip-path: inset(0% 30%);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  transition: opacity 0.5s ease-in-out, clip-path 0.1s ease-in-out, height 0.1s ease-in-out;
`;

export const FirstImage = styled.div`
  width: 100%;
  height: 14%;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FirstImageText = styled.div`
  position: absolute;
  bottom: 1%;
  left: 0;
  width: 100%;
  height: auto;
  transition: opacity 1s ease-in-out;

  & > p {
    white-space: pre-wrap;
    text-align: center;
    font-family: "En Bold";
    font-size: 80px;
    line-height: 70px;
    color: #ffffff;
    text-transform: uppercase;
  }
`;
