import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColors = {
  blackColor: "#1d1d1d",
  pointColor: "#D0A2F7",
};

export const mediaFont = {
  tabletFontSize: "15px",
  mobileFontSize: "14px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    ul, li{
        list-style: none;
    }

    body{
        background-color: ${mainColors.blackColor};
        color: white;
        letter-spacing: -1px;
        word-break: break-all;
        /* =>단어 별로 줄바꿈 처리 */
        font-family: "Noto Sans KR", sans-serif;
    }

    a{
        text-decoration: none;
        color: "white";
    }
`;
