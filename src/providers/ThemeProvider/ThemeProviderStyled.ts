import { createGlobalStyle } from 'styled-components'

type styledProps = {
  theme: {
    body: string,
    text: string
  };
}


export const GlobalStyle = createGlobalStyle<styledProps>`

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
    
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.text};
  }

`