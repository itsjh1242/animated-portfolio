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
// keyframes
import * as KeyFrames from "../styles/Keyframes.css";

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
    ViewPort.map((item, index) => () => {
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
        <S.LottieScroll data-lottie-scrolldown>
          <Lottie animationData={LottieScroll} width={100} height={100} />
        </S.LottieScroll>
        <G.Frame width="100%" height="80vh">
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
              <img data-first-image-this src={Config.Image.MainMacBook} alt="Main MacBook" />
            </S.FirstImage>
            <S.FirstImageText data-first-image-text>
              <p>{Config.Landing.SlidingIntro}</p>
            </S.FirstImageText>
          </S.FirstImageFrame>
        </S.LongFrame>
        <G.Frame width="100%" height="100%" data-first-section-end>
          <S.FirstExtraSection>
            {Config.Landing.FirstSection.map((item, index) => {
              return (
                <p data-first-section-context key={index}>
                  {item}
                </p>
              );
            })}
          </S.FirstExtraSection>
        </G.Frame>
        {/* Second Section */}
        {/* Define: Scroll Animation Display - Skills / Stacks */}
        <G.Frame width="100%" height="100vh">
          <S.SecondSection data-second-section>
            <S.SecondSectionBackground data-second-section-bg></S.SecondSectionBackground>
            <S.SecondSectionTitle data-second-section-title>&lt;STACKS /&gt;</S.SecondSectionTitle>
            <S.SecondSectionGrid>
              {Config.Landing.SecondSectionSkills.map((item, index) => {
                return (
                  <S.SecondSectionGridItem data-second-section-grid-item key={index} id={item[1]}>
                    <div className="imgBox">
                      <img src={"./stacks/" + item[1] + ".png"} alt=""></img>
                    </div>
                    <p>{item[0]}</p>
                  </S.SecondSectionGridItem>
                );
              })}
            </S.SecondSectionGrid>
          </S.SecondSection>
        </G.Frame>
        <G.Frame width="100%" height="100vh"></G.Frame>
      </PC>
      <MainEvents />
    </>
  );
};

export default Main;
