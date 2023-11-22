import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        cursor: none;
        margin: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
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

export const Nav = styled.div`
  width: 100%;
  padding: 30px 60px;
  position: fixed;
  top: 0;
  left: 0;
  font-family: "En Medium";
  font-size: 40px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
