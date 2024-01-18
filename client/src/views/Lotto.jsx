import React, { useState, useEffect } from "react";

import * as S from "../styles/LottoStyle";

const Lotto = () => {
  const [lottoNumber, setLottoNumber] = useState({
    Game_1: [0, 0, 0, 0, 0, 0],
    Game_2: [0, 0, 0, 0, 0, 0],
    Game_3: [0, 0, 0, 0, 0, 0],
    Game_4: [0, 0, 0, 0, 0, 0],
    Game_5: [0, 0, 0, 0, 0, 0],
    Game_6: [0, 0, 0, 0, 0, 0],
  });
  //   Number Generator
  const GenerateNumber = () => {
    var random;
    const newLottoNumber = { ...lottoNumber };
    for (let i = 0; i < Object.keys(lottoNumber).length; i++) {
      for (let j = 0; j < lottoNumber[Object.keys(lottoNumber)[i]].length; j++) {
        random = Math.floor(Math.random() * 45 + 1);
        if (lottoNumber[Object.keys(lottoNumber)[i]].includes(random)) {
          j--;
          continue;
        }
        newLottoNumber[Object.keys(lottoNumber)[i]][j] = random;
      }
      newLottoNumber[Object.keys(lottoNumber)[i]].sort((a, b) => a - b);
      //   newLottoNumber[Object.keys(lottoNumber)[i]]
      fetch("http://localhost:8080/api/")
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    setLottoNumber(newLottoNumber);
  };

  return (
    <>
      <S.LottoSection>
        <S.GenerateFrame>
          <S.FrameHeader>Lottery</S.FrameHeader>
          <S.GenerateNumberFrame>
            {Object.keys(lottoNumber).map((item, index) => (
              <S.GenerateNumberRow key={index}>
                <S.GenerateNumberTitle key={index}>{item}</S.GenerateNumberTitle>
                {lottoNumber[item].map((item, index) => (
                  <S.GenerateNumber key={index}>{item}</S.GenerateNumber>
                ))}
              </S.GenerateNumberRow>
            ))}
          </S.GenerateNumberFrame>
          <S.GenerateButton onClick={GenerateNumber}>Generate</S.GenerateButton>
        </S.GenerateFrame>
        <S.ResultFrame>
          <S.FrameHeader>Result</S.FrameHeader>
        </S.ResultFrame>
      </S.LottoSection>
    </>
  );
};

export default Lotto;
