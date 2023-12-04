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

  return (
    <>
      {/* MOBILE */}
      <Mobile>mobile</Mobile>
      {/* PC */}
      <PC>
        <G.Nav data-nav>{Config.Information.Name}</G.Nav>
        <S.LottieScroll>
          <Lottie animationData={LottieScroll} width={100} height={100} />
        </S.LottieScroll>
        <G.Container>
          <S.Landing>
            <S.LandingTitleContainer>
              <G.Column jc="center" ai="center">
                <S.LandingTitleTop>{Config.Landing.Title[0]}</S.LandingTitleTop>
                <S.LandingTitleBottom data-ltb>{Config.Landing.Title[1]}</S.LandingTitleBottom>
              </G.Column>
            </S.LandingTitleContainer>
          </S.Landing>
        </G.Container>
        <S.MainMacBookLongFrame>
          <S.MainMacBookImageFrame data-macbook-frame>
            <S.MainMacBookImage data-macbook-image>
              <img src={Config.Image.MainMacBook} alt="Main MacBook" />
            </S.MainMacBookImage>
          </S.MainMacBookImageFrame>
          <S.SlidingIntro data-sliding-intro>
            {Config.Landing.SlidingIntro.map((item, index) => (
              <S.SlidingIntroItem key={index} data-sliding-intro-item>
                <p data-IntroItem>{item[0]}</p>
              </S.SlidingIntroItem>
            ))}
          </S.SlidingIntro>
        </S.MainMacBookLongFrame>
      </PC>
      <MainEvents />
    </>
  );
};

export default Main;
