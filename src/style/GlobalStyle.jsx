import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "../assets/font.css";

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #49ED3F;
    --sub-color: #3FD636;
    --gray100-color: #F2F2F2;
    --gray200-color: #E2E2E2;
    --gray300-color: #D3D3D3;
    --gray400-color: #9C9C9C;
    --gray500-color: #626262;
    --black-color: #000000;

  }

  :root {
        --font--Bold: 'Pretendard-Bold';
        --font--semibold: 'Pretendard-semiBold';
        --font--Medium: 'Pretendard-Medium';
        --font--Regular: 'Pretendard-Regular';
        // 사용시 fontweight : 900 으로 꼭 줘야함
        --font--en: "Montserrat";
    }

  ${reset}

  body {
    font-family: var(--font--Regular);
  }

  input {
    all: unset;
  }

  button {
    all: unset;
  }

  img {
    vertical-align: top;
  }

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;

export default GlobalStyle;
