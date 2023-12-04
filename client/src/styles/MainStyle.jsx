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
  position: absolute;
  width: fit-content;
  height: fit-content;
  bottom: 0;
  right: 0;
`;

export const MainMacBookLongFrame = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainMacBookImageFrame = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  clip-path: inset(0% 30%);
  transform: translateY(-25%);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`;

export const MainMacBookImage = styled.div`
  width: 100%;
  height: 500px;
  transition: all 1s ease-in-out;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SlidingIntro = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  transform: translateY(1000px);
`;

export const SlidingIntroItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;
  height: 100%;

  & > p {
    transition: all 1s ease-in-out;
    font-family: "En Bold";
    font-size: 80px;
    line-height: 80px;
    margin: 0;
    padding: 20px 30px;
    color: transparent;
  }
`;
