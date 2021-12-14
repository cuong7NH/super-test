import styled from 'styled-components'
import { THEME_OPTIONS } from '../../constant'
import { darkTheme, lightTheme } from '../../theme'


type Props = {
  themeProvider: {
    theme: string
  }

}

export const FooterWrapper = styled.div<Props>`
  background-color: ${(themeProvider) => themeProvider.theme === THEME_OPTIONS.DARK ? darkTheme.highlightColor : lightTheme.highlightColor};
  color: #fff;
  padding: 20px 0;
  margin-top: 60px;
  @media screen and (min-width: 481px) {
    margin-top: 80px;
  }
  .footer-content {
    .logo {
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 8px;
      color: #FFF;
    }
  }

  .copyright {
    text-align: center;
    font-style: italic;
    font-size: 14px;
    color: #d7d4ff;
  }
`