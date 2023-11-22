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

const Main = (props) => {
  const [language, setLanguage] = useState("en");
  const Config = language ? Configuration.En_Configuration : Configuration.Ko_Configuration;

  const [TitleSlideIdx, setTitleSlideIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleSlideIdx((prevIdx) => (prevIdx + 1) % Config.Landing.Title.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [Config.Landing.Title.length, TitleSlideIdx]);

  return (
    <>
      <Mobile>mobile</Mobile>
      <PC>
        <G.Nav>{Config.Information.Name}</G.Nav>
        <G.Container>
          <S.Landing>
            <S.LandingTitleContainer>
              <S.Titletop>I AM</S.Titletop>
              <S.TitleCenter data-text={Config.Landing.Title[TitleSlideIdx][0]}>{Config.Landing.Title[TitleSlideIdx][0]}</S.TitleCenter>
              <G.Row>
                {Config.Landing.Title[TitleSlideIdx][1].map((char, idx) => (
                  <S.TitleBottom key={[idx, TitleSlideIdx]} data-text={char} idx={idx}>
                    {char}
                  </S.TitleBottom>
                ))}
              </G.Row>
            </S.LandingTitleContainer>
            <S.LottieScroll>
              <Lottie animationData={LottieScroll} width={100} height={100} />
            </S.LottieScroll>
          </S.Landing>
        </G.Container>
      </PC>
    </>
  );
};

export default Main;
