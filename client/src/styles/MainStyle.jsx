import styled from "styled-components";

export const Landing = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px 60px;
`;

export const LandingTitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transform: translateY(-10%);
`;

export const LandingTitle = styled.p`
  font-family: "En Medium";
  font-size: 120px;

  &:first-child {
    font-size: 60px;
  }
`;
