import styled from "styled-components";

export const LottoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 50px);
`;

export const FrameHeader = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const GenerateFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 50px;
`;

export const ResultFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 50px;
`;

export const GenerateNumberFrame = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
`;

export const GenerateNumberRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const GenerateNumberTitle = styled.p`
  margin: 0 5px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
`;

export const GenerateNumber = styled.p`
  width: 25px;
  height: 25px;
  margin: 0px;
  font-size: 1.5rem;
  font-weight: 400;
  color: #d3d3d3;
`;

export const GenerateButton = styled.button`
  margin-top: 40px;
  width: fit-content;
  height: fit-content;
  border: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 1.15rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 15px 30px;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;
