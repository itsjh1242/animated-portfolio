import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        cursor: none;
        margin: 0;
        padding: 0;
    }
    html {
      scroll-behavior: smooth;
      scroll-snap-type: y mandatory;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    p{
      margin: 0;
      padding: 0;
    }
    body {
        width: 100%;
        height: 100%;
        background-color: #101010;
        color: #ffffff;
        -ms-overflow-style: none;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        white-space: pre-wrap;
        
    }
    .draggable {
        -webkit-user-select: all;
        -moz-user-select: all;
        -ms-user-select: all;
        user-select: all;
      }
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 15px 30px 0 30px;
`;

export const Nav = styled.div`
  z-index: 100;
  width: fill-content;
  height: fill-content;
  margin: 15px 30px;
  padding: 5px 5px;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 20px;
  font-family: "En Medium";
  font-size: 30px;
  transition: all 0.5s ease-in-out;
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ai};
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
