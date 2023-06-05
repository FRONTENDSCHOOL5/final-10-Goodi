import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'
import '../assets/font.css'

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #49ED3F;
    --sub-color: #3FD636;
    --gray100-color: #F2F2F2;
    --gray200-color: #E2E2E2;
    --gray300-color: #D3D3D3;
    --gray400-color: #9C9C9C;
    --gray400-color: #626262;
    --black-color: #000000;

    --font-reqular: 1rem;
  }

  ${reset}

  body {
    font-family: 'Pretendard-Regular';
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
`

export default GlobalStyle