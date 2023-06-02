import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'



const GlobalStyle = createGlobalStyle `
  ${reset}
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