// React
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Mobile, PC } from "../functions/DeviceDectect";
import * as Configuration from "../config";

// Font
import "../styles/Font.css";

// Styles
import * as G from "../styles/GlobalStyle";
import * as S from "../styles/MainStyle";

// Lottie
import Lottie from "lottie-react";
// Lottie Json
import * as LottieScroll from "../lotties/scroll.json";

// Events
import MainEvents from "../functions/MainEvents";

const Main = (props) => {
  const [language, setLanguage] = useState("en");
  const Config = language ? Configuration.En_Configuration : Configuration.Ko_Configuration;

  // View Port Events

  const ViewPort = Config.ScrollEvents.MainPage.SlidingIntro.ViewPort;
  const [currentViewPortIndex, setCurrentViewPortIndex] = useState(0);

  window.addEventListener("scroll", () => {
    const posY = window.scrollY;
    ViewPort.map((item, index) => {
      if (posY >= item) {
        setCurrentViewPortIndex(index);
      }
    });
  });

  return (
    <>
      {/* MOBILE */}
      <Mobile>mobile</Mobile>
      {/* PC */}
      <PC>
        <G.Nav data-nav>{Config.Information.Name}</G.Nav>
        <S.LottieScroll data-lottie-scrolldown>
          <Lottie animationData={LottieScroll} width={100} height={100} />
        </S.LottieScroll>
        <G.Frame>
          <S.LandingTitleContainer>
            <G.Column jc="center" ai="center">
              <S.LandingTitleTop>{Config.Landing.Title[0]}</S.LandingTitleTop>
              <S.LandingTitleBottom data-landing-title-bottom>{Config.Landing.Title[1]}</S.LandingTitleBottom>
            </G.Column>
          </S.LandingTitleContainer>
        </G.Frame>
        <S.LongFrame>
          <S.FirstImageFrame data-first-image-frame>
            <S.FirstImage data-first-image>
              <img src={Config.Image.MainMacBook} alt="Main MacBook" />
            </S.FirstImage>
            <S.FirstImageText data-first-image-text>
              <p>{Config.Landing.SlidingIntro}</p>
            </S.FirstImageText>
          </S.FirstImageFrame>
        </S.LongFrame>
        <G.Frame></G.Frame>
      </PC>
      <MainEvents />
    </>
  );
};

export default Main;
