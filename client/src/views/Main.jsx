// React
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Mobile, PC } from "../functions/DeviceDectect";
// Font
import "../styles/Font.css";
// Styles
import * as G from "../styles/GlobalStyle";
import * as S from "../styles/MainStyle";
// keyframes
import * as KeyFrames from "../styles/Keyframes.css";
// Page Transition
import PageTransition from "../functions/PageTransition";

// Lottie
import Lottie from "lottie-react";
// Lottie Json
import * as LottieScroll from "../lotties/scroll.json";
// Events
import MainEvents from "../functions/MainEvents";
// Motion
import { motion } from "framer-motion";

const Main = (props) => {
  const Config = props.Config;

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
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
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
          <S.SecondSection>
            <S.SecondSectionBackground data-second-section-bg-context>
              <p>&lt;Stacks /&gt;</p>
            </S.SecondSectionBackground>
            <S.SecondSectionStack data-second-section-stack>
              {Config.Landing.SecondSectionSkills.map((item, index) => {
                return (
                  <S.SecondSectionStackItem id={item[1]} key={index} data-second-section-stack-item>
                    <p>{item[0][0]}</p>
                  </S.SecondSectionStackItem>
                );
              })}
            </S.SecondSectionStack>
          </S.SecondSection>
        </G.Frame>
        {/* Work Section - Grid */}
        <G.Frame width="100vw" height="400vh">
          <S.WorkSection data-work-section>
            <S.WorkSectionBackgroundContext data-work-section-bg-context>
              <p>&lt;Works /&gt;</p>
            </S.WorkSectionBackgroundContext>
            {Config.Landing.WorkSection.MainDisplay.map((item, index) => {
              return index % 2 === 0 ? (
                <>
                  <S.WorkSectionItem key={index} data-work-section-item id={index}>
                    <S.ImageBox>
                      <img src={"./images/main/" + item[0] + ".png"} alt=""></img>
                    </S.ImageBox>
                    <S.WorkSectionItemContext>
                      <div>
                        <p>{item[1]}</p>
                        <p>{item[2]}</p>
                      </div>
                    </S.WorkSectionItemContext>
                  </S.WorkSectionItem>
                </>
              ) : (
                <>
                  <S.WorkSectionItem key={index} data-work-section-item id={index}>
                    <S.WorkSectionItemContext>
                      <div>
                        <p>{item[1]}</p>
                        <p>{item[2]}</p>
                      </div>
                    </S.WorkSectionItemContext>
                    <S.ImageBox>
                      <img src={"./images/main/" + item[0] + ".png"} alt=""></img>
                    </S.ImageBox>
                  </S.WorkSectionItem>
                </>
              );
            })}
            <S.WorkSectionBelowContext>
              <p>Would you like to see more Works?</p>
              <p>Here Are My All Works!</p>
              <S.WorkSectionMoreButton data-work-section-btn>
                <p>View All Works</p>
              </S.WorkSectionMoreButton>
            </S.WorkSectionBelowContext>
          </S.WorkSection>
        </G.Frame>
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </PC>
      <MainEvents Config={Config} />
    </>
  );
};

export default Main;
