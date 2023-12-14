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
  display: flex;
  position: relative;
  width: 100%;
  height: 350vh;
`;

export const FirstImageFrame = styled.div`
  position: absolut;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  clip-path: inset(0% 30%);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  transition: opacity 0.5s ease-in-out, clip-path 0.05s ease-in-out, height 0.05s ease-in-out;
`;

export const FirstImage = styled.div`
  width: 100%;
  height: 14%;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease-in-out;
  }
`;

export const FirstImageText = styled.div`
  position: absolute;
  bottom: 0;
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

export const FirstExtraSection = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr 3fr;
  place-items: flex-start center;
  width: 100%;
  height: 100%;

  & > p:nth-child(1) {
    font-family: "Ko Medium";
    font-size: 24px;
    color: #ffffff;
  }
  & > p:nth-child(2) {
    font-family: "Ko Medium";
    font-size: 24px;
    color: #ffffff;
  }
  & > p:nth-child(3) {
    font-family: "Ko Medium";
    font-size: 24px;
    color: #ffffff;
    transition: all 0.5s ease-in-out;
    mix-blend-mode: difference;
  }
`;

// Second Section
// Scroll Display of Stacks/ Skills
export const SecondSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SecondSectionStack = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
  place-items: center center;
  width: 100%;
  height: 100%;
`;

export const SecondSectionStackItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  & > p {
    font-family: "En Bold";
    font-size: calc(16px + 0.8vw);
    color: #6f6f6f;
    text-align: center;
  }
`;

// Work Section
export const WorkSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const WorkSectionGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 80px;
  place-items: start center;
  width: 100%;
  height: 100%;
  padding-top: 5%;
`;

export const WorkSectionGridItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 65%;
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  & > .imgBox {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }
  & > .imgBox img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: all 1s ease-in-out;
  }

  &:nth-child(1) {
    width: 70%;
    height: 100%;
    & p:nth-child(1) {
      text-align: center;
      font-family: "Ko Bold";
      font-size: calc(24px + 0.5vw);
      color: #ffffff;
    }
    & p:nth-child(2) {
      text-align: center;
      font-family: "Ko Medium";
      font-size: calc(16px + 0.5vw);
      color: #6f6f6f;
    }
  }
  &:nth-child(2) {
    transform: translateX(20%);
  }
  &:nth-child(2),
  &:nth-child(3) {
    & p:nth-child(1) {
      text-align: center;
      font-family: "Ko Bold";
      font-size: calc(12px + 0.5vw);
      color: #ffffff;
    }
    & p:nth-child(2) {
      text-align: center;
      font-family: "Ko Medium";
      font-size: calc(8px + 0.5vw);
      color: #6f6f6f;
    }
  }
`;

export const WorkSectionGridItemText = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #000000;
`;
