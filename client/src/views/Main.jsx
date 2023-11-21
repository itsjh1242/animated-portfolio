// React
import React from "react";
// import { Link } from "react-router-dom";
import { Mobile, PC } from "../function/DeviceDectect";
import * as Configuration from "../config";

// Font
import "../styles/Font.css";

// Styles
import * as G from "../styles/GlobalStyle";
import * as S from "../styles/MainStyle";

const Main = (props) => {
  const [language, setLanguage] = React.useState("en");
  const Config = language ? Configuration.En_Configuration : Configuration.Ko_Configuration;

  return (
    <>
      <Mobile>mobile</Mobile>
      <PC>
        <G.Nav>{Config.Information.Name}</G.Nav>
        <G.Container>
          <S.Landing>
            <S.LandingTitleContainer>
              <S.LandingTitle>I AM</S.LandingTitle>
              {Config.Landing.Title.map((title, index) => (
                <S.LandingTitle key={index} data-text={title}>
                  {title}
                </S.LandingTitle>
              ))}
            </S.LandingTitleContainer>
          </S.Landing>
        </G.Container>
      </PC>
    </>
  );
};

export default Main;
